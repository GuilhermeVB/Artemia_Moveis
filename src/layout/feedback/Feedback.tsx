'use client'

import { useEffect, useState } from 'react';

import Elipse1 from '/public/assets/feedback/elipse_1.png';
import Elipse2 from '/public/assets/feedback/elipse_2.png';
import Elipse3 from '/public/assets/feedback/elipse_3.png';

import FeedbackDialog from '@/components/dialog/feedback_dialog/FeedbackDialog';

export default function Feedback() {

    const [cardImages, setCardImages] = useState<any>([])
    const [cardComments, setCardComments] = useState<string[]>([])

    useEffect(() => {
        recordComents()
        recordCards()
    }, [])

    function recordCards() {
        setCardImages([
            Elipse1,
            Elipse2,
            Elipse3
        ])
    }

    function recordComents() {
        setCardComments([
            '"A equipe foi incrível! Profissionais e atenciosos, entregaram tudo antes do prazo e com qualidade excepcional. Recomendo!"',
            '"Serviço impecável! Superaram todas as expectativas com um trabalho detalhado e de alta qualidade. Muito satisfeita!"',
            '"Excelente atendimento! Resolveram todas as minhas dúvidas e entregaram um produto final que adorei. Parabéns!"'
        ])
    }

    return (
        <div className="container_animation_feedback" id="feedback">
            <section className="feedback_container">
                <div className="feedback_heading">
                    <h2>Veja o que nossos clientes dizem</h2>
                </div>
                <div className="feedback_comment_boxes">
                    {cardImages.map((e: number, index: number) => {
                        return <FeedbackDialog key={`feedback-${index}`} cardTriggerIndex={index} source={cardImages} comment={cardComments[index]} />
                    })}
                </div>
            </section>
        </div>
    )
}