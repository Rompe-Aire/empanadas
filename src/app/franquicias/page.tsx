import { Button } from "@nextui-org/react";
import GoogleMap from "../components/google-map";

export default function Franquicias() {

    const nombre = "Ejemplo de Restaurante";
    const titulo = "Título de la sección";
    const subtitulo = "Subtítulo de la sección";
    const descripcion = "Descripción de las franquicias";

    const beneficios = [
        "Contamos con especialistas para todo el proceso de diseño y reformas del local.",
        "Todos nuestros productos son frescos, para mantener óptimos sus sabores y tener mínimo de desperdicio.",
        "Contamos con propia flota refrigerada para la distribución de productos e insumos.",
        "Contamos con una importante fábrica con la última tecnología para la elaboración de nuestros productos.",
        "Capacitación constante de franquiciados y apoyo operativo.",
        "Herramientas de marketing directo y apoyo publicitario."
    ];

    return (
        <main className="w-full">
            <section className="h-screen flex flex-col items-center justify-center text-center gap-1">
                <h1 className="text-5xl text-white font-bold uppercase">{titulo}</h1>
                <p className="text-4xl text-white">{subtitulo}</p>
            </section>

            <section className="flex flex-col text-center items-center py-8">
                <div className="gap-4 mb-2">
                    <h2>Franquicias {nombre}</h2>
                    <p>{descripcion}</p>
                </div>
                <ul className="mb-2 w-1/2 text-start p-2">
                    {beneficios.map((beneficio, index) => (
                        <li key={index} className="my-2">
                            <p>- {beneficio}</p>
                        </li>
                    ))}
                </ul>
                <Button radius="full" className="bg-yellow-500">Contactanos</Button>
            </section>

            <section className="flex justify-center items-center py-8">
                <div className=" w-11/12 flex">
                    <GoogleMap/>
                </div>
            </section>
        </main>
    );
}