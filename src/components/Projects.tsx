
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-heading">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-devops-700 dark:text-devops-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300 mb-4 min-h-[80px]">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-devops-50 text-devops-700 border-devops-200 dark:bg-devops-900/20 dark:text-devops-400 dark:border-devops-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 pt-0">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="border-devops-500 text-devops-700 hover:bg-devops-50 dark:border-devops-400 dark:text-devops-300 dark:hover:bg-devops-900/30">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" size="sm" asChild className="border-devops-500 text-devops-700 hover:bg-devops-50 dark:border-devops-400 dark:text-devops-300 dark:hover:bg-devops-900/30">
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
          <Button asChild className="bg-devops-600 hover:bg-devops-700">
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
