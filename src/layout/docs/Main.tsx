import AboutUs from "./aboutus/AboutUs";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Feedback from "./feedback/Feedback";
import Portfolio from "./portfolio/Portfolio";

export default function Main() {
    return (
        <main>
            <Banner />
            <Portfolio />
            <AboutUs />
            <Feedback />
            <Contact />
        </main>
    )
}