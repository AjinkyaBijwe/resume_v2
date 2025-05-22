import { Card, CardContent } from '@/components/ui/card';
import data from '@/data/data.json';

const ProjectsSection = () => {
  const { projects } = data;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="w-full h-48 overflow-hidden border-b border-gray-200 dark:border-gray-700">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold dark:text-gray-100">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
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
