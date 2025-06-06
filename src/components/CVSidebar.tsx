import { cn } from '@/lib/utils';
import { User, Briefcase, Book, Settings, Mail, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface CVSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const MenuItem = ({
  id,
  label,
  icon: Icon,
  active,
  collapsed,
  onClick,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  collapsed: boolean;
  onClick: (id: string) => void;
}) => (
  <button
    key={id}
    onClick={() => onClick(id)}
    className={cn(
      'flex items-center w-full px-4 py-3 text-left rounded-lg transition-all',
      active ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-700',
      collapsed && 'justify-center px-2',
    )}
    aria-label={label}>
    <Icon className={cn('min-h-5 min-w-5', collapsed ? 'mr-0' : 'mr-3')} />
    {!collapsed && <span>{label}</span>}
  </button>
);

const SidebarHeader = ({ collapsed, toggleCollapse }: { collapsed: boolean; toggleCollapse: () => void }) => (
  <div className="border-t border-gray-200 dark:border-gray-700 p-4 mt-auto flex justify-between items-center">
    <ThemeToggle />
    <button
      onClick={toggleCollapse}
      className={cn(
        'flex justify-center items-center min-w-9 w-9 h-9 rounded-full p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
        collapsed ? 'ml-5' : 'm-0',
      )}
      aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}>
      {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
    </button>
  </div>
);

const CVSidebar = ({ activeSection, onSectionClick }: CVSidebarProps) => {
  // Check if we're on an iPad or smaller device (<=1024px width)
  const isTablet = window.innerWidth <= 1024;
  const [collapsed, setCollapsed] = useState(isTablet);

  // Update collapsed state when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(collapsed);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = useMemo(
    () => [
      { id: 'profile', label: 'Profile', icon: User },
      { id: 'experience', label: 'Experience', icon: Briefcase },
      { id: 'education', label: 'Education', icon: Book },
      { id: 'skills', label: 'Skills', icon: Settings },
      { id: 'projects', label: 'Projects', icon: Star },
      { id: 'awards', label: 'Awards', icon: Award },
      { id: 'contact', label: 'Contact', icon: Mail },
    ],
    [],
  );

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <>
      {/* Mobile sticky navigation */}
      <div className="sticky top-0 z-10 md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">AB</div>
            <h1 className="ml-2 text-lg font-bold dark:text-white">Ajinkya Bijwe</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex overflow-x-auto py-2 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={cn(
                'flex items-center px-4 py-2 mx-1 rounded-full whitespace-nowrap transition-all',
                activeSection === item.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200',
              )}
              aria-label={item.label}>
              <item.icon className="h-5 w-5 mr-2" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop floating sidebar */}
      <aside
        className={cn(
          'hidden md:flex fixed left-8 top-8 z-20 h-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-200',
          collapsed ? 'w-16' : 'w-64',
        )}>
        <div className="flex flex-col w-full">
          {!collapsed && (
            <div className="flex items-center justify-between p-6 mb-2">
              <div className="flex items-center">
                <div className="w-10 min-w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">AB</div>
                <h1 className="ml-3 text-xl font-bold dark:text-white">Ajinkya Bijwe</h1>
              </div>
            </div>
          )}

          {collapsed && (
            <div className="flex items-center justify-between p-2 py-6 mb-2">
              <div className="w-10 min-w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                AB
              </div>
            </div>
          )}

          <nav className="flex-1 px-2 pb-2">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  icon={item.icon}
                  active={activeSection === item.id}
                  collapsed={collapsed}
                  onClick={onSectionClick}
                />
              ))}
            </div>
          </nav>

          <SidebarHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
        </div>
      </aside>
    </>
  );
};

export default CVSidebar;
