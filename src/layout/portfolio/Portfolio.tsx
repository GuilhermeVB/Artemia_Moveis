import cardImage1 from "/public/assets/portfolio/card_1.png";
import cardImage2 from "/public/assets/portfolio/card_2.png";
import cardImage3 from "/public/assets/portfolio/card_3.png";
import cardImage4 from "/public/assets/portfolio/card_4.png";
import cardImage5 from "/public/assets/portfolio/card_6.png";
import cardImage6 from "/public/assets/portfolio/card_5.png";

import PortfolioDialog from "@/components/carousel/PortfolioDialog";

export default function Portfolio() {
    return (
        <section className="portfolio_container">
            <div className="portfolio_writing">
                <p className="portfolio_writing_paragraph">Inspiração e Excelência em Cada Detalhe</p>
                <h2 className="portfolio_writing_heading">Nossos Melhores projetos</h2>
            </div>
            <div className="portfolio_projects">
                <div className="portfolio_projects_cards">
                    <PortfolioDialog source={cardImage1} order={1} />
                    <PortfolioDialog source={cardImage2} order={2} />
                    <PortfolioDialog source={cardImage3} order={3} />
                </div>
                <div className="portfolio_projects_cards">
                    <PortfolioDialog source={cardImage4} order={1} />
                    <PortfolioDialog source={cardImage5} order={2} />
                    <PortfolioDialog source={cardImage6} order={3} />
                </div>
            </div>
        </section>
    )
}