import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dribbble, Github, Link, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import contactData from '@/data/data.json';

const ContactSection = () => {
  const { contact } = contactData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-2">Contact</h2>

      <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Get In Touch</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <Card className="dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardContent className="p-4 flex items-center">
                    <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium dark:text-gray-200">{contact.email}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardContent className="p-4 flex items-center">
                    <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-medium dark:text-gray-200">{contact.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
                  onClick={() => window.open(contact.social.twitter, '_blank')}>
                  <Twitter />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
                  onClick={() => window.open(contact.social.github, '_blank')}>
                  <Github />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
                  onClick={() => window.open(contact.social.dribbble, '_blank')}>
                  <Dribbble />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
                  onClick={() => window.open(contact.social.linkedin, '_blank')}>
                  <Linkedin />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
