import { getStrapiMedia } from "../../helper/strapi-helper";
import { UploadFile } from '../../model/autogenerated-graphql-strapi';
import OptimizedMedia from '../optimized-media/optimized-media';

interface ImageProps {
  media: UploadFile,
  className: string
}

const Image = ({ media, className }:ImageProps) => {
  const { url, alternativeText } = media;
  const fullUrl:string = getStrapiMedia(url)!;

  return (
    <img src={fullUrl} alt={alternativeText || ""} className={className} />
  );
};

export default Image;
