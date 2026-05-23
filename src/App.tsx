import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import KidsGallery from "./components/KidsGallery";
import LiveTelecast from "./components/LiveTelecast";
import Films from "./components/Films";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Journal from "./components/Journal";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0c0b09" : "#f6f1e7");
  }, [theme]);

  return (
    <div className="min-h-screen bg-cream text-ink-900 dark:bg-ink-900 dark:text-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <KidsGallery />
        <LiveTelecast />
        <Films />
        <WhyUs />
        <Testimonials />
        <Journal />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
