import { useEffect, useRef, useState } from 'react';
import CVSidebar from '@/components/CVSidebar';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('profile');
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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let bestMatch: string | null = null;
      let bestMatchOffset = -Infinity;

      for (const id in sectionRefs.current) {
        const section = sectionRefs.current[id];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the top of the section is within the viewport
          if (rect.top >= 0 && rect.top < windowHeight / 2) {
            if (rect.top > bestMatchOffset) {
              bestMatchOffset = rect.top;
              bestMatch = id;
            }
          } else if (rect.bottom > windowHeight / 2 && rect.bottom <= windowHeight) {
            // If the bottom of the section is in the lower half of the viewport
            if (windowHeight - rect.bottom > bestMatchOffset) {
              bestMatchOffset = windowHeight - rect.bottom;
              bestMatch = id;
            }
          } else if (rect.top <= 0 && rect.bottom >= windowHeight) {
            // If the section fully covers the viewport, consider it active
            bestMatch = id;
            break; // No need to check further
          }
        }
      }

      if (bestMatch) {
        setActiveSection(bestMatch);
      } else if (Object.keys(sectionRefs.current).length > 0 && scrollY === 0) {
        // If at the very top, set the first section as active
        setActiveSection(Object.keys(sectionRefs.current)[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when clicking menu
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const offset = section.offsetTop;
      const headerOffset = 20; // Adjust this value based on your fixed header height if any
      window.scrollTo({
        top: offset - headerOffset,
        behavior: 'smooth',
      });
      setActiveSection(sectionId); // Immediately set active section for better user feedback
    }
  };

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center pt-0 dark:text-gray-100 background">
      {/* Sidebar */}
      <CVSidebar activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Main Content - adjusted for floating sidebar to respect collapsed state on tablets */}
      <main className="p-4 md:p-8 md:pl-32 lg:pl-16 pb-16 dark:bg-gray-900/80 dark:backdrop-blur-sm dark:min-h-screen transition-all duration-200">
        <div className="max-w-3xl mx-auto space-y-16">
          <section id="profile" ref={(el) => registerSection('profile', el)} className="scroll-mt-16 md:scroll-mt-0">
            <ProfileSection />
          </section>

          <section id="experience" ref={(el) => registerSection('experience', el)} className="scroll-mt-16 md:scroll-mt-0">
            <ExperienceSection />
          </section>

          <section id="education" ref={(el) => registerSection('education', el)} className="scroll-mt-16 md:scroll-mt-0">
            <EducationSection />
          </section>

          <section id="skills" ref={(el) => registerSection('skills', el)} className="scroll-mt-16 md:scroll-mt-0">
            <SkillsSection />
          </section>

          <section id="projects" ref={(el) => registerSection('projects', el)} className="scroll-mt-16 md:scroll-mt-0">
            <ProjectsSection />
          </section>

          <section id="awards" ref={(el) => registerSection('awards', el)} className="scroll-mt-16 md:scroll-mt-0">
            <AwardsSection />
          </section>

          <section id="contact" ref={(el) => registerSection('contact', el)} className="scroll-mt-16 md:scroll-mt-0">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
