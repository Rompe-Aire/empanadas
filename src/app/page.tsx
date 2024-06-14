import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export default function Home() {

  const nombre = "La Leyenda";
  const subtitulo = "El Sabor de la Ambrosia";
  const eslogan = "La Verdadera Empanada";
  const descripcion = "En La Leyenda, el arte culinario cobra vida en cada esquina. Nos dedicamos a la creación de empanadas artesanales que trascienden los límites de la exquisitez. Con una meticulosa atención al detalle y una pasión inquebrantable por la calidad, hemos perfeccionado el arte de la empanada hasta convertirlo en una experiencia sublime. Cada bocado es una obra maestra, elaborada con ingredientes selectos y un cuidado artesanal que eleva el paladar a nuevas alturas. Descubre el legendario sabor de nuestras creaciones y sumérgete en un universo de deleite gastronómico, donde la excelencia es nuestra única norma.";
  const seguidores = "255";

  return (
    <main className="w-full">

      <section className="h-screen flex flex-col items-center justify-center text-center gap-1">
        <h1 className="text-5xl text-white font-bold uppercase">Empanadas:<br className="md:hidden" /> {nombre}</h1>
        <p className="text-4xl text-white">{subtitulo}</p>
      </section>

      <section className="h-screen flex items-center justify-center max-md:flex-col-reverse py-8" id="nosotros">
        <div className="w-1/2 max-md:w-full">
          <Image src="/backgrounds/empanada-arg.jpg" alt={eslogan} width={700} height={700} />
        </div>

        <div className="flex flex-col w-1/2 max-md:w-full text-center px-2 md:px-4 gap-4 max-md:mb-4">
          <h2 className="uppercase text-2xl font-bold">{eslogan}</h2>
          <p>{descripcion}</p>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center text-center py-8">
        <h3 className="font-bold text-3xl">El sabor de recién hechas en todo momento.</h3>
        <div className="flex flex-col items-center w-10/12 mb-4">
          <Image src="/svg-icons/kitchen.svg" alt="cocina" width={96} height={96} />
          <p>
            Si decidiste comer tus empanadas luego, nosotros te enseñamos a calentarlas en su punto justo.<br />
            Calentá el horno al máximo durante 15 minutos.<br />
            Después reducí el nivel a 220 grados y pone las empanadas durante 5 minutos.
          </p>
        </div>

        <div className="flex items-center justify-between w-10/12 px-4">
          <div className="flex items-center">
            <Avatar src="/logo.png" className="w-24 h-24 text-large" />
            <div className="text-start">
              <p>{nombre}</p>
              <p>{seguidores} seguidores</p>
            </div>
          </div>
          <Button radius="full" className="bg-yellow-500">Follow Us</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 py-8">

        <h3 className="font-bold text-3xl text-center">Contactanos</h3>

        <form action="" className=" flex flex-col gap-4 items-center" id="contacto">
          <Input isRequired type="nombre" placeholder="Nombre" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
          <Input isRequired type="apellido" placeholder="Apellido" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
          <Input isRequired type="email" placeholder="Email" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
          <Input isRequired type="telefono" placeholder="Telefono" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
          <Textarea isRequired placeholder="Mensaje" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
          <Button radius="full" className="bg-yellow-500">Enviar</Button>
        </form>
      </section>
    </main>
  );
}
