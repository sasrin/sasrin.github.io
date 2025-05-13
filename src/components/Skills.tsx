
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Linux', level: 85, category: 'Operating Systems' },
    { name: 'GitHub Actions CI/CD', level: 80, category: 'DevOps' },
    { name: 'Docker', level: 75, category: 'Containerization' },
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'Git', level: 85, category: 'Version Control' },
    { name: 'Bash Scripting', level: 65, category: 'Scripting' },
    { name: 'Infrastructure as Code', level: 60, category: 'DevOps' },
    { name: 'Networking', level: 65, category: 'Infrastructure' },
    { name: 'Monitoring & Logging', level: 60, category: 'DevOps' }
  ];

  // Group skills by category
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-devops-700 dark:text-devops-400 mb-6">{category}</h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                          <Badge variant="outline" className="ml-3 bg-devops-100 text-devops-700 dark:bg-devops-900/30 dark:text-devops-400 border-none">
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-gradient-to-r from-devops-500 to-devops-700 rounded-full"></div>
                      </Progress>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-devops-700 dark:text-devops-400">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up">
            {['AWS', 'Linux', 'GitHub Actions', 'Docker', 'Python', 'Git', 'Bash', 'Terraform', 'CloudFormation', 'Monitoring Tools', 'CI/CD', 'Networking'].map((tool, index) => (
              <Badge key={index} className="bg-white text-devops-700 border border-devops-300 dark:bg-gray-800 dark:text-devops-400 dark:border-devops-800 px-4 py-2 text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
