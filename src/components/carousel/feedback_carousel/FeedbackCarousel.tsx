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
}

export default function FeedbackCarousel(props: PortfolioSources) {

    const [cardImages, setCardImages] = useState<any>([])

    useEffect(() => {
        setCardImages([
            <Card card={props.source} fitCarrousel cardHover key={1} />,
            <Card card={props.source} fitCarrousel cardHover key={2} />,
            <Card card={props.source} fitCarrousel cardHover key={3} />
        ])
    }, [])

    return (
        <Carousel
            opts={{
                align: "start",
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