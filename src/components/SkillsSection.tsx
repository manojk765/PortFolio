
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
  isVisible: boolean;
}

function SkillBar({ name, percentage, delay = 0, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "C++", percentage: 85 },
        { name: "Java", percentage: 80 },
        { name: "HTML/CSS", percentage: 95 },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      skills: [
        { name: "React", percentage: 92 },
        { name: "Next.js", percentage: 88 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "Responsive Design", percentage: 95 },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "MongoDB", percentage: 82 },
        { name: "MySQL", percentage: 80 },
        { name: "Express", percentage: 88 },
        { name: "RESTful APIs", percentage: 90 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", percentage: 92 },
        { name: "Android Studio", percentage: 78 },
        { name: "Figma", percentage: 75 },
        { name: "SEO", percentage: 70 },
        { name: "Problem Solving", percentage: 95 },
      ],
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Skills</h2>
        <div className={`mt-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Tabs defaultValue="languages" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-muted/50">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {skillCategories.map((category) => (
              <TabsContent 
                key={category.id}
                value={category.id}
                className="mt-6 bg-card rounded-xl p-6 shadow-md animate-fade-in"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={index * 100}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill.name}
                      className="bg-primary hover:bg-primary/90 text-sm py-1"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
