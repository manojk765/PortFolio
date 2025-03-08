import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, ExternalLink } from "lucide-react";

// Data for community projects
const communityProjects = [
  {
    title: "Safe Cyber Steps Project",
    subtitle: "Cybersecurity Awareness Initiative",
    description:
      "Led a team of 5 students to create awareness about cybersecurity best practices among college students and local communities.",
    stats: [
      { label: "Students Reached", value: "50+" },
      { label: "Workshops Conducted", value: "2" },
      { label: "Positive Feedback", value: "98%" },
    ],
    badges: ["Cybersecurity", "Community Service", "Education", "Leadership"],
    icon: <Shield className="h-8 w-8 text-primary" />,
    link: "https://www.linkedin.com/posts/koneti-manoj_cybersecurity-studentsocialresponsibility-activity-7274363759945506816-pcQ4?utm_source=share&utm_medium=member_android&rcm=ACoAAD7-U98BxcUyZvnQlIBgW8u5bUDVwP-Ull8",
  },
  // Future projects can be added here
];

export default function CommunitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

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

    const section = document.getElementById("community");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="community" className="bg-muted/30 dark:bg-muted/10 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Community Involvement</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {communityProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="card-hover overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div
                        className={`transition-all duration-500 ${
                          hoveredProject === index ? "rotate-[360deg]" : ""
                        }`}
                      >
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="mt-4 text-muted-foreground">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {project.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center"
                      >
                        <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className="bg-portfolio-purple-dark hover:bg-portfolio-purple-dark/90"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <a href={project.link} className="flex items-center gap-2 text-primary hover:text-primary/80">
                      Learn more about the project <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          
          <div
            className={`text-center mt-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="flex items-center justify-center text-muted-foreground gap-2">
              <Heart className="h-5 w-5 text-portfolio-pink animate-pulse-slow" />
              <span>I'm passionate about giving back to the community and making a positive impact.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
