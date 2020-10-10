
import 'lazysizes';

//------------------ TYPES
export interface ImageProps {
  src: string,
  className?: string,
  alt?: string
};


//------------------ COMPONENT
const OptimizedImage: React.FC<ImageProps> = ({ src, className, alt }) => {
  if (!src.startsWith("http")){
    //return webp optimized pic only for local pictures thanks to "next-optimized-images" plugin
    return (
      <picture>
        <source srcSet={require(`../../../public/img/${src}?webp`)} type="image/webp" />
        <img data-src={require(`../../../public/img/${src}`)} className={"lazyload " + className??''} alt={alt??''}/>
      </picture>
    );
  }else{
    return (
      <img data-src={src} className={"lazyload " + className??''} alt={alt??''}/>
    );
  }
};

export default OptimizedImage;