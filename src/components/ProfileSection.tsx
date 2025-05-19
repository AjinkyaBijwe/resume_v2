import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import data from '@/data/data.json';

const ProfileSection = () => {
  const { profile } = data;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Profile</h2>

      <Card className="border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden bg-white dark:bg-gray-800">
        <CardContent className="p-0">
          <div className="bg-blue-50 dark:bg-gray-700/50 p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-600 shadow-lg">
                <div className="w-32 h-32 rounded-full flex items-center justify-center bg-blue-500 dark:bg-blue-600 text-white text-4xl font-bold">
                  {profile.avatar}
                </div>
              </Avatar>

              <div className="space-y-4">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{profile.name}</h1>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mt-1">{profile.title}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">{profile.location}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Availability</h3>
              <p className="text-gray-600 dark:text-gray-300">{profile.availability}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">{profile.experience}</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">{profile.languages}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
