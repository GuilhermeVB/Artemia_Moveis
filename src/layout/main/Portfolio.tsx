import Card_1 from "/public/assets/Card_1.png";
import Card_2 from "/public/assets/Card_2.png";
import Card_3 from "/public/assets/Card_3.png";
import Card_4 from "/public/assets/Card_4.png";
import Card_5 from "/public/assets/Card_5.png";
import Card_6 from "/public/assets/Card_6.png";

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
                    <Card card={Card_1} />
                    <Card card={Card_2} />
                    <Card card={Card_3} />
                </div>
                <div className="portfolio_projects_cards">
                    <Card card={Card_4} />
                    <Card card={Card_5} />
                    <Card card={Card_6} />
                </div>
            </div>
        </section>
    )
}