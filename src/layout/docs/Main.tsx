import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Footer from "../Footer";
import Portfolio from "./Portfolio";

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