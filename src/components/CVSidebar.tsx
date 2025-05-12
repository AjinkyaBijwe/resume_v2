
import { cn } from "@/lib/utils";
import { User, Briefcase, Book, Settings, Mail } from "lucide-react";

interface CVSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const CVSidebar = ({ activeSection, setActiveSection }: CVSidebarProps) => {
  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Book },
    { id: "skills", label: "Skills", icon: Settings },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside className="md:sticky md:top-0 md:h-screen bg-white border-r border-gray-200 w-full md:w-64 p-4 md:flex md:flex-col">
      <div className="flex items-center justify-center md:justify-start p-2 mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          CV
        </div>
        <h1 className="ml-3 text-xl font-bold">My Resume</h1>
      </div>

      {/* Mobile menu */}
      <div className="flex overflow-x-auto md:hidden py-2 mb-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={cn(
              "flex-shrink-0 px-4 py-2 mx-1 rounded-md whitespace-nowrap",
              activeSection === item.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:block space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center w-full px-4 py-2 text-left rounded-md transition-colors",
                activeSection === item.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
      
      <div className="hidden md:block mt-auto border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 My Resume</p>
          <p>Created with care</p>
        </div>
      </div>
    </aside>
  );
};

export default CVSidebar;
