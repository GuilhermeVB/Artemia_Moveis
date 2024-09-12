'use client'

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

  useEffect(() => {

    setTimeout(() => {
      setBannerDuration(0)
    }, 2500)

  }, [])

  return (
    <>
      <Banner bannerTime={bannerTime} />
      {
        bannerDuration == 0 && (
          <div>
            <Animations />
            <Portfolio />
            <AboutUs />
            <Feedback />
            <Contact />
            <Footer />
            <WhatsApp />
          </div>
        )
      }
    </>
  )
}