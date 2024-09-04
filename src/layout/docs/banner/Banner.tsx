import Image from 'next/image';

import banner from '/public/assets/banner/banner.png';
import logo from '/public/assets/banner/banner_logo.png';

import Button from '@/components/button/Button';

export default function Banner() {
    return (
        <section className="banner_container" style={{ backgroundImage: `url('${banner.src}')` }}>
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