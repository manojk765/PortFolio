
import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, FilterX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "medicare",
      title: "MediCare",
      description: "Real-Time Hospital Management Software",
      longDescription:
        "A comprehensive hospital management system with real-time updates for patient admissions, billing, and resource management. Includes modules for appointment scheduling, inventory management, and reporting. This system helps optimize hospital workflows, ensuring a seamless experience for both staff and patients.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoLink: "hospital-software-nine.vercel.app",   
      codeLink: "https://github.com/manojk765/HospitalManagementApp",   
      tags: ["ReactJS", "NodeJS", "MongoDB", "Express", "Socket.io"],
      category: "major",
      features: [
        "Real-time patient admission tracking",
        "Staff scheduling and management",
        "Real time patient admission and discharge management",
        "Comprehensive reporting dashboard"
      ]
    },
    {
      id: "fitlife",
      title: "FitLife",
      description: "Your Health Companion",
      longDescription:
        "A mobile-first healthcare app built to assist users in maintaining a healthy lifestyle through personalized workout and nutrition plans. Features include exercise tracking, meal suggestions, recipe planning, and progress monitoring. This app is designed for users who are looking to achieve their fitness goals efficiently.",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80",
      demoLink: "https://github.com/manojk765/FitLife-HealthCareApp-Java",   
      codeLink: "https://github.com/manojk765/FitLife-HealthCareApp-Java",   
      tags: ["Java", "XML", "OOPs",],
      category: "major",
      features: [
        "Interactive quiz for user engagement",
        "Healthy recipie recommendations",
        "Workout recommendations",
        "BMI Calculator and timer to track workout times",
      ]
    },
    {
      id: "colorthreads",
      title: "Color Threads",
      description: "E-commerce Website for Fashion Brand",
      longDescription:
        "An e-commerce platform designed for a fashion brand, offering a fully responsive product catalog, shopping cart, and payment integration using Stripe. The platform also includes a user account system with order history, and an admin dashboard for managing inventory and sales. It provides a seamless shopping experience for customers.",
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoLink: "https://manojk765.github.io/Color-Threads/",   
      codeLink: "https://github.com/manojk765/Color-Threads",   
      tags: ["NextJS", "Stripe", "TailwindCSS", "Supabase"],
      category: "major",
      features: [
        "Interactive and responsive UI made for mobile first design",
        "Responsive product catalog with filtering",
        "Shopping cart with local storage persistence",
      ]
    },
    {
      id: "taskmanager",
      title: "Task Manager",
      description: "Productivity tool with Firebase integration",
      longDescription:
        "A task management application designed to help users organize and prioritize tasks using a simple Kanban board interface. Integrated with Firebase, it allows users to create, edit, and track tasks, all while persisting data. Additionally, users can set deadlines, track progress, and analyze task completion trends.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoLink: "https://manojk765.github.io/react-to-do-app/",   
      codeLink: "https://github.com/manojk765/react-to-do-app",   
      tags: ["React", "Firebase", "LocalStorage","JavaScript"],
      category: "minor",
      features: [
        "Task Creation: Allow users to add tasks with a title, description, and due date.",
        "Task Editing: Users can edit tasks to update their details (title, description).",
        "Task Deletion: Ability to delete tasks once they are no longer needed.",
        "Task Completion: Mark tasks as completed and move them to a completed list.",
        "Integrated with FireBase for storage"
      ]
    },
    {
      id: "imagegenerator",
      title: "React Image Generator",
      description: "Generates images based on user input using Unsplash API",
      longDescription:
        "A React-based application that allows users to search for images by keywords. Integrated with the Unsplash API, the app fetches and displays relevant images based on the user's input, providing a seamless search experience. Users can browse through high-quality images and download them as needed.",
      image:
        "https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80",
      demoLink: "https://manojk765.github.io/React-Image-Generator/",   
      codeLink: "https://github.com/manojk765/React-Image-Generator",   
      tags: ["React", "UnsplashAPI", "TailwindCSS"],
      category: "minor",
      features: [
        "User input-based image search",
        "High-quality image fetching from Unsplash API",
        "Responsive design",
        "Optimized search with quick results"
      ]
    },
    {
      id: "aiimagegenerator",
      title: "AI Image Generator",
      description: "Generates AI images using Huggingface models",
      longDescription:
        "An AI-powered image generator that uses models available on Huggingface to create images based on user prompts. This tool allows users to input descriptive text and generate corresponding AI-generated images, offering creative possibilities for a variety of use cases such as art, design, and conceptual work.",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80",
      demoLink: "https://manojk765.github.io/AI-Image-Generator/",   
      codeLink: "https://github.com/manojk765/AI-Image-Generator",   
      tags: ["React", "Huggingface", "AI", "TailwindCSS"],
      category: "minor",
      features: [
        "AI-generated images from descriptive text",
        "Supports various Huggingface models",
        "Responsive design for a seamless experience",
        "Real-time generation of creative assets",
      ]
    },
    {
      id: "nasaapod",
      title: "NASA APOD",
      description: "Fetches NASA's Astronomy Picture of the Day",
      longDescription:
        "A simple application that displays NASA's Astronomy Picture of the Day (APOD) along with a description. Integrated with NASA's public API, it fetches and displays a new image daily. The app provides a visually appealing way for users to explore space through stunning NASA images.",
      image:
        "https://www.wbs.ac.uk/sites/wbs2020/cache/file/6E097BF2-DC2A-C606-597DAB7236AD4F70.jpg",
      demoLink: "https://manojk765.github.io/NASA-APOD/",  
      codeLink: "https://github.com/manojk765/NASA-APOD",   
      tags: ["React", "NASA API", "TailwindCSS"],
      category: "minor",
      features: [
        "Fetches NASA's Astronomy Picture of the Day (APOD)",
        "Daily updated image and description",
        "User-friendly UI with a focus on visuals",
        "Image details fetched from NASA API",
        "Optimized for responsive design"
      ]
    }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Clear filter function
  const clearFilter = () => setActiveFilter("all");

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting my skills in web development and UI/UX design
        </p>

        <div className="mt-12 mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="major">Major Projects</TabsTrigger>
              <TabsTrigger value="minor">Minor Projects</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {activeFilter !== "all" && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearFilter} 
              className="flex items-center"
            >
              <FilterX className="h-4 w-4 mr-1" />
              Clear Filter
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={project.category === "major" ? "default" : "secondary"}>
                      {project.category === "major" ? "Major" : "Minor"}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 py-4 border-t flex justify-between dark:border-gray-700">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        Details
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-4">
                        <div className="rounded-lg overflow-hidden h-[200px] mb-4">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {project.longDescription}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Key Features</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="text-muted-foreground">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex space-x-3 mt-6">
                          <Button asChild>
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
