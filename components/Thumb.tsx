import Image from "next/image";
import { FC } from "react";

interface ThumbProps {
  url: string;
  currentImage: string;
  setCurrentImage: (url: string) => void;
}

const Thumb: FC<ThumbProps> = ({ url, currentImage, setCurrentImage }) => {
  return (
    <img
      className={currentImage === url ? "active-image" : ""}
      src={url}
      onClick={() => setCurrentImage(url)}
    />
  );
};

export default Thumb;
