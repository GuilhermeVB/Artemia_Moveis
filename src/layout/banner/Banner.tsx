import Image from 'next/image';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import banner from '/public/assets/banner/banner.png';
import logo from '/public/assets/banner/banner_logo.png';

import Button from '@/components/button/Button';

interface AnimationsConfig {
    bannerTime: number
}

export default function Banner(props: AnimationsConfig) {

    useGSAP(() => {

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1900px)", () => {

            let element: any; let style; let color

            element = document.querySelector('.banner_container')
            style = window.getComputedStyle(element);
            color = style.getPropertyValue('background-color')

            gsap.fromTo(".banner_container_background_color",
                { opacity: 0 },
                { duration: props.bannerTime, opacity: 0.9, backgroundColor: color }
            )

            gsap.fromTo(".banner_content",
                { yPercent: 200 },
                { duration: props.bannerTime, ease: "back.inOut(1)", opacity: 1, yPercent: 0, }
            )
        })
    })

    return (
        <section className='banner_container' style={{ backgroundImage: `url('${banner.src}')` }}>
            <div className='banner_container_background_color' />
            <div className='banner_content'>
                <Image
                    className='banner_content_logo'
                    src={logo}
                    alt="Logo da Artêmia Móveis"
                    priority
                />
                <p className='banner_content_text'>Móveis planejados de qualidade em Feira de Santana</p>
                <div className='banner_content_action'>
                    <Button
                        class='main_button'
                        text='Faça seu Orçamento!'
                    />
                    <Button
                        class='alternative_button'
                        text='Sobre Nós'
                    />
                </div>
            </div>
        </section>
    )
}