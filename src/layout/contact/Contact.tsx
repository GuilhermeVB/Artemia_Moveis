'use client'

import { useState } from "react";

import Button from "@/components/button/Button";

export default function Contact() {
    const [mouseStatus, setMouseStatus] = useState<boolean>(false)

    function mouseOn() {
        setMouseStatus(true)
    }

    function mouseOff() {
        setMouseStatus(false)
    }


    return (
        <section className="contact_container">
            <article className="contact_content">
                <h3 className='contact_content_company'>Artêmia Móveis</h3>
                <h1 className="contact_content_heading">Venha Falar Conosco</h1>
                <p className="contact_content_paragraph">
                    Quer saber mais sobre nossos serviços? Clique no botão abaixo e receba um orçamento
                    personalizado de forma rápida e fácil. Estamos prontos para ajudar!
                </p>
                <Button
                    class='main_button'
                    text='Faça seu Orçamento!'
                />
            </article>
            <figure
                onMouseEnter={mouseOn}
                onMouseLeave={mouseOff}
                className='contact_figure'
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3414779148357!2d-38.89987124105238!3d-12.225142414523297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714391c2c6b9151%3A0xe1edcbe9ecbc557b!2sArtêmia%20Móveis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1725404087739!5m2!1spt-BR!2sbr"
                    className="contact_maps"
                    width="100%"
                    height="100%"
                    style={{
                        border: 0, borderRadius: '0 0 0 9.4rem',
                        opacity: `${mouseStatus ? `1` : '0'}`,
                        transition: `${mouseStatus ? '.5s' : '.5s'}`
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </figure>
        </section >
    )
}