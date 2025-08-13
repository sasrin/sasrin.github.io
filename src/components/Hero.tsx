
import React from 'react';
import GalaxyBackground from './GalaxyBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <GalaxyBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-heading text-white">
              Mohammed Sasrin
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-pink-200">
              DevOps Engineer & Cloud Enthusiast
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-xl backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/20">
              Passionate about cloud technologies, CI/CD, and automation. 
              Currently seeking DevOps internship opportunities to apply and 
              expand my skills in a professional environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-pink-500/50">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" asChild className="border-purple-400 text-purple-200 hover:bg-purple-600/20 backdrop-blur-sm bg-white/10 hover:text-white transition-all">
                <a href="https://github.com/sasrin" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="border-blue-400 text-blue-200 hover:bg-blue-600/20 backdrop-blur-sm bg-white/10 hover:text-white transition-all">
                <a href="https://www.linkedin.com/in/mohammed-sasrin-32316327a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/30 to-purple-300/30 opacity-50 animate-[pulse_6s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-300/20 via-transparent to-pink-500/30 opacity-60 animate-[pulse_8s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 overflow-hidden rounded-full transform transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-pink-500/50 border-2 border-white/20 backdrop-blur-sm">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/lovable-uploads/1689d6fb-04d7-4476-ae18-3631dab1c64d.png" alt="Mohammed Sasrin" className="object-cover" />
                    <AvatarFallback className="text-2xl">MS</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
