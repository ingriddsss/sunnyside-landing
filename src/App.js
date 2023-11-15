import "./styles.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Proposals from "./Proposals";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Proposals />
      <Features />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}
