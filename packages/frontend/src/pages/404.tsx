import React from "react";
import PageLayout from "../components/page-layout/page-layout";
import { GetStaticProps } from "next";
import { wrapper } from "../core/store/store";
import dynamic from "next/dynamic";

const OptimizedImage:any = dynamic(() => import('../components/optimized-image/optimized-image'));

//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({store}) => {
    return {
      props: {}
    }
  }
);

//------------------ COMPONENT
const PageNotFound : React.FunctionComponent<any> = () => {
  return (
    <PageLayout title="Keadex - Page not found">
      <div className='page-body'>
        <OptimizedImage src={"404.svg"} className="full-center position-absolute text-center notfound__logo"/>
      </div>
    </PageLayout>
  );
}

export default PageNotFound;