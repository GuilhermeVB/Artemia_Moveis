import Image from 'next/image';

import banner from '/public/assets/Banner.png';
import logo from '/public/assets/Banner_Logo.png';

import Button from '@/components/Button';

export default function Banner() {
    return (
        <div className="banner_container" style={{ backgroundImage: `url('${banner.src}')` }}>
            <div className='banner_content'>
                <Image
                    src={logo}
                    alt="Logo da Artêmia Móveis"
                    style={{ width: '23rem', height: 'auto' }}
                />
                <p className='banner_content_text'>Móveis planejados de qualidade em Feira de Santana</p>
                <div className='banner_content_action'>
                    <Button text='Faça seu Orçamento!' backgroundColor='#2FE076' borderRadius='0 1.3rem 0 1.3rem' color='#012531' />
                    <Button text='Sobre Nós' border='solid 1px #FFFFFF' borderRadius='1.3rem 0 1.3rem 0' color='#F6F1E9' />
                </div>
            </div>
        </div>
    )
}