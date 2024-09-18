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
                            className="pre_footer_left_logo"
                            src={logoFooter}
                            alt="Logo da Artêmia Móveis"
                        />
                    </figure>
                    <div className="pre_footer_left_icons">
                        <figure>
                            <Image
                                src={instagramIcon}
                                alt="Ícone do Instagram"
                            />
                        </figure>
                        <figure>
                            <Image
                                src={youtubeIcon}
                                alt="Ícone do Linkedin"
                            />
                        </figure>
                        <figure>
                            <Image
                                src={linkedinIcon}
                                alt="Ícone do Youtube"
                            />
                        </figure>
                    </div>
                </aside>
                <aside className="pre_footer_right">
                    <nav className="pre_footer_right_fastnavigation">
                        <h3>Navegação Rápida</h3>
                        <Link href="#portfolio" replace style={{width: 'max-content'}}>
                            Portfólio
                        </Link>
                        <Link href="#aboutus" replace style={{width: 'max-content'}}>
                            Sobre Nós
                        </Link>
                        <Link href="#feedback" replace style={{width: 'max-content'}}>
                            Feedback
                        </Link>
                        <Link href="#contact" replace style={{width: 'max-content'}}>
                            Contato
                        </Link>
                    </nav>
                    <nav className="pre_footer_right_contact">
                        <h3>Contato</h3>
                        <Link href="https://api.whatsapp.com/send/?phone=7598364145&text=d" target="_blank" style={{width: 'max-content'}}>
                            +075-9-98364145
                        </Link>
                        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQHbpdDHztNckMvFnnsTcGPqBTWpcbjQRkvPpbKKSqDjjcRGbgPJQxdhPJfScBjmcGDkq" target="_blank" style={{width: 'max-content'}}>
                            artemiamoveis@gmail.com
                        </Link>
                    </nav>
                    <nav className="pre_footer_right_adress">
                        <h3>Endereço</h3>
                        <Link href="#contact">
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