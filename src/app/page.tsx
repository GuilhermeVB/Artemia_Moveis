'use client'

import cardImage1 from "/public/assets/portfolio/card_1.png";
import cardImage2 from "/public/assets/portfolio/card_2.png";
import cardImage3 from "/public/assets/portfolio/card_3.png";
import cardImage4 from "/public/assets/portfolio/card_4.png";
import cardImage5 from "/public/assets/portfolio/card_6.png";
import cardImage6 from "/public/assets/portfolio/card_5.png";

import Animations from "@/animations/Animations";
import WhatsApp from "@/components/whatsappfloater/WhatsAppFloater";
import AboutUs from "@/layout/aboutus/AboutUs";
import Banner from "@/layout/banner/Banner";
import Contact from "@/layout/contact/Contact";
import Feedback from "@/layout/feedback/Feedback";
import Footer from "@/layout/footer/Footer";
import Portfolio from "@/layout/portfolio/Portfolio";

import { useEffect, useState } from "react";

export default function Home() {

  const [bannerTime] = useState<number>(2);
  const [bannerDuration, setBannerDuration] = useState<number>(bannerTime)
  const [animationDelay, setAnimationDelay] = useState<boolean>(false)
  const [cardImages, setCardImages] = useState<any>([])

  useEffect(() => {
    bannerAnimation()
    animationTimeOut()
    recordCards()
  }, [])

  function bannerAnimation() {
    setTimeout(() => {
      setBannerDuration(0)
    }, 2500)
  }

  function animationTimeOut() {
    setTimeout(() => {
      setAnimationDelay(true)
    }, 2600)
  }

  function recordCards() {
    setCardImages([
      cardImage1,
      cardImage2,
      cardImage3,
      cardImage4,
      cardImage5,
      cardImage6
    ])
  }

  return (
    <>
      <Banner bannerTime={bannerTime} />
      {
        bannerDuration == 0 && (
          <>
            {animationDelay && (
              <Animations />
            )}
            <Portfolio cardImages={cardImages} />
            <AboutUs />
            <Feedback />
            <Contact />
            <Footer />
            <WhatsApp />
          </>
        )
      }
    </>
  )
}