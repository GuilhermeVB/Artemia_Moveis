import Button from "@/components/Button";

import contactImage from "/public/assets/contact/contact_image.png"

export default function Contact() {
    return (
        <section className="contact_container">
            <div className="contact_query" style={{backgroundImage: `url('${contactImage.src}')`}}>
                <div className="contact_query_content">
                    <p className="contact_query_content_paragraph">
                        Peça seu orçamento agora!
                    </p>
                    <h1 className="contact_query_content_heading">
                        Interessado em Nossos Serviços?
                    </h1>
                </div>
            </div>
            <div className="contact_action">
                <div className="contact_action_content">
                    <h3 className="contact_action_content_heading">
                        Solicite um orçamento
                    </h3>
                    <p className="contact_action_content_paragraph">
                        Quer saber mais sobre nossos serviços? Clique no botão abaixo e receba um
                        orçamento personalizado de forma rápida e fácil. Estamos prontos para ajudar!
                    </p>
                    <Button
                        text='Faça seu Orçamento!'
                        backgroundColor="#2FE076"
                        borderRadius="0 1.3rem 0 1.3rem"
                        color="#012531"
                        maxWidth
                    />
                </div>
            </div>
        </section>
    )
}