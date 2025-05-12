
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
      <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b border-gray-200">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.school}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">{edu.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
