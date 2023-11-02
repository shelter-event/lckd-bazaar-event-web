import { useEffect, useState } from "react"

const ImagePlaceHolder = ({ src, alt, placeHolder = 'load...', className, width, height }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src])

  if (imageLoaded) return <img
    className={className}
    src={src} alt={alt} style={{ width: width, height: height }}
  />
  return <div
    className={className}
    aria-label={alt}
    style={{
      width: width,
      height: height,
    }}>
    {placeHolder}
  </div>

}

export default ImagePlaceHolder