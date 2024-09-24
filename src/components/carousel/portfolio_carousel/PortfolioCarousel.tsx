"use client";

import Card from "../../card/Card"

import { useEffect, useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface PortfolioSources {
    source: any
    cardSelected: number
}

export default function PortfolioCarousel(props: PortfolioSources) {

    const [cardImages, setCardImages] = useState<JSX.Element[]>([])

    useEffect(() => {
        const shiftedItems = shiftArray(props.source, props.cardSelected)
        sortItems(shiftedItems)
    }, [props.source])

    function shiftArray(arr: any, times: number) {
        // Normalize o número de deslocamentos
        const shiftCount = times % arr.length; // Evita deslocamentos desnecessários
        return [...arr.slice(shiftCount), ...arr.slice(0, shiftCount)];
    }

    function sortItems(shift: any) {
        let carouselItems: JSX.Element[] = []

        shift.map((element: any, index: number) => (
            carouselItems.push(<Card card={element} fitCarrousel cardHover key={index} />)
        ))
        
        setCardImages(carouselItems)
    }

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-[full]"
        >
            <CarouselContent>
                {cardImages.map((value: any) => (
                    <CarouselItem key={value.key} className="md:basis-1/1 lg:basis-1/1">
                        <div>
                            {value}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}