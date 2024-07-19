import Link from "next/link";
import Button from "@/components/Button";

export default function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <img className="header_container_image" src="#" alt="Logo da Artêmia Móveis" />
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
                    <Link href="#">
                        CONTATO
                    </Link>
                    <Button />
                </nav>
            </div>
        </header>
    )
}