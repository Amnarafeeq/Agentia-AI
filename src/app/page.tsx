import Agents from "./components/Agents";
import Contact from "./components/Contact";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Technology />
      <Agents />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
