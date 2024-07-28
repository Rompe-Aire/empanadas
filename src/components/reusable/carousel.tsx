import { useState, useEffect } from "react";
import Image from "next/image";

// Definimos la interfaz para las propiedades que recibirá el componente Carousel
interface CarouselProps {
  images: string[]; // Un array de strings que representa las URLs de las imágenes a mostrar
  showButtons?: boolean; // Propiedad opcional para mostrar u ocultar los botones de navegación
  autoplay?: boolean; // Propiedad opcional para activar o desactivar el autoplay
}

// Definimos el componente funcional Carousel usando TypeScript
const Carousel: React.FC<CarouselProps> = ({ images, showButtons = true, autoplay = false }) => {
  // Definimos el estado para el índice de la imagen seleccionada
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Definimos el estado para la URL de la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(images[selectedIndex]);

  // Efecto secundario que actualiza la URL de la imagen seleccionada cuando cambia el índice o la lista de imágenes
  useEffect(() => {
    setSelectedImage(images[selectedIndex]);
  }, [selectedIndex, images]); // Dependencias: se ejecuta cuando cambia selectedIndex o images

  // Efecto secundario que maneja el autoplay
  useEffect(() => {
    // Variable para almacenar el identificador del intervalo
    let interval: NodeJS.Timeout | null = null;
    
    // Si autoplay es verdadero o showButtons es falso, se establece un intervalo para cambiar la imagen automáticamente
    if (autoplay || !showButtons) {
      interval = setInterval(() => {
        selectNewImage(selectedIndex, true); // Llamamos a la función para cambiar a la siguiente imagen
      }, 3000); // El intervalo se establece en 3000 ms (3 segundos)
    }

    // Limpiamos el intervalo cuando el componente se desmonte o cambien las dependencias
    return () => {
      if (interval) {
        clearInterval(interval); // Limpiamos el intervalo para evitar fugas de memoria
      }
    };
  }, [selectedIndex, autoplay, showButtons, images]); // Dependencias: se ejecuta cuando cambian selectedIndex, autoplay, showButtons o images

  // Función para seleccionar una nueva imagen
  const selectNewImage = (index: number, next: boolean) => {
    let newIndex = index;
    // Si next es verdadero, avanzamos al siguiente índice; si no, retrocedemos
    if (next) {
      newIndex = (index + 1) % images.length; // Avanzamos al siguiente índice y usamos el módulo para circular al principio si es necesario
    } else {
      newIndex = index - 1; // Retrocedemos al índice anterior
      if (newIndex < 0) {
        newIndex = images.length - 1; // Si el índice es menor a 0, nos movemos al último índice
      }
    }
    // Actualizamos el índice seleccionado
    setSelectedIndex(newIndex);
  };

  // Función para cambiar a la imagen anterior
  const previous = () => {
    selectNewImage(selectedIndex, false);
  };

  // Función para cambiar a la siguiente imagen
  const next = () => {
    selectNewImage(selectedIndex, true);
  };

  // Renderizamos el componente
  return (
    <div className="w-full h-full relative"> {/* Contenedor principal del carousel */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out"> {/* Contenedor de la imagen con transición */}
        <Image
          src={selectedImage} // Fuente de la imagen seleccionada
          alt="Carousel Image" // Texto alternativo para la imagen
          layout="fill" // Ajusta la imagen para llenar el contenedor
          objectFit="cover" // Cubre el contenedor sin distorsionar la imagen
          objectPosition="center" // Centra la imagen dentro del contenedor
        />
      </div>
      {showButtons && ( // Solo muestra los botones si showButtons es verdadero
        <div className="absolute inset-0 flex items-center justify-between px-4"> {/* Contenedor de los botones de navegación */}
          <button onClick={previous} className="text-white text-4xl focus:outline-none">&#8249;</button> {/* Botón para la imagen anterior */}
          <button onClick={next} className="text-white text-4xl focus:outline-none">&#8250;</button> {/* Botón para la siguiente imagen */}
        </div>
      )}
    </div>
  );
};

export default Carousel; // Exportamos el componente Carousel para que pueda ser usado en otros archivos
