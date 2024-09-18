import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import avatar from '/public/assets/whatsappfloater/perfil.png';

export default function WhatsApp() {

  return (
    <div className='floating_whats_app'>
      <FloatingWhatsApp
        phoneNumber='7598364145'
        avatar={avatar.src}
        accountName='Artêmia Móveis'
        statusMessage='Online'
        chatMessage="Olá! 🤝 Como podemos ajudar?"
        placeholder='Digite uma mensagem...'
      />
    </div>
  )
}