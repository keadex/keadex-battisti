import React, {
  useState,
  useEffect,
  createContext,
  useContext} from 'react';

//------------ TYPES
export type Query = {
  [index:string]: string,
}

type BreakpointProviderProps = {
  children: JSX.Element,
  queries: Query
}


//------------ GLOBALS
const defaultValue : Query = {}
const BreakpointContext = createContext<Query>(defaultValue);


//------------ BREAKPOINT PROVIDER
const BreakpointProvider = ({children, queries}:BreakpointProviderProps) => {
  const [queryMatch, setQueryMatch] = useState<Query>({});

  useEffect(() => {
    const mediaQueryLists : any = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc:any, media:string) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches : any = {};
      keys.forEach((media:string) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if(typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      });
    }

    return () => {
      if(isAttached) {
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        });
      }
    }
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

//------------ useBreakpoint
function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if(context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
}


//------------ HOC withHookBreakpoint
//HOC to use breakpoints feature inside class components

//------- TYPES
export type HooksBreakpointProps = {
  breakpoints?: Query,
}

//------- withHooksBreakpoint
function withHooksBreakpoint<T>(Component: React.ComponentType<T & HooksBreakpointProps>) {
  return (props: T & HooksBreakpointProps) => {
    let breakpoints = useBreakpoint();

    return <Component breakpoints={breakpoints} {...props} />;
  };
};

export {useBreakpoint, BreakpointProvider, withHooksBreakpoint};