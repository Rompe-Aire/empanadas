'use client'
import Image from "next/image";
import ContactForm from "@/components/forms/contact-form";
import Carousel from "@/components/reusable/carousel";
import backgrounds from "./backgrounds";

export default function Home() {
  const nombre = "La Leyenda";
  const subtitulo = "El Sabor de la Ambrosia";
  const eslogan = "La Verdadera Empanada";
  const descripcion =
    "En La Leyenda, el arte culinario cobra vida en cada esquina. Nos dedicamos a la creación de empanadas artesanales que trascienden los límites de la exquisitez. Con una meticulosa atención al detalle y una pasión inquebrantable por la calidad, hemos perfeccionado el arte de la empanada hasta convertirlo en una experiencia sublime. Cada bocado es una obra maestra, elaborada con ingredientes selectos y un cuidado artesanal que eleva el paladar a nuevas alturas. Descubre el legendario sabor de nuestras creaciones y sumérgete en un universo de deleite gastronómico, donde la excelencia es nuestra única norma.";

  return (
    <main className="w-full">

      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <Carousel images={backgrounds} showButtons/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-8 pointer-events-none">
          <h1 className="text-5xl text-white font-bold uppercase">
            Empanadas:
            <br className="md:hidden" /> {nombre}
          </h1>
          <p className="text-4xl text-white">{subtitulo}</p>
        </div>
      </section>

      <section className="relative w-full md:h-screen flex items-center justify-center max-md:flex-col-reverse py-8" id="nosotros">
        <div className="w-1/2 max-md:w-full flex items-center h-full">
          <Image src="/backgrounds/empanada-arg.jpg" alt={eslogan} width={600} height={600} className="h-full w-full" />
        </div>

        <div className="flex flex-col w-1/2 max-md:w-full text-center px-2 md:px-4 gap-4 max-md:mb-4">
          <h2 className="uppercase text-2xl font-bold">{eslogan}</h2>
          <p>{descripcion}</p>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center text-center py-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgrounds/empanadas.jpg"
            alt={eslogan}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center w-10/12 bg-gray-300 bg-opacity-60 rounded-lg shadow-lg py-8 px-4">
          <h3 className="font-bold text-3xl text-center text-white mb-4">El sabor de recién hechas en todo momento.</h3>
          <div className="flex items-center">
            <Image src="/svg-icons/kitchen.svg" alt="cocina" width={96} height={96} />
          </div>
          <p className="mt-4 text-center">
            Si decidiste comer tus empanadas luego, nosotros te enseñamos a calentarlas en su punto justo.<br />
            Calentá el horno al máximo durante 15 minutos.<br />
            Después reducí el nivel a 220 grados y poné las empanadas durante 5 minutos.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center text-center py-8 gap-4" id="contacto">
        <h3 className="font-bold text-3xl">Contactanos</h3>
        <ContactForm />
      </section>
      
    </main>
  );
}