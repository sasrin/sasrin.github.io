
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Cloud, GitBranch, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-black/30"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20 space-y-4">
              <p className="text-lg text-purple-100">
                With six months of hands-on experience and self-driven projects in DevOps, 
                I've developed a strong foundation in CI/CD, cloud deployment, containerization, 
                and automation.
              </p>
              <p className="text-lg text-purple-100">
                I'm enthusiastic about furthering my skills in a real-world environment as an intern, 
                where I can contribute to impactful projects and collaborate with a talented team.
              </p>
              <p className="text-lg text-purple-100">
                If you're looking for a dedicated learner who's passionate about leveraging DevOps practices 
                to improve software efficiency and reliability, I'd love to connect and discuss how 
                I can contribute to your team.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-pink-500/25 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pink-500/20 p-3 rounded-full mb-4 shadow-lg">
                    <Cloud className="h-8 w-8 text-pink-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Cloud Infrastructure</h3>
                  <p className="text-purple-200">Experience with AWS cloud services and infrastructure management</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/20 p-3 rounded-full mb-4 shadow-lg">
                    <GitBranch className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">CI/CD Pipelines</h3>
                  <p className="text-purple-200">Implementation of automated workflows with GitHub Actions</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-500/20 p-3 rounded-full mb-4 shadow-lg">
                    <Server className="h-8 w-8 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Containerization</h3>
                  <p className="text-purple-200">Experience with Docker for creating consistent development environments</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-500/20 p-3 rounded-full mb-4 shadow-lg">
                    <Terminal className="h-8 w-8 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Scripting & Automation</h3>
                  <p className="text-purple-200">Python scripting and Linux administration for process automation</p>
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
