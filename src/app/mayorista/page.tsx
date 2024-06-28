import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";


export default function Mayorista() {

    const titulo = "Compra Mayorista"
    const subtitulo = "Compra Calidad"
    const descripcion = "Completa tus datos para recibir nuestro catálogo y un asesor se pondrá en contacto contigo."

    return (
        <main className="w-full">
            <section className=" text-center py-8">
                <h1 className="text-5xl uppercase font-bold">{titulo}</h1>
            </section>

            <section className=" h-max py-8|">
                <div className=" text-center mb-4">
                    <h2 className=" text-4xl uppercase font-bold">{subtitulo}</h2>
                    <p>{descripcion}</p>
                </div>

                <form action="" className="flex flex-col gap-4 items-center" id="contacto">
                    <Input isRequired type="nombre" placeholder="Nombre" className="w-2/4 bg-white text-black max-md:w-10/12" />
                    <Input isRequired type="email" placeholder="Email" className="w-2/4 bg-white text-black max-md:w-10/12" />
                    <Input isRequired type="telefono" placeholder="Telefono" className="w-2/4 bg-white text-black max-md:w-10/12" />
                    <Input isRequired type="empresa" placeholder="Nombre empresa" className="w-2/4 bg-white text-black max-md:w-10/12" />
                    <Textarea isRequired placeholder="Mensaje" className="w-2/4 bg-white text-black max-md:w-10/12" />
                    <Button radius="full" className="bg-yellow-500">Enviar</Button>
                </form>
            </section>
        </main>
    )
}