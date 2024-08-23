import Card from "./Card"

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

export default function PortfolioCarousel(props: PortfolioSources) {

    let cardImages = [
        <Card card={props.source} fitCarrousel />,
        <Card card={props.source} fitCarrousel />,
        <Card card={props.source} fitCarrousel />
    ]

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-[full]"
        >
            <CarouselContent>
                {cardImages.map((value, index) => (
                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
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