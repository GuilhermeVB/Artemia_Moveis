import Image from "next/image";
import Link from "next/link";

import logo from "/public/assets/Header_Logo.png";

import Button from "@/components/Button";

export default function Header() {
    return (
        <header className="header_container">
            <Image
                src={logo}
                alt="Logo da Artêmia Móveis"
                style={{width: '12.5rem', height: 'auto'}}
            />
            <nav className="header_container_nav">
                <Link href="#">
                    PROJETOS
                </Link>
                <Link href="#">
                    SOBRE NÓS
                </Link>
                <Link href="#">
                    FEEDBACK
                </Link>
            </nav>
            <Button text='Faça seu Orçamento!' backgroundColor="#2FE076" borderRadius="0 1.3rem 0 1.3rem" color="#012531" />
        </header>
    )
}