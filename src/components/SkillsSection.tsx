
import { Progress } from "@/components/ui/progress";

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
      <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b border-gray-200">Skills</h2>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
        <div className="space-y-4">
          {technicalSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>AWS Certified Solutions Architect</li>
          <li>Google Cloud Professional Developer</li>
          <li>Certified Scrum Master</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
