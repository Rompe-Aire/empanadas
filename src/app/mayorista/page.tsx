import WholesalerForm from "@/components/forms/wholesaler-form"
export default function Mayorista() {

    const titulo = "Compra Mayorista"
    const descripcion = "Completa tus datos para recibir nuestro catálogo y un asesor se pondrá en contacto contigo."

    return (
        <main className="w-full">
            <section className="flex flex-col items-center justify-center text-center py-8 gap-4">
                <h1 className="text-5xl uppercase font-bold">{titulo}</h1>
                <p>{descripcion}</p>
                <WholesalerForm/>
            </section>
        </main>
    )
}