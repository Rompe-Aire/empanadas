import { Input, Textarea, Button } from "@nextui-org/react";

export default function WholesalerForm() {
  return (
    <div className="flex-col gap-4 w-full">
      <form action="" className="flex flex-col gap-4 items-center">
        <Input
          isRequired
          type="nombre"
          placeholder="Nombre"
          className="w-2/4 bg-white text-black px-4 py-2 rounded-lg focus:outline-none max-md:w-10/12"
        />
        <Input
          isRequired
          type="email"
          placeholder="Email"
          className="w-2/4 bg-white text-black px-4 py-2 rounded-lg focus:outline-none max-md:w-10/12"
        />
        <Input
          isRequired
          type="telefono"
          placeholder="Telefono"
          className="w-2/4 bg-white text-black px-4 py-2 rounded-lg focus:outline-none max-md:w-10/12"
        />
        <Input
          isRequired
          type="empresa"
          placeholder="Nombre empresa"
          className="w-2/4 bg-white text-black px-4 py-2 rounded-lg focus:outline-none max-md:w-10/12"
        />
        <Textarea
          isRequired
          placeholder="Mensaje"
          className="w-2/4 bg-white text-black px-4 py-2 rounded-lg focus:outline-none max-md:w-10/12"
          rows={4}
        />
        <Button
          radius="full"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </Button>
      </form>
    </div>
  )
}