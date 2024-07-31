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
                    alt='Ícone de Positivo'
                    title='Qualidade de Produto'
                    paragraph='Na Artemia Móveis, a qualidade é nossa prioridade. 
                    Nossos móveis planejados são duráveis e sofisticados, 
                    proporcionando funcionalidade e estilo para satisfazer 
                    plenamente nossos clientes.'
                />
                <Goal
                    icon={goalImage2}
                    alt='Ícone de Entrega'
                    title='Segurança de Entrega'
                    paragraph='Garantimos que seus móveis planejados cheguem com segurança e pontualidade, 
                    assegurando tranquilidade e satisfação a cada cliente.'
                />
                <Goal
                    icon={goalImage3}
                    alt='Ícone de Etiqueta de Preço'
                    title='Preço Competitivo'
                    paragraph='Oferecemos móveis planejados de alta qualidade a preços acessíveis. 
                    Nosso compromisso é proporcionar excelente custo-benefício, unindo design e 
                    funcionalidade a um valor justo.'
                />
            </article>
            <article className="about">
                <h2 className='about_heading'>Sobre a Empresa</h2>
                <p className='about_paragraph'>
                    A Artemia Móveis é referência em móveis planejados, oferecendo soluções personalizadas
                    para transformar ambientes com elegância e funcionalidade. Com um compromisso inabalável
                    com a qualidade, combinamos design inovador e materiais de alta durabilidade para atender
                    às necessidades únicas de cada cliente. Nosso atendimento dedicado e especializado garante
                    uma experiência excepcional desde o planejamento até a entrega final.
                </p>
            </article>
            <article className="motivational_speech">

            </article>
        </section>
    )
}