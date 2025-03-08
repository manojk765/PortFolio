
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import EducationSection from "@/components/EducationSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CommunitySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
