'use client'

import { useState } from "react";

import map from '/public/assets/contact/contact_maps.png';

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
                style={{
                    backgroundImage: `${mouseStatus ? `url(${map.src})` : ''}`,
                    transition: `${mouseStatus ? '.5s' : '.5s'}`
                }}
            />
        </section>
    )
}