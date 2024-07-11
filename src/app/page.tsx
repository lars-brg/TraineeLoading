import Image from "next/image";
import Navbar from "./components/Navbar/NavBar";
import PresentationSection from "./components/PresentationSection/PresentationSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import CountingSection from "./components/CountingSection/CountingSection";
import AttendingSection from "./components/AttendingSection/AttendingSection";
import ClientSection from "./components/ClientsSection/ClientSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ScrollAnimation from "./components/ScrollAnimation/ScrollAnimation"; // Adicione o caminho correto para o ScrollAnimation

export default function Home() {
  return (
    <div>
      <Navbar />
      <PresentationSection />
      <ServicesSection />
      <CountingSection />
      <AttendingSection />
      <ClientSection />
      <ContactSection />
    </div>
  );
}
