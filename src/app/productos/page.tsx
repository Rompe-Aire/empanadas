import ProductCard from "../../components/reusable/product-card";
import empanadas from "./empanadas";
import pizzas from "./pizzas";
import otros from "./otros";
import bebidas from "./bebidas";
import cervezas from "./cervezas";


export default function Productos() {
 
    return (
        <main>
            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {empanadas.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {pizzas.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {otros.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {bebidas.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {cervezas.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </section>
        </main>
    );
}