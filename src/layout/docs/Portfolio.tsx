import cardImage1 from "/public/assets/portfolio/card_1.png";
import cardImage2 from "/public/assets/portfolio/card_2.png";
import cardImage3 from "/public/assets/portfolio/card_3.png";
import cardImage4 from "/public/assets/portfolio/card_4.png";
import cardImage5 from "/public/assets/portfolio/card_6.png";
import cardImage6 from "/public/assets/portfolio/card_5.png";

import Card from "@/components/Card";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio_writing">
                <p className="portfolio_writing_paragraph">Inspiração e Excelência em Cada Detalhe</p>
                <h2 className="portfolio_writing_heading">Nossos Melhores projetos</h2>
            </div>
            <div className="portfolio_projects">
                <div className="portfolio_projects_cards">
                    <Card card={cardImage1} />
                    <Card card={cardImage2} />
                    <Card card={cardImage3} />
                </div>
                <div className="portfolio_projects_cards">
                    <Card card={cardImage4} />
                    <Card card={cardImage5} />
                    <Card card={cardImage6} />
                </div>
            </div>
        </section>
    )
}