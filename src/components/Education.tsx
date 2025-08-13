
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-black/30"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-white">Education & Certifications</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-pink-300">Academic Education</h3>
            <div className="max-w-3xl mx-auto">
              <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-pink-500/25 transition-all hover:scale-105 animate-slide-up">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-pink-300">Bachelor's Degree, Computer Software Engineering</CardTitle>
                      <CardDescription className="text-lg font-medium text-purple-200">Cardiff Metropolitan University</CardDescription>
                    </div>
                    <div className="flex items-center text-purple-300">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Mar 2023 - May 2026</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-blue-400" />
                      <span className="text-purple-100">Focusing on software engineering principles and practices</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-pink-400" />
                      <span className="text-purple-100">Activities: Cricket team member</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-300">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-300">AWS Educate Introduction to Cloud 101</CardTitle>
                  <CardDescription className="text-purple-200">Amazon Web Services (AWS)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-pink-400" />
                      <span className="text-purple-100">Cloud Computing Fundamentals</span>
                    </div>
                    <div className="text-purple-300 text-sm">
                      <Calendar className="inline-block mr-1 h-3 w-3" />
                      <span>Mar 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105 animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-300">GitHub Actions CI/CD</CardTitle>
                  <CardDescription className="text-purple-200">Self-paced learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-blue-400" />
                      <span className="text-purple-100">Continuous Integration & Deployment</span>
                    </div>
                    <div className="text-purple-300 text-sm">
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
