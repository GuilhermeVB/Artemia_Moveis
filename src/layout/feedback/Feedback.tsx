import Elipse1 from '/public/assets/feedback/elipse_1.png';
import Elipse2 from '/public/assets/feedback/elipse_2.png';
import Elipse3 from '/public/assets/feedback/elipse_3.png';

import FeedbackDialog from '@/components/carousel/feedback_carousel/FeedbackDialog';

export default function Feedback() {
    return (
        <div className="container_animation_feedback" id="feedback">
            <section className="feedback_container">
                <div className="feedback_heading">
                    <h2>Veja o que nossos clientes dizem</h2>
                </div>
                <div className="feedback_comment_boxes">
                    <FeedbackDialog source={Elipse1} comment='"A equipe foi incrível! Profissionais e atenciosos, entregaram tudo antes do prazo e com qualidade excepcional. Recomendo!"' />
                    <FeedbackDialog source={Elipse2} comment='"Serviço impecável! Superaram todas as expectativas com um trabalho detalhado e de alta qualidade. Muito satisfeita!"' />
                    <FeedbackDialog source={Elipse3} comment='"Excelente atendimento! Resolveram todas as minhas dúvidas e entregaram um produto final que adorei. Parabéns!"' />
                </div>
            </section>
        </div>
    )
}