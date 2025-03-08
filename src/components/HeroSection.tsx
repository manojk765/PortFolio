
import { useState, useEffect } from "react";
import Scene3D from "./Scene3D";
import { ChevronDown, Github  , Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      <div className={`z-10 text-center px-4 max-w-4xl transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Koneti Manoj</span>
          <span className="block mt-2 text-2xl md:text-3xl font-medium">
            Full Stack Developer | B. Tech in Computer Science | 2026 Graduate
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Creating efficient and interactive web solutions
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="button-primary"
          >
            View My Work
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border-2 border-primary hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <a 
            href="https://github.com/manojk765" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub"
          >
            <Github   size={30} className="transition-all duration-300 hover:text-portfolio-purple-dark hover:scale-125" />
          </a>
          <a 
            href="http://www.linkedin.com/in/koneti-manoj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={30} className="transition-all duration-300 hover:text-portfolio-blue-dark hover:scale-125" />
          </a>
          <a 
            href="mailto:manojkoneti05@gmail.com"
            className="social-icon-link"
            aria-label="Email"
          >
            <Mail size={30} className="transition-all duration-300 hover:text-portfolio-teal hover:scale-125" />
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="text-primary" />
      </a>
    </section>
  );
}
