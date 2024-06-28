'use client'

import { useState } from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Product {
    title: string;
    img: string;
    price: string;
    description: string;
}

interface ProductCardProps {
    item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
    const [showFront, setShowFront] = useState(true);

    const handleClick = () => {
        setShowFront(!showFront);
    };

    return (
        <Card className="w-60 h-80 rounded-md bg-gray-900" shadow="sm" isPressable onPress={handleClick}>
            {showFront ? (
                <>
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
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </>
            ) : (
                <CardBody className="overflow-visible">
                    <p className="text-white p-2">{item.description}</p>
                </CardBody>
            )}
        </Card>
    );
};

export default ProductCard;

