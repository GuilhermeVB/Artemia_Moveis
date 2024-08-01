import Elipse1 from '/public/assets/feedback/Elipse_1.png';
import Elipse2 from '/public/assets/feedback/Elipse_2.png';
import Elipse3 from '/public/assets/feedback/Elipse_3.png';

import FeedbackBox from "@/components/FeedbackBox";

export default function Feedback() {
    return (
        <section className="feedback_container">
            <div className="feedback_heading">
                <h2>Veja o que nossos clientes dizem</h2>
            </div>
            <div className="feedback_comment_boxes">
                <FeedbackBox
                    source={Elipse1}
                    comment='"A equipe foi incrível! Profissionais e atenciosos, entregaram tudo antes do prazo e com qualidade excepcional. Recomendo!"'
                />
                <FeedbackBox
                    source={Elipse2}
                    comment='"Serviço impecável! Superaram todas as expectativas com um trabalho detalhado e de alta qualidade. Muito satisfeita!"'
                />
                <FeedbackBox
                    source={Elipse3}
                    comment='"Excelente atendimento! Resolveram todas as minhas dúvidas e entregaram um produto final que adorei. Parabéns!"'
                />
            </div>
        </section>
    )
}