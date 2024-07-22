import { Input, Textarea, Button } from "@nextui-org/react";

export default function ProvidersForm() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="w-full md:w-11/12 max-w-lg bg-slate-50 p-8 md:p-2 rounded-lg shadow-lg">
        <p className="text-2xl mb-4 text-center text-black">Proveedores</p>
        <form className="flex flex-col gap-4">
          <Input
            isRequired
            type="nombre"
            placeholder="Nombre"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="razonsocial"
            placeholder="Razón Social"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="telefono"
            placeholder="Teléfono"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Textarea
            isRequired
            placeholder="Mensaje"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
            rows={4}
          />
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Enviar</Button>
            <Button className="bg-gray-300 hover:bg-gray-400 text-black">Cancelar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
