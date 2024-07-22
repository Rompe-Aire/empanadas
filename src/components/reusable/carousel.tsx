import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  showButtons?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, showButtons = true }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[selectedIndex]);

  const selectNewImage = (index: number, next: boolean) => {
    let newIndex = index;
    if (next) {
      newIndex = (index + 1) % images.length;
    } else {
      newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
    }
    setSelectedImage(images[newIndex]);
    setSelectedIndex(newIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, true);
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out">
        <Image
          src={selectedImage}
          alt="Carousel Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {showButtons && (
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={previous} className="text-white text-4xl focus:outline-none">&#8249;</button>
          <button onClick={next} className="text-white text-4xl focus:outline-none">&#8250;</button>
        </div>
      )}
    </div>
  );
};

export default Carousel