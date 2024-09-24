'use client'

import { useEffect, useState } from "react";

import PortfolioDialog from "@/components/carousel/portfolio_carousel/PortfolioDialog";

interface CardArray {
    cardImages: any
}

export default function Portfolio(props: CardArray) {

    const [cardPosition, setCardPosition] = useState<number[]>([])

    useEffect(() => {
        defineKeyPositions()
    }, [props.cardImages])

    function defineKeyPositions() {
        let vetorCard: number[] = []

        props.cardImages.forEach((e: any, index: number) => {
            vetorCard.push(index)
        })

        setCardPosition(vetorCard)
    }

    return (
        <section className="portfolio_container" id="portfolio">
            <div className="portfolio_writing">
                <p className="portfolio_writing_paragraph">Inspiração e Excelência em Cada Detalhe</p>
                <h2 className="portfolio_writing_heading">Nossos Melhores projetos</h2>
            </div>
            <div className="portfolio_projects">
                <div className="portfolio_projects_cards">
                    {cardPosition.slice(0, Math.ceil(cardPosition.length / 2)).map((pos: number, index: number) => {
                        return <PortfolioDialog key={cardPosition[pos]} cardTriggerIndex={cardPosition[pos] ?? 0} source={props.cardImages} orderAnimation={index + 1} />
                    })}
                </div>
                <div className="portfolio_projects_cards">
                    {cardPosition.slice(Math.ceil(cardPosition.length / 2)).map((pos: number, index: number) => {
                        return <PortfolioDialog key={cardPosition[pos]} cardTriggerIndex={cardPosition[pos] ?? 0} source={props.cardImages} orderAnimation={index + 1} />
                    })}
                </div>
            </div>
        </section>
    )
}