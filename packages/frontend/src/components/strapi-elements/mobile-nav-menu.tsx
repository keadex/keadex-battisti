import Image from "./image";
import ButtonLink from "./button-link";
import CustomLink from "./custom-link";
import { getStrapiButtonAppearance } from "../../helper/strapi-helper";
import { StrapiNavBarProps } from "./navbar";


const MobileNavMenu = ({ navbar, closeSelf } : StrapiNavBarProps) => {
  // Prevent window scroll while mobile nav menu is open

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Company logo */}
          <Image media={navbar.logo} className="h-8 w-auto object-contain" />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            icon close
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {navbar.links.map((navLink) => (
              <li key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="hover:text-gray-900 py-6 flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                    chevron right icon
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          <ButtonLink
            button={navbar.button}
            appearance={getStrapiButtonAppearance(navbar?.button?.type!, "light")}
          />
        </div>
      </div>
    </div>
  );
};


export default MobileNavMenu;
