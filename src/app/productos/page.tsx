'use client'

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Productos() {
    const empanadas = [
        {
            title: "Amstel",
            img: "/bebidas/Amstel.png",
            vol: "475",
            price: "$5.50",
        },
    ];

    const pizzas = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
    ];

    const otros = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
    ];

    const bebidas = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
    ];

    return (
        <main>
            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {empanadas.map((item, index) => (
                        <Card className="w-60 h-80 rounded-md bg-gray-900" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[260px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between flex flex-col">
                                <b>{item.title}</b>
                                <p>{item.vol}</p>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {pizzas.map((item, index) => (
                        <Card className="w-60 h-80" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between flex flex-col">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {otros.map((item, index) => (
                        <Card className="w-60 h-80" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between flex flex-col">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 px-4">
                <div className="flex gap-4">
                    {bebidas.map((item, index) => (
                        <Card className="w-60 h-80" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between flex flex-col">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}