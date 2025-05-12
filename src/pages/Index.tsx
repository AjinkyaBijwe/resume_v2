
import { useState } from "react";
import CVSidebar from "@/components/CVSidebar";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <CVSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto pb-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <section id="profile" className={activeSection === "profile" ? "block" : "block md:hidden"}>
            <ProfileSection />
          </section>
          
          <section id="experience" className={activeSection === "experience" ? "block" : "block md:hidden"}>
            <ExperienceSection />
          </section>
          
          <section id="education" className={activeSection === "education" ? "block" : "block md:hidden"}>
            <EducationSection />
          </section>
          
          <section id="skills" className={activeSection === "skills" ? "block" : "block md:hidden"}>
            <SkillsSection />
          </section>
          
          <section id="contact" className={activeSection === "contact" ? "block" : "block md:hidden"}>
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
