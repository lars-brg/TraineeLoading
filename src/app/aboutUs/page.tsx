import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar/NavBar";
import PresentationAboutUs from "../components/PresentationAboutUs/PresentationAboutUs";
import CarouselMembers from "../components/CarouselMembers/CarouselMembers";
import LoadingTeam from "../components/LoadingTeam/LoadingTeam";
import MissionLoading from "../components/MissionLoading/MissionLoading";
import ValuesAndVision from "../components/ValuesAndVision/ValuesAndVision";
import LoadingOnline from "../components/LoadingOnline/LoadingOnline";
import ContactSection from "../components/ContactSection/ContactSection";
import TutorTeacher from "../components/TutorTeacher/TutorTeacher";
import Section from "../components/Section/Section";



export default function Home() {



    return (
        <div>
            <Navbar />
            <Section>
                <PresentationAboutUs />
            </Section>
                <LoadingTeam />
            <Section>
                <CarouselMembers />
            </Section>
                <MissionLoading />
            <Section>
                <ValuesAndVision />
            </Section>
                <LoadingOnline />
            <Section>
                <TutorTeacher />
            </Section>
            <ContactSection />
        </div>
    );
}
