import { Card, CardContent, CardHeader } from '@/components/ui/card';
import data from '@/data/data.json';

const SkillsSection = () => {
  const { skills } = data;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="bg-blue-50 dark:bg-gray-700/50">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Technical Skills</h3>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-6">
              {skills.technical.map((skill, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="text-gray-700 dark:text-gray-300 text-md font-medium">{skill.name}</div>
                  <div className="flex flex-wrap gap-2">
                    {skill.description.map((desc, i) => (
                      <div
                        key={i}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        {desc}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <CardHeader className="bg-blue-50 dark:bg-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Soft Skills</h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <CardHeader className="bg-blue-50 dark:bg-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Certifications</h3>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skills.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
