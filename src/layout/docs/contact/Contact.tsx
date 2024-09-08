import Button from "@/components/button/Button";

export default function Contact() {
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
            <figure className='contact_figure' />
        </section>
    )
}