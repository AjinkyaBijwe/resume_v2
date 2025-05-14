
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering and Human-Computer Interaction. Thesis on optimizing rendering performance in web applications.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2010 - 2014",
      description: "Graduated with honors. Active member of the Computer Science Student Association.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2 border-b border-gray-200 dark:border-gray-700">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-blue-50 dark:bg-gray-700/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-50">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0 px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                  {edu.period}
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
