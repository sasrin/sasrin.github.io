
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-devops-400">
              Mohammed<span className="text-devops-500">.dev</span>
            </h3>
            <p className="text-gray-400 mt-2">DevOps Engineer & Cloud Enthusiast</p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-devops-400">Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-devops-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-devops-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-devops-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-devops-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-devops-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-devops-400">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/sasrin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-devops-400 transition-colors flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/mohammed-sasrin-32316327a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-devops-400 transition-colors flex items-center"
                  >
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@mohammedsasrin.com"
                    className="text-gray-400 hover:text-devops-400 transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Mohammed Sasrin. All rights reserved.</p>
          <p className="mt-2">DevOps Engineer | AWS | Linux | GitHub Actions CI/CD | Docker | Python</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
