
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "Python", level: 65 },
  ];
  
  const softSkills = [
    "Team Leadership",
    "Communication",
    "Problem Solving",
    "Project Management",
    "Agile Methodologies",
    "Mentoring"
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2 border-b border-gray-200 dark:border-gray-700">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="bg-blue-50 dark:bg-gray-700/50">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Technical Skills</h3>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-100 dark:bg-gray-600" indicatorClassName="bg-blue-500 dark:bg-blue-400" />
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
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
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
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional Developer</li>
                <li>Certified Scrum Master</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
