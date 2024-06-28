import Image from "next/image";
import { Avatar, Button, Input, Textarea } from "@nextui-org/react";

export default function Home() {
  const nombre = "La Leyenda";
  const subtitulo = "El Sabor de la Ambrosia";
  const eslogan = "La Verdadera Empanada";
  const descripcion =
    "En La Leyenda, el arte culinario cobra vida en cada esquina. Nos dedicamos a la creación de empanadas artesanales que trascienden los límites de la exquisitez. Con una meticulosa atención al detalle y una pasión inquebrantable por la calidad, hemos perfeccionado el arte de la empanada hasta convertirlo en una experiencia sublime. Cada bocado es una obra maestra, elaborada con ingredientes selectos y un cuidado artesanal que eleva el paladar a nuevas alturas. Descubre el legendario sabor de nuestras creaciones y sumérgete en un universo de deleite gastronómico, donde la excelencia es nuestra única norma.";
  const seguidores = "255";

  return (
    <main className="w-full">

      {/* Sección de inicio */}
      <section className="h-screen flex flex-col items-center justify-center text-center gap-1 relative">
        <Image
          src="/backgrounds/empanadas.jpg"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold uppercase">Empanadas:<br className="md:hidden" /> {nombre}</h1>
          <p className="text-4xl">{subtitulo}</p>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section className="h-screen flex items-center justify-center max-md:flex-col-reverse py-8" id="nosotros">
        <div className="w-full max-w-1/2 md:w-1/2">
          <Image src="/backgrounds/empanada-arg.jpg" alt={eslogan} width={700} height={700} />
        </div>
        <div className="flex flex-col w-full max-w-1/2 md:w-1/2 text-center px-4 gap-4 max-md:mb-4">
          <h2 className="uppercase text-2xl font-bold">{eslogan}</h2>
          <p>{descripcion}</p>
        </div>
      </section>

      {/* Sección Calentado de Empanadas */}
      <section className="h-screen relative flex justify-center" style={{ backgroundImage: 'url("/backgrounds/cocina.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-50 w-3/4 mx-auto text-black py-4 px-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-3xl mb-4 text-center">El sabor de recién hechas en todo momento.</h3>
            <div className="flex flex-col items-center mb-4">
              <Image src="/svg-icons/kitchen.svg" alt="Icono de cocina" width={96} height={96} />
              <p className="text-center">
                Si decidiste comer tus empanadas luego, nosotros te enseñamos a calentarlas en su punto justo.<br />
                Calentá el horno al máximo durante 15 minutos.<br />
                Después reducí el nivel a 220 grados y poné las empanadas durante 5 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="flex flex-col gap-4 py-8">
        <h3 className="font-bold text-3xl text-center">Contactanos</h3>
        <form action="" className="flex flex-col gap-4 items-center" id="contacto">
          <Input isRequired type="nombre" placeholder="Nombre" className="w-3/4 max-w-md bg-white text-black" />
          <Input isRequired type="apellido" placeholder="Apellido" className="w-3/4 max-w-md bg-white text-black" />
          <Input isRequired type="email" placeholder="Email" className="w-3/4 max-w-md bg-white text-black" />
          <Input isRequired type="telefono" placeholder="Telefono" className="w-3/4 max-w-md bg-white text-black" />
          <Textarea isRequired placeholder="Mensaje" className="w-3/4 max-w-md bg-white text-black" />
          <Button radius="full" className="bg-yellow-500">Enviar</Button>
        </form>
      </section>
    </main>
  );
}
