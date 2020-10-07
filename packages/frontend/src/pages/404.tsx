import React from "react";
import PageLayout from "../components/page-layout/page-layout";
import notFoundImage from '../../public/img/404.svg'; 
import { GetStaticProps } from "next";
import { wrapper } from "../core/store/store";

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
        <img src={notFoundImage} className="full-center position-absolute text-center notfound__logo"/>
      </div>
    </PageLayout>
  );
}

export default PageNotFound;