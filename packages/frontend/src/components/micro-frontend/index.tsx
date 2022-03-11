import React, { useEffect, useRef, useState } from "react";
import { useDynamicScript } from './use-dynamic-script'


//--------------- TYPES
interface RemoteAppInfo {
  url: string,
  scope: string,
  module: string
}

interface MicroFrontendProps {
  // Remote app info like url of remoteEntry.js, remote app's scope and module which will be imported.
  // We can provide these in runtime like fetching from a remote server. (Almost all these overlaps with webpack.dev.js in remote app)
  remoteAppInfo: RemoteAppInfo,
  // To support SSR. The component will have this content as initial html.
  innerHTMLContent?: string,
  // A delay time for showing a skeleton (loading skeleton)
  skeletonThreshold: number,
  // A skeleton (placeholder) component to show while loading on slow internet connections.
  skeleton: JSX.Element,
  // Id of the microfrontend container
  id: string,
  // Callback to execute when the microfrontend is loaded
  isReadyCallback?: (isReady:boolean)=>void
}

async function loadComponent(scope: string, module: string) {
  // @ts-ignore
  await __webpack_init_sharing__("default");
  // @ts-ignore
  const container = window[scope];
  // @ts-ignore
  await container.init(__webpack_share_scopes__.default);
  // @ts-ignore
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
}

//--------------- COMPONENT
const MicroFrontend: React.FunctionComponent<MicroFrontendProps> = ({ remoteAppInfo, innerHTMLContent, skeletonThreshold, skeleton, id, isReadyCallback }) => {
  
  console.log("Remote-App injecter (in host app) rendered");
  
  const skeletonTimeoutRef = useRef(-1);
  const { module, scope, url } = remoteAppInfo;
  const [remoteModule, setRemoteModule] = useState<any>(null);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    skeletonTimeoutRef.current = setTimeout(() => {
      setShowSkeleton(true);
    }, skeletonThreshold);
    return () => {
      if (skeletonTimeoutRef.current && skeletonTimeoutRef.current !== -1) {
        clearTimeout(skeletonTimeoutRef.current);
      }
    };
  }, [skeletonThreshold]);

  useEffect(() => {
    if (remoteModule) {
      if (skeletonTimeoutRef.current && skeletonTimeoutRef.current !== -1) {
        clearTimeout(skeletonTimeoutRef.current);
      }
      const { mount } = remoteModule;
      mount()
      setShowSkeleton(false)
      if (isReadyCallback) isReadyCallback(true)
    }
  }, [remoteModule, isReadyCallback]);
  
  const { ready } = useDynamicScript(url);
  
  useEffect(() => {
    async function load() {
      if (ready && !remoteModule) {
        const fetchedModule = await loadComponent(scope, module);
        setRemoteModule(fetchedModule);
      }
    }
    load();
  }, [remoteModule, ready, module, scope]);

  
  return (
    <div id={id}>
      {showSkeleton && skeleton}
      {/* <div
        dangerouslySetInnerHTML={{ __html: innerHTMLContent ?? "<div></div>" }}
        ref={wrapperRef}
      /> */}
    </div>
  );
}

// Never re-render when parent/prop changes
export default React.memo(MicroFrontend, () => true);
