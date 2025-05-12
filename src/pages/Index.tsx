
import { useEffect, useRef, useState } from "react";
import CVSidebar from "@/components/CVSidebar";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  
  // Register section refs
  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is in view
      Object.keys(sectionRefs.current).forEach((id) => {
        const section = sectionRefs.current[id];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when clicking menu
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center pt-0"
      style={{ 
        backgroundImage: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%), url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80")'
      }}
    >
      {/* Sidebar */}
      <CVSidebar 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />
      
      {/* Main Content - adjusted for floating sidebar */}
      <main className="md:pl-80 p-4 md:p-8 pb-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <section 
            id="profile" 
            ref={(el) => registerSection("profile", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <ProfileSection />
          </section>
          
          <section 
            id="experience" 
            ref={(el) => registerSection("experience", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <ExperienceSection />
          </section>
          
          <section 
            id="education" 
            ref={(el) => registerSection("education", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <EducationSection />
          </section>
          
          <section 
            id="skills" 
            ref={(el) => registerSection("skills", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <SkillsSection />
          </section>
          
          <section 
            id="projects" 
            ref={(el) => registerSection("projects", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <ProjectsSection />
          </section>
          
          <section 
            id="awards" 
            ref={(el) => registerSection("awards", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <AwardsSection />
          </section>
          
          <section 
            id="contact" 
            ref={(el) => registerSection("contact", el)}
            className="scroll-mt-16 md:scroll-mt-0"
          >
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
