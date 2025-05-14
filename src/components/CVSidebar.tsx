
import { cn } from "@/lib/utils";
import { User, Briefcase, Book, Settings, Mail, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface CVSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const CVSidebar = ({ activeSection, onSectionClick }: CVSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Book },
    { id: "skills", label: "Skills", icon: Settings },
    { id: "projects", label: "Projects", icon: Star },
    { id: "awards", label: "Awards", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile sticky navigation */}
      <div className="sticky top-0 z-10 md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              CV
            </div>
            <h1 className="ml-2 text-lg font-bold dark:text-white">My Resume</h1>
          </div>
          <ThemeToggle />
        </div>
        
        <div className="flex overflow-x-auto py-2 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={cn(
                "flex-shrink-0 px-4 py-2 mx-1 rounded-full whitespace-nowrap transition-all",
                activeSection === item.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop floating sidebar */}
      <aside className={cn(
        "hidden md:flex fixed left-8 top-8 z-20 h-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-200",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between p-6 mb-2">
            {!collapsed && (
              <>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    CV
                  </div>
                  <h1 className="ml-3 text-xl font-bold dark:text-white">My Resume</h1>
                </div>
              </>
            )}
            <div className="flex items-center">
              {collapsed && (
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  CV
                </div>
              )}
            </div>
          </div>

          <nav className="flex-1 px-2 pb-2">
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
                        : "text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-700",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
                    {!collapsed && <span>{item.label}</span>}
                  </button>
                );
              })}
            </div>
          </nav>
          
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 mt-auto flex justify-between items-center">
            <ThemeToggle />
            <button 
              onClick={toggleCollapse} 
              className="rounded-full p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {collapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CVSidebar;
