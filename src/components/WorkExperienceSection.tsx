
import { useState } from "react";
import { BriefcaseIcon, Calendar, Building, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WorkExperienceSection() {
  const experiences = [
    {
      id: "motioncut",
      role: "Frontend Developer Intern",
      company: "MotionCut Technologies",
      period: "Oct 2023 - Nov 2023",
      location: "Remote",
      description: "Worked on web application development and optimization, focusing on user interface and responsiveness. Created a fully functional e-commerce platform with various essential pages and collaborated with mentors to improve overall performance.",
      highlights: [
        "Developed a fully functional e-commerce platform with Home, Products, Categories, Cart, Checkout, Blog, and Contact pages",
        "Optimized front-end functionality to enhance user experience",
        "Designed and implemented a responsive layout for both mobile and desktop platforms",
        "Collaborated on improving UI/UX and integrated front-end with back-end APIs"
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "GitHub"],
      link: "https://motioncut.shop/",
      img: "https://motioncut.shop/wp-content/uploads/2024/02/cropped-Blue-Modern-Business-YouTube-Banner-uhsu.png"
    },
    {
      id: "acm",
      role: "Web Team Member",
      company: "ACM Student Chapter",
      period: "Oct 2023 - Nov 2024",
      location: "Amritapuri, India",
      description: "Participated in maintaining the chapter's website and collaborated on content updates. Engaged in club activities and workshops, contributing to the overall improvement of the web presence and supporting events organized by the chapter.",
      highlights: [
        "Assisted in updating the chapter's website",
        "Participated in club activities and workshops",
        "Contributed to content updates and improvements",
        "Supported web development tasks during events"
      ],
      skills: ["HTML/CSS", "JavaScript", "React", "Git"],
      link: "https://acm-amritapuri.vercel.app/",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXdSPOqaQyjrDoayzYhFS7VbprD_sVLQx3Q&s"
    }
  ];
  
  const [activeTab, setActiveTab] = useState("motioncut");

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Work ExPerience</h2>

        <Tabs defaultValue="motioncut" value={activeTab} onValueChange={setActiveTab} className="w-full mt-12">
          <TabsList className="mx-auto flex w-full max-w-md justify-center mb-10">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="flex-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="mt-0">
              <div className="grid md:grid-cols-5 gap-8 animate-fade-in">
                <Card className="md:col-span-2 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                        <BriefcaseIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 opacity-70" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 opacity-70" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Link className="h-4 w-4 mr-2 opacity-70" />
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-muted-foreground">{exp.description}</p>
                    
                    <div className="mt-auto pt-4">
                      <h4 className="font-medium mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                  <div className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                        <Card className="overflow-hidden">
                          <CardContent className="p-6 bg-gradient-to-r from-card to-muted/50">
                            <div className="flex">
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                  {i + 1}
                                </div>
                              </div>
                              <div>
                                <p className="text-foreground">{highlight}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                      <img 
                        src={exp.img}
                        alt={exp.company} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-6 py-4 bg-background/80 backdrop-blur-sm rounded-lg text-center">
                          <p className="font-bold text-lg">{exp.company}</p>
                          <p className="text-muted-foreground">{exp.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
