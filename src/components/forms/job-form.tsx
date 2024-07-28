import { Input, Textarea, Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";

interface JobFormProps {
  onClose: () => void; // Función para manejar el cierre del formulario
}

export default function JobForm({ onClose }: JobFormProps) {
  const formRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del formulario

  useEffect(() => {
    // Función para manejar el clic fuera del formulario
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Calcula el ancho del scrollbar
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Añadir la clase para bloquear el scroll y ajuste el margen derecho
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollBarWidth}px`;

    // Añadir el manejador de eventos cuando el componente se monta
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar el manejador de eventos y eliminar la clase cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto transition-opacity duration-300 ease-in-out opacity-100">
      <div
        ref={formRef}
        className="w-full md:w-11/12 max-w-lg bg-slate-50 p-8 md:p-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform scale-100"
      >
        <p className="text-2xl mb-4 text-center text-black">Trabajá con nosotros</p>
        <form className="flex flex-col gap-4">
          <Input
            isRequired
            type="text"
            placeholder="Nombre"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="text"
            placeholder="Apellido"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="tel"
            placeholder="Teléfono"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <Input
            isRequired
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <div>
            <p className="px-4 mb-2 text-black">Adjunte su CV</p>
            <Input
              type="file"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
            />
          </div>
          <Textarea
            isRequired
            placeholder="Mensaje"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
            rows={4}
          />
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Enviar</Button>
            <Button className="bg-gray-300 hover:bg-gray-400 text-black" onClick={onClose}>Cancelar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
