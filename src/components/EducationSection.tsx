import { Card, CardContent, CardHeader } from '@/components/ui/card';
import data from '@/data/data.json';

const EducationSection = () => {
  const { education } = data;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-blue-50 dark:bg-gray-700/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-50">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{edu.university}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0 px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                  {edu.duration}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
