
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Cloud, GitBranch, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              With six months of hands-on experience and self-driven projects in DevOps, 
              I've developed a strong foundation in CI/CD, cloud deployment, containerization, 
              and automation.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm enthusiastic about furthering my skills in a real-world environment as an intern, 
              where I can contribute to impactful projects and collaborate with a talented team.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              If you're looking for a dedicated learner who's passionate about leveraging DevOps practices 
              to improve software efficiency and reliability, I'd love to connect and discuss how 
              I can contribute to your team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-devops-100 dark:bg-devops-900/30 p-3 rounded-full mb-4">
                    <Cloud className="h-8 w-8 text-devops-600 dark:text-devops-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-600 dark:text-gray-400">Experience with AWS cloud services and infrastructure management</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-devops-100 dark:bg-devops-900/30 p-3 rounded-full mb-4">
                    <GitBranch className="h-8 w-8 text-devops-600 dark:text-devops-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">CI/CD Pipelines</h3>
                  <p className="text-gray-600 dark:text-gray-400">Implementation of automated workflows with GitHub Actions</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-devops-100 dark:bg-devops-900/30 p-3 rounded-full mb-4">
                    <Server className="h-8 w-8 text-devops-600 dark:text-devops-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Containerization</h3>
                  <p className="text-gray-600 dark:text-gray-400">Experience with Docker for creating consistent development environments</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-devops-100 dark:bg-devops-900/30 p-3 rounded-full mb-4">
                    <Terminal className="h-8 w-8 text-devops-600 dark:text-devops-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Scripting & Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Python scripting and Linux administration for process automation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
