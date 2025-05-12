
import { Avatar } from "@/components/ui/avatar";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b border-gray-200">Profile</h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="w-32 h-32">
          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 text-4xl font-bold">
            JD
          </div>
        </Avatar>
        
        <div className="space-y-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">John Doe</h1>
            <p className="text-xl text-blue-600">Senior Software Developer</p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Passionate and results-driven software developer with over 8 years of experience designing and
            implementing scalable applications. Specializing in frontend development with React and
            TypeScript, with strong knowledge of backend technologies as well. Committed to writing clean,
            maintainable code and creating exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900">Location</h3>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900">Availability</h3>
          <p className="text-gray-600">Full-time, Remote</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900">Experience</h3>
          <p className="text-gray-600">8+ Years</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900">Languages</h3>
          <p className="text-gray-600">English (Native), Spanish (Conversational)</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
