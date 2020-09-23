import ErrorPage from "next/error";
import StrapiSections from "../../components/strapi-sections/strapi-sections";
import StrapiSeo from "../../components/strapi-elements/strapi-seo";
import { useRouter } from "next/dist/client/router";
import NetworkService from "../../core/network/network.service";
import { StrapiResponse } from "../../model/models";
import { wrapper } from "../../core/store/store";
import { GetStaticProps } from "next";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, preview }:any) => {
  const router = useRouter();

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }
  return (
    <>
      {/* Add meta tags for SEO*/}
      <StrapiSeo metadata={metadata} />
      {/* Display content sections */}
      <StrapiSections sections={sections} preview={preview} />
    </>
  );
};

export async function getStaticPaths() {
  // Get all pages from Strapi
  const pages = await NetworkService.getInstance().getStrapiPages();
  let paths:any[] = [];
  if (pages.data && pages.data.data && pages.data.data.pages){
    paths = pages.data.data.pages.map((page) => {
      // Decompose the slug that was saved in Strapi
      let slugArray:string[] = [];
      if (page && page.slug) slugArray = page.slug.split("__");
      return {
        params: { slug: slugArray }
      };
    });
  }
  return { paths, fallback: true };
}


export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({params, preview = null}) => {
    // Find the page data for the current slug
    let chainedSlugs:string = "";
    if (params == {} || !params!.slug) {
      // To get the homepage, find the only page where slug is an empty string
      chainedSlugs = ``;
    } else {
      // Otherwise find a page with a matching slug
      // Recompose the slug that was saved in Strapi
      if (Array.isArray(params!.slug))
        chainedSlugs = params!.slug.join("__");
    }

    // Fetch pages. Include drafts if preview mode is on
    const pageData = await NetworkService.getInstance().getStrapiPageData(chainedSlugs, preview!);

    if (pageData == null) {
      // Giving the page no props will trigger a 404 page
      return { props: {} };
    }

    // We have the required page data, pass it to the page component
    const { contentSections, metadata } = pageData;
    return {
      props: {
        preview,
        sections: contentSections,
        metadata,
      },
    };
  }
);

export default DynamicPage;
