import Animations from "@/animations/Animations";
import AboutUs from "@/layout/aboutus/AboutUs";
import Banner from "@/layout/banner/Banner";
import Contact from "@/layout/contact/Contact";
import Feedback from "@/layout/feedback/Feedback";
import Footer from "@/layout/footer/Footer";
import Portfolio from "@/layout/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Animations />
      <Banner />
      <Portfolio />
      <AboutUs />
      <Feedback />
      <Contact />
      <Footer />
    </>
  )
}