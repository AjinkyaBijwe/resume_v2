
import { Card, CardContent } from "@/components/ui/card";
import projectsData from "@/data/resumeData.json";

const ProjectsSection = () => {
  const { projects } = projectsData;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b border-gray-200">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline font-medium text-sm"
              >
                View Project →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
