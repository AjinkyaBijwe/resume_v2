
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Lead developer for the company's main product, a SaaS platform used by over 50,000 users. Architected and implemented major frontend features using React, TypeScript and GraphQL. Improved site performance by 40% through code optimization and lazy loading strategies.",
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2018 - 2021",
      description: "Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces. Participated in code reviews and mentored junior developers.",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description: "Built websites and web applications for various clients. Worked with HTML, CSS, JavaScript and jQuery. Gained experience working in an agile team environment.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b border-gray-200">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1 md:mt-0 px-3 py-1 bg-white rounded-full shadow-sm">
                  {exp.period}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
