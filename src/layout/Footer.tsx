import Image from "next/image"
import Link from "next/link"

import logoFooter from "/public/assets/footer/logo_footer.png"
import instagramIcon from "/public/icons/instagram_icon.svg"
import linkedinIcon from "/public/icons/linkedin_icon.svg"
import youtubeIcon from "/public/icons/youtube_icon.svg"

export default function Footer() {
    return (
        <footer>
            <div className="pre_footer">
                <aside className="pre_footer_left">
                    <figure>
                        <Image
                            src={logoFooter}
                            alt="Logo da Artêmia Móveis"
                            style={{ width: '10.8175rem', height: '6.0625rem' }}
                        />
                    </figure>
                    <div className="pre_footer_left_icons">
                        <figure>
                            <Image
                                src={instagramIcon}
                                alt="Ícone do Instagram"
                                style={{ width: '.9375rem', height: '.9375rem' }}
                            />
                        </figure>
                        <figure>
                            <Image
                                src={youtubeIcon}
                                alt="Ícone do Linkedin"
                                style={{ width: '.9375rem', height: '.9375rem' }}
                            />
                        </figure>
                        <figure>
                            <Image
                                src={linkedinIcon}
                                alt="Ícone do Youtube"
                                style={{ width: '.9375rem', height: '.9375rem' }}
                            />
                        </figure>
                    </div>
                </aside>
                <aside className="pre_footer_right">
                    <nav className="pre_footer_right_fastnavigation">
                        <h3>Navegação Rápida</h3>
                        <Link href="#">
                            Portfólio
                        </Link>
                        <Link href="#">
                            Sobre Nós
                        </Link>
                        <Link href="#">
                            Feedback
                        </Link>
                        <Link href="#">
                            Contato
                        </Link>
                    </nav>
                    <nav className="pre_footer_right_contact">
                        <h3 style={{marginBottom: '.5rem'}}>Contato</h3>
                        <Link href="#">
                            +075-9-98364145
                        </Link>
                        <Link href="#">
                            artemiamoveis@gmail.com
                        </Link>
                    </nav>
                    <nav className="pre_footer_right_adress">
                        <h3>Endereço</h3>
                        <Link href="#">
                            Loteamento Veredas - Quadra J, 41 - Sim, Feira de Santana - BA, 44086-690
                        </Link>
                    </nav>
                </aside>
            </div>
            <div className="footer">
                <span>&copy; 2024 Artêmia Móveis - Todos os direitos reservados</span>
            </div>
        </footer>
    )
}