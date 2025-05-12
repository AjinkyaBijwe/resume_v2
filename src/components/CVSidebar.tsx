
import { cn } from "@/lib/utils";
import { User, Briefcase, Book, Settings, Mail } from "lucide-react";

interface CVSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const CVSidebar = ({ activeSection, onSectionClick }: CVSidebarProps) => {
  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Book },
    { id: "skills", label: "Skills", icon: Settings },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile sticky navigation */}
      <div className="sticky top-0 z-10 md:hidden bg-white border-b border-gray-200 w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              CV
            </div>
            <h1 className="ml-2 text-lg font-bold">My Resume</h1>
          </div>
        </div>
        
        <div className="flex overflow-x-auto py-2 px-4 bg-white shadow-sm">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={cn(
                "flex-shrink-0 px-4 py-2 mx-1 rounded-full whitespace-nowrap transition-all",
                activeSection === item.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:sticky md:top-0 md:h-screen bg-white border-r border-gray-200 w-64 flex-col shadow-md">
        <div className="flex items-center justify-center md:justify-start p-6 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            CV
          </div>
          <h1 className="ml-3 text-xl font-bold">My Resume</h1>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={cn(
                    "flex items-center w-full px-4 py-3 text-left rounded-lg transition-all",
                    activeSection === item.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
        
        <div className="border-t border-gray-200 p-4 mt-auto">
          <div className="text-sm text-gray-500">
            <p>&copy; 2025 My Resume</p>
            <p>Created with care</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CVSidebar;
