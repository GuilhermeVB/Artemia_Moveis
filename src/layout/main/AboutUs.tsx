import goalsBackground from '/public/assets/aboutus/goals_background.png';
import goalImage1 from '/public/icons/goal_1.svg';
import goalImage2 from '/public/icons/goal_2.svg';
import goalImage3 from '/public/icons/goal_3.svg';

import Goal from "@/components/Goal";

export default function AboutUs() {
    return (
        <section>
            <article className="goals" style={{ backgroundImage: `url('${goalsBackground.src}')` }}>
                <Goal
                    icon={goalImage1}
                    title='Qualidade de Produto'
                    paragraph='Na Artemia Móveis, a qualidade é nossa prioridade. 
                    Nossos móveis planejados são duráveis e sofisticados, 
                    proporcionando funcionalidade e estilo para satisfazer 
                    plenamente nossos clientes.'
                />
                <Goal
                    icon={goalImage2}
                    title='Segurança de Entrega'
                    paragraph='Garantimos que seus móveis planejados cheguem com segurança e pontualidade, 
                    assegurando tranquilidade e satisfação a cada cliente.'
                />
                <Goal
                    icon={goalImage3}
                    title='Preço Competitivo'
                    paragraph='Oferecemos móveis planejados de alta qualidade a preços acessíveis. 
                    Nosso compromisso é proporcionar excelente custo-benefício, unindo design e 
                    funcionalidade a um valor justo.'
                />
            </article>
            <article className="about">

            </article>
            <article className="motivational_speech">

            </article>
        </section>
    )
}