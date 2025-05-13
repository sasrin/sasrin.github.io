
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-heading">Education & Certifications</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-devops-700 dark:text-devops-400">Academic Education</h3>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-devops-700 dark:text-devops-400">Bachelor's Degree, Computer Software Engineering</CardTitle>
                      <CardDescription className="text-lg font-medium">Cardiff Metropolitan University</CardDescription>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Mar 2023 - May 2026</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-devops-600 dark:text-devops-500" />
                      <span className="text-gray-700 dark:text-gray-300">Focusing on software engineering principles and practices</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-devops-600 dark:text-devops-500" />
                      <span className="text-gray-700 dark:text-gray-300">Activities: Cricket team member</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-devops-700 dark:text-devops-400">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-lg text-devops-700 dark:text-devops-400">AWS Educate Introduction to Cloud 101</CardTitle>
                  <CardDescription>Amazon Web Services (AWS)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-devops-600 dark:text-devops-500" />
                      <span className="text-gray-700 dark:text-gray-300">Cloud Computing Fundamentals</span>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="inline-block mr-1 h-3 w-3" />
                      <span>Mar 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-lg text-devops-700 dark:text-devops-400">GitHub Actions CI/CD</CardTitle>
                  <CardDescription>Self-paced learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-devops-600 dark:text-devops-500" />
                      <span className="text-gray-700 dark:text-gray-300">Continuous Integration & Deployment</span>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="inline-block mr-1 h-3 w-3" />
                      <span>2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
