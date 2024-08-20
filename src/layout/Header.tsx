import Image from "next/image";
import Link from "next/link";

import logo from "/public/assets/header/header_logo.png";
import hamburguer from "/public/assets/header/hamburguer.png";

import Button from "@/components/Button";

export default function Header() {
    return (
        <>
        
        </>
        /*
        <header className="header_container">
            <Image
                className="header_logo"
                src={logo}
                alt="Logo da Artêmia Móveis"
            />
            <nav className="header_nav">
                <Link href="#">
                    Projetos
                </Link>
                <Link href="#">
                    Sobre Nós
                </Link>
                <Link href="#">
                    Feedback
                </Link>
            </nav>
            <Button
                text='Faça seu Orçamento!'
                backgroundColor="#2FE076"
                borderRadius="0 1.3rem 0 1.3rem"
                color="#012531"
            />
            <Image
                className="header_hamburguer"
                src={hamburguer}
                alt="Hamburguer"
                style={{ width: '1.875rem', height: '1.875rem' }}
            />
        </header>
        */
    )
}