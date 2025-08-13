
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'AWS Infrastructure Automation',
      description: 'Automated AWS infrastructure deployment using Terraform and CloudFormation to provision scalable and secure environments for web applications.',
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'Bash'],
      github: 'https://github.com/sasrin'
    },
    {
      title: 'CI/CD Pipeline with GitHub Actions',
      description: 'Implemented a complete CI/CD pipeline using GitHub Actions for automatic testing, building, and deployment of containerized applications.',
      technologies: ['GitHub Actions', 'Docker', 'Node.js', 'AWS ECR'],
      github: 'https://github.com/sasrin'
    },
    {
      title: 'Containerized Development Environments',
      description: 'Created standardized development environments using Docker to ensure consistency across development, testing, and production stages.',
      technologies: ['Docker', 'Docker Compose', 'Python', 'Node.js'],
      github: 'https://github.com/sasrin'
    },
    {
      title: 'Monitoring & Logging System',
      description: 'Designed and implemented a comprehensive monitoring and logging system for distributed applications using open-source tools.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'AWS CloudWatch'],
      github: 'https://github.com/sasrin'
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-black/30"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-white">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105 animate-slide-up">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-pink-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-100 mb-4 min-h-[80px]">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 pt-0">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="border-pink-400/50 text-pink-200 hover:bg-pink-600/20 backdrop-blur-sm bg-white/10 transition-all">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" size="sm" asChild className="border-blue-400/50 text-blue-200 hover:bg-blue-600/20 backdrop-blur-sm bg-white/10 transition-all">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-pink-500/50">
            <a href="https://github.com/sasrin" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
