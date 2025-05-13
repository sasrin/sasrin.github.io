
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-heading">
              Mohammed Sasrin
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-400">
              DevOps Engineer & Cloud Enthusiast
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Passionate about cloud technologies, CI/CD, and automation. 
              Currently seeking DevOps internship opportunities to apply and 
              expand my skills in a professional environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-devops-600 hover:bg-devops-700">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" asChild className="border-devops-500 text-devops-700 hover:bg-devops-50 dark:border-devops-400 dark:text-devops-300 dark:hover:bg-devops-900/30">
                <a href="https://github.com/sasrin" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="border-devops-500 text-devops-700 hover:bg-devops-50 dark:border-devops-400 dark:text-devops-300 dark:hover:bg-devops-900/30">
                <a href="https://www.linkedin.com/in/mohammed-sasrin-32316327a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group perspective-1000">
              <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-devops-600 to-devops-400 opacity-20 animate-[spin_15s_linear_infinite]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-devops-500 to-devops-300 opacity-10 animate-[spin_8s_linear_infinite_reverse]"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <Avatar className="h-56 w-56 border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-300 transform hover:scale-105">
                    <AvatarImage src="/lovable-uploads/7205515b-1171-4fbe-8f81-cf1fbee81410.png" alt="Mohammed Sasrin" className="object-cover" />
                    <AvatarFallback className="text-2xl">MS</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
