import { getStrapiButtonAppearance } from '../../helper/strapi-helper';
import { ComponentSectionsBottomActions } from '../../model/autogenerated-graphql-strapi';
import ButtonLink from '../strapi-elements/button-link';

interface BottomActionsProps {
  data: ComponentSectionsBottomActions
}

const BottomActions:React.FC<BottomActionsProps> = ({ data }:BottomActionsProps) => {
  return (
    <section className="bg-primary-800 py-20 text-center">
      <h2 className="title text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row justify-center flex-wrap gap-4">
        {data.buttons?.map((button) => (
          <ButtonLink
            button={button}
            appearance={getStrapiButtonAppearance(button?.type!, "dark")}
            key={button?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BottomActions;