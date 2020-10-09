import { getStrapiMedia } from '../../helper/strapi-helper';
import { UploadFile } from '../../model/autogenerated-graphql-strapi';

interface VideoProps {
  media: UploadFile,
  poster?: UploadFile,
  className: string,
  controls?: boolean,
  autoPlay?: boolean,
};

const Video = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = false,
}:VideoProps) => {
  const fullVideoUrl = getStrapiMedia(media.url)!;
  const fullPosterUrl = getStrapiMedia(poster?.url)!;

  return (
    <video
      className={className}
      poster={fullPosterUrl}
      controls={controls}
      autoPlay={autoPlay}
    >
      <source src={fullVideoUrl} type={media.mime} />
    </video>
  );
};

export default Video;