import { Input, Textarea, Button } from "@nextui-org/react";

export default function ContactForm() {
  return (
    <div className="flex-col gap-4 w-full">
      <form action="" className="flex flex-col gap-4 items-center">
        <Input
          isRequired
          type="nombre"
          placeholder="Nombre"
          className="w-2/4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black max-md:w-10/12"
        />
        <Input
          isRequired
          type="apellido"
          placeholder="Apellido"
          className="w-2/4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black max-md:w-10/12"
        />
        <Input
          isRequired
          type="email"
          placeholder="Email"
          className="w-2/4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black max-md:w-10/12"
        />
        <Input
          isRequired
          type="telefono"
          placeholder="Telefono"
          className="w-2/4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black max-md:w-10/12"
        />
        <Textarea
          isRequired
          placeholder="Mensaje"
          className="w-2/4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black max-md:w-10/12"
          rows={4}
        />
        <Button radius="full" className="bg-yellow-500 hover:bg-yellow-600 text-white">Enviar</Button>
      </form>
    </div>
  );
}