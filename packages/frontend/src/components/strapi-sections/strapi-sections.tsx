import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/router";
import { FC } from "react";
import { PageContentSectionsDynamicZone } from "../../model/autogenerated-graphql-strapi";
import BottomActions from "./bottom-actions";
import FeatureColumnsGroup from "./feature-columns-group";
import FeatureRowsGroup from "./feature-rows-group";
import Hero from "./hero";
import LargeVideo from "./large-video";
import Pricing from "./pricing";
import RichText from "./rich-text";
import TestimonialsGroup from "./testimonials-group";


interface StrapiSectionsProps{
  preview: boolean|null,
  sections: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>
}


// Map Strapi sections to section components
const sectionComponents:Map<String, FC<any>> = new Map<String, FC>();

sectionComponents.set("ComponentSectionsHero", Hero);
sectionComponents.set("ComponentSectionsLargeVideo", LargeVideo);
sectionComponents.set("ComponentSectionsFeatureColumnsGroup", FeatureColumnsGroup);
sectionComponents.set("ComponentSectionsFeatureRowsGroup", FeatureRowsGroup);
sectionComponents.set("ComponentSectionsBottomActions", BottomActions);
sectionComponents.set("ComponentSectionsTestimonialsGroup", TestimonialsGroup);
sectionComponents.set("ComponentSectionsRichText", RichText);
sectionComponents.set("ComponentSectionsPricing", Pricing);

// Display a section individually
const Section = ({ sectionData }:any) => {
  // Prepare the component
  const SectionComponent:FC<any>|undefined = sectionComponents.get(sectionData.__typename);

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  );
};

// Display the list of sections
const StrapiSections:React.FC<StrapiSectionsProps> = ({ sections, preview }:StrapiSectionsProps) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections!.map((section) => (
        <Section
          sectionData={section}
          key={`${section!.__typename}${section!.id}`}
        />
      ))}
    </div>
  );
};

export default StrapiSections;