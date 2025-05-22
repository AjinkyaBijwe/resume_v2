import { Card, CardContent, CardHeader } from '@/components/ui/card';
import data from '@/data/data.json';

const ExperienceSection = () => {
  const { experience } = data;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Experience</h2>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-blue-50 dark:bg-gray-700/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-50">{exp.designation}</h3>
                  <div className="flex items-center space-x-2">
                    <a href={exp.link} target="_blank" className="text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </a>
                    <p className="text-gray-500 dark:text-gray-400"> {exp.location}</p>
                  </div>
                </div>
                <p
                  className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0 px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                  style={{ width: 'max-content' }}>
                  {exp.time}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc list-outside ml-3">
                {exp.description.map((desc: string, i: number) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
