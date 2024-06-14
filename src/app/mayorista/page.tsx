import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";


export default function Mayorista() {

    const titulo = ""
    const subtitulo = ""
    const descripcion = ""
    
    return (
        <main className="w-full">
            <section>
                <h1>{titulo}</h1>
            </section>

            <section className=" h-max py-8">
                <div>
                    <h2>{subtitulo}</h2>
                    <p>{descripcion}</p>
                </div>

                <form action="" className=" flex flex-col gap-4 items-center" id="contacto">
                    <Input isRequired type="nombre" placeholder="Nombre" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
                    <Input isRequired type="email" placeholder="Email" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
                    <Input isRequired type="telefono" placeholder="Telefono" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
                
                    <Input isRequired type="empresa" placeholder="Nombre empresa" className="w-2/4 bg-yellow-500 max-md:w-10/12" />

                    <Textarea isRequired placeholder="Mensaje" className="w-2/4 bg-yellow-500 max-md:w-10/12" />
                    <Button radius="full" className="bg-yellow-500">Enviar</Button>
                </form>
            </section>
        </main>
    )
}