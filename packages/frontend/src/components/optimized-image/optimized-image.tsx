
//------------------ TYPES
export interface ImageProps {
  path: string,
  className?: string,
  alt?: string
};


//------------------ COMPONENT
const OptimizedImage: React.FC<ImageProps> = ({ path, className, alt }) => {
  return (
    <picture>
      <source srcSet={require(`../../../public/img/${path}?webp`)} type="image/webp" />
      <img src={require(`../../../public/img/${path}`)} className={className??''} alt={alt??''} loading="lazy"/>
    </picture>
  );
};

export default OptimizedImage;