
import { Heart, Github, Linkedin, Mail, ChevronUp, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-muted/50 dark:bg-muted/30 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">

          <a
            href="#home"
            className={`inline-flex items-center justify-center w-12 h-12 mb-8 rounded-full ${
              theme === "dark" 
                ? "bg-gray-800 hover:bg-gray-700" 
                : "bg-white hover:bg-gray-100"
            } shadow-lg transition-all duration-1000 animate-float`}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-primary" />
          </a>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Koneti Manoj</h3>
            <p className="text-muted-foreground text-sm">
              A showcase of my skills, projects, and professional journey.
              Building modern web applications with a focus on user experience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/manojk765"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="http://www.linkedin.com/in/koneti-manoj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manojkoneti05@gmail.com"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:rotate-12"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Download Resume</h3>
            <Button
              className="button-primary inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#" download="Koneti_Manoj_Resume.pdf">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Koneti Manoj | Made with <Heart className="h-4 w-4 text-portfolio-pink" />
          </p>
        </div>
      </div>
    </footer>
  );
}
