
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import awardsData from "@/data/resumeData.json";

const AwardsSection = () => {
  const { awards } = awardsData;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2 border-b border-gray-200 dark:border-gray-700">Awards & Achievements</h2>
      
      <div className="space-y-6">
        {awards.map((award, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold dark:text-gray-100">{award.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span>{award.organization}</span>
                      <span>•</span>
                      <span>{award.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{award.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
