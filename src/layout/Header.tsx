import Image from "next/image";
import Link from "next/link";

import logo from "/public/assets/header/header_Logo.png";

import Button from "@/components/Button";

export default function Header() {
    return (
        <header className="header_container">
            <Image
                src={logo}
                alt="Logo da Artêmia Móveis"
                style={{ width: '12.5rem', height: '4.12rem' }}
            />
            <nav className="header_container_nav">
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
        </header>
    )
}