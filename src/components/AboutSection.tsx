import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { User, Target, Lightbulb, Brain } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="bg-muted/30 dark:bg-muted/10 py-16 md:py-24 overflow-visible">
      <div className="section-container overflow-visible">
        <h2 className="section-title text-center mb-12 relative z-10">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Who I Am */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-primary/10 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                I'm a Computer Science undergraduate at Amrita University with a CGPA of 9.7.
                Driven by a passion for creating efficient and interactive web solutions that provide 
                exceptional user experiences. My expertise spans Python, C++, Java, and web development,
                with a focus on building UI/UX-driven applications.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Critical Thinker</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Problem Solver</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Full-Stack Developer</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Team Player</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Adaptable</Badge>
              </div>
            </div>
          </div>

          <div className={`bg-card rounded-2xl p-8 shadow-lg card-hover border border-primary/10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">My Approach</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              I combine technical excellence with creative problem-solving. 
              Every project I undertake is an opportunity to create something 
              that's not just functional, but exceptional and user-friendly.
              I value teamwork and believe in continuous learning to stay
              ahead in this rapidly evolving tech landscape.
            </p>
          </div>
          
          {/* My Goal */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-primary/10 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">My Goal</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                My goal is to create software that makes a meaningful impact. 
                I focus on writing clean, maintainable code that solves real problems
                and delivers outstanding user experiences. Whether working independently
                or collaboratively, I bring dedication, enthusiasm, and a growth mindset
                to every challenge.
              </p>
              
              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex items-center text-primary">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-medium">Impact-driven development</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* My Motto */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-primary/10 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">My Motto</h3>
              </div>
              
              <div className="text-center py-6">
                <blockquote className="italic text-xl font-medium text-primary mb-6">
                  "Code with purpose, create with passion."
                </blockquote>
                
                <p className="text-muted-foreground">
                  I believe that the best software emerges when technical excellence 
                  meets genuine passion for solving problems. Every line of code should 
                  have intention, and every project should make a positive difference.
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex items-center text-primary">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  <span className="font-medium">Purposeful innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}