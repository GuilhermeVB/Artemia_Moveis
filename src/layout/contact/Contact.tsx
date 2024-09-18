import Button from "@/components/button/Button";

import Link from "next/link";

export default function Contact() {

    return (
        <section className="contact_container" id="contact">
            <article className="contact_content">
                <h3 className='contact_content_company'>Artêmia Móveis</h3>
                <h1 className="contact_content_heading">Venha Falar Conosco</h1>
                <p className="contact_content_paragraph">
                    Quer saber mais sobre nossos serviços? Clique no botão abaixo e receba um orçamento
                    personalizado de forma rápida e fácil. Estamos prontos para ajudar!
                </p>
                <Link className='main_border' href="https://api.whatsapp.com/send/?phone=7598364145&text=" style={{width: 'max-content'}}>
                    <Button
                        class='main_button'
                        text='Faça seu Orçamento!'
                    />
                </Link>
            </article>
            <figure
                className='contact_figure'
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3414779148357!2d-38.89987124105238!3d-12.225142414523297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714391c2c6b9151%3A0xe1edcbe9ecbc557b!2sArtêmia%20Móveis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1725404087739!5m2!1spt-BR!2sbr"
                    className="contact_maps"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </figure>
        </section >
    )
}