import React from "react";
import PageLayout from "../components/page-layout/page-layout";
import { GetStaticProps } from "next";
import { wrapper } from "../core/store/store";
import dynamic from "next/dynamic";

const OptimizedMedia = dynamic(
  () => import('../components/optimized-media/optimized-media'),
  { ssr: false }
)

//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store => async (ctx) => {
    return {
      props: {}
    }
  })
);

//------------------ COMPONENT
const PageNotFound : React.FunctionComponent<any> = () => {
  return (
    <PageLayout title="Keadex - Page not found">
      <div className='page-body'>
        <OptimizedMedia src={"404.svg"} className="full-center position-absolute text-center notfound__logo" width={{default:"90%", sm: "95%"}} height={{default:"90vh"}} srcWidth={1472} srcHeight={1178}/>
      </div>
    </PageLayout>
  );
}

export default PageNotFound;