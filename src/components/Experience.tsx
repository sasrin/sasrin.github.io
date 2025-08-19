import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2 } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const Experience = () => {
  const experience: ExperienceItem[] = [
    {
      role: "DevOps Intern",
      company: "Clancode Labs",
      duration: "July 2025 - Present",
      description: "Worked on CI/CD pipelines using GitHub Actions, Dockerized Node.js and React applications, deployed projects on GCP Cloud Run, and monitored logs using basic Prometheus setup."
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black/30"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-white">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <Card key={index} className="overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] animate-slide-up mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl text-blue-300 flex items-center gap-2">
                    <Building2 className="h-6 w-6" />
                    {exp.role}
                  </CardTitle>
                  <Badge variant="outline" className="bg-purple-500/20 text-purple-200 border-purple-400/30 w-fit">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {exp.duration}
                  </Badge>
                </div>
                <CardDescription className="text-xl text-pink-200 font-medium">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;