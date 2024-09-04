import Image from 'next/image';

import goalsBackground from '/public/assets/aboutus/goals_background.png';
import motivationalSpeechFigure from '/public/assets/aboutus/motivational_speech_figure.png';
import motivationalSpeechFigureIpad from '/public/assets/aboutus/motivational_speech_figure_ipad.png';
import motivationalSpeechFigureLaptop from '/public/assets/aboutus/motivational_speech_figure_laptop.png';
import motivationalSpeechFigureLaptopLarge from '/public/assets/aboutus/motivational_speech_figure_laptop_large.png';
import motivationalSpeechFigureMobile from '/public/assets/aboutus/motivational_speech_figure_mobile.png';
import goalImage1 from '/public/icons/goal_1.svg';
import goalImage2 from '/public/icons/goal_2.svg';
import goalImage3 from '/public/icons/goal_3.svg';

import Button from '@/components/button/Button';
import Goal from "@/components/goal/Goal";

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
                <article className='motivational_speech_content'>
                    <h2 className='motivational_speech_heading'>Realizando Sonhos Através De Móveis Sob Medida</h2>
                    <div className='motivational_speech_paragraph'>
                        <p>
                            A Artemia Móveis é referência em móveis planejados, com mais de 550 projetos entregues,
                            transformando sonhos em realidade. Nossa paixão incansável pela excelência se une ao olhar
                            afiado para o design do casal de visionários Márcio e Natália, especialistas em criar móveis
                            que encantam e atendem às necessidades de cada cliente.
                        </p>
                        <p>
                            Ao escolher a Artemia, você está optando por mais do que simplesmente móveis – está escolhendo
                            o resultado de anos de experiência e dedicação, combinados com um toque único de talento e criatividade.
                            Deixe-se encantar pelo nosso trabalho e descubra como a Artemia Móveis Planejados pode transformar sua casa
                            em um verdadeiro lar.
                        </p>
                    </div>
                    <Button
                        class='main_button'
                        text='Faça seu Orçamento!'
                    />
                </article>
                <figure className='motivational_speech_figure'>
                    <figure className='motivational_speech_figure_desktop' style={{ backgroundImage: `url('${motivationalSpeechFigure.src}')` }} />
                    <Image
                        className='motivational_speech_figure_ipad'
                        src={motivationalSpeechFigureIpad}
                        alt='Márcio e Natália'
                    />
                    <Image
                        className='motivational_speech_figure_laptop'
                        src={motivationalSpeechFigureLaptop}
                        alt='Márcio e Natália'
                    />
                    <Image
                        className='motivational_speech_figure_laptop_large'
                        src={motivationalSpeechFigureLaptopLarge}
                        alt='Márcio e Natália'
                    />
                    <Image
                        className='motivational_speech_figure_mobile'
                        src={motivationalSpeechFigureMobile}
                        alt='Márcio e Natália'
                    />
                </figure>
            </article>
        </section>
    )
}