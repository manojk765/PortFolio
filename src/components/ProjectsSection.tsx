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
      "id": "wattwise",
      "title": "WattWise - Smart Energy Management App",
      "description": "Award-winning energy management application built with React Native and Firebase",
      "longDescription": "WattWise is a comprehensive energy management application developed by Team Greenovators, which won the Second Prize at Vidyut 2025 (Amrita Amritapuri). Built with React Native and Firebase, this app helps users track their energy consumption, optimize usage patterns, and save on electricity bills through intelligent monitoring and personalized recommendations. The app features real-time analytics, social features, and a user-friendly interface designed to promote sustainable energy consumption.",
      "image": "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "demoLink": "https://github.com/manojk765/Wattwise",
      "codeLink": "https://github.com/manojk765/Wattwise",
      "tags": ["React Native", "Firebase", "TypeScript", "Expo", "Energy Management", "Sustainability"],
      "category": "major",
      "features": [
        "Real-time energy consumption monitoring and tracking",
        "Interactive analytics and usage pattern visualization",
        "Personalized energy-saving recommendations",
        "Social features including leaderboard and achievements",
        "Dark/Light theme support for better user experience",
        "Firebase integration for secure data management",
        "Responsive and intuitive user interface",
        "Sustainable energy consumption insights"
      ]
    },
    {
      id: "TeamCode",
      title: "Realtime Collaborative Code Editor",
      description: "Live collaborative coding tool using React and Socket.IO",
      longDescription:
        "A browser-based code editor designed for real-time collaboration. Users can join unique rooms and code together with instant synchronization. Built with React and Socket.IO, the editor allows seamless communication across clients, offering syntax highlighting, theme customization, and a smooth user experience. Ideal for online interviews, pair programming, and virtual classrooms.",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "https://teamcode-v5ia.onrender.com/",
      codeLink: "https://github.com/manojk765/TeamCode",
      tags: ["React", "Node.js", "Socket.IO", "CodeMirror", "Docker"],
      category: "course",
      features: [
        "Real-time Code Sync: Users see live updates as others type in a shared room.",
        "Room-based Sessions: Join or create rooms via unique IDs to collaborate privately.",
        "Syntax Highlighting: CodeMirror integration supports clean, readable code editing.",
        "No Login Required: Quick access with no sign-up needed.",
        "Containerized Deployment: Fully dockerized setup for easy hosting and scalability."
      ]
    },
    {
      id: "fitlife",
      title: "FitLife",
      description: "Your Health Companion",
      longDescription:
        "A mobile-first healthcare app built to assist users in maintaining a healthy lifestyle through personalized workout and nutrition plans. Features include exercise tracking, meal suggestions, recipe planning, and progress monitoring. This app is designed for users who are looking to achieve their fitness goals efficiently.",
      image: 
        "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoLink: "https://github.com/manojk765/FitLife-HealthCareApp-Java",   
      codeLink: "https://github.com/manojk765/FitLife-HealthCareApp-Java",   
      tags: ["Java", "XML", "OOPs",],
      category: "course",
      features: [
        "Interactive quiz for user engagement",
        "Healthy recipie recommendations",
        "Workout recommendations",
        "BMI Calculator and timer to track workout times",
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
      id: "aiimagegenerator",
      title: "AI Image Generator",
      description: "Generates AI images using Huggingface models",
      longDescription:
        "An AI-powered image generator that uses models available on Huggingface to create images based on user prompts. This tool allows users to input descriptive text and generate corresponding AI-generated images, offering creative possibilities for a variety of use cases such as art, design, and conceptual work.",
      image:
        "https://images.unsplash.com/photo-1633311905139-7b6088a69e33?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      id: "imagegenerator",
      title: "React Image Generator",
      description: "Generates images based on user input using Unsplash API",
      longDescription:
        "A React-based application that allows users to search for images by keywords. Integrated with the Unsplash API, the app fetches and displays relevant images based on the user's input, providing a seamless search experience. Users can browse through high-quality images and download them as needed.",
      image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    },
    {
      "id": "infinityquestacademy",
      "title": "Infinity Quest Academy UI",
      "description": "Responsive school website built with HTML, CSS, and JavaScript",
      "longDescription": "Infinity Quest Academy is a responsive school web application designed using only HTML, CSS, and Vanilla JavaScript. This project showcases essential frontend development skills and provides an informative platform for educational institutions. It includes multiple pages detailing curriculum, pedagogy, infrastructure, and more, all structured for easy navigation and user engagement.",
      "image": "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "demoLink": "https://manojk765.github.io/InfinityQuestAcademy_School-UI-App/",
      "codeLink": "https://github.com/manojk765/InfinityQuestAcademy_School-UI-App",
      "tags": ["HTML", "CSS", "JavaScript", "Responsive Design"],
      "category": "course",
      "features": [
        "Multi-page layout including curriculum, pedagogy, and infrastructure sections",
        "Responsive design compatible with various devices",
        "Interactive navigation menu for seamless user experience",
        "Clean and organized code structure for easy maintenance",
        "Informative content presentation tailored for educational institutions"
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
      tags: ["HTML", "CSS", "JavaScript"],
      category: "minor",
      features: [
        "Interactive and responsive UI made for mobile first design",
        "Responsive product catalog with filtering",
        "Shopping cart with local storage persistence",
      ]
    }
];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Clear filter function
  const clearFilter = () => setActiveFilter("all");

  // Get category badge variant
  const getCategoryBadgeVariant = (category) => {
    switch(category) {
      case "major": return "outline";
      case "minor": return "outline";
      case "course": return "outline";
      default: return "secondary";
    }
  };

  // Get category display name
  const getCategoryDisplayName = (category) => {
    switch(category) {
      case "major": return "Major";
      case "minor": return "Minor";
      case "course": return "Course";
      default: return "Project";
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="section-container">
        <h2 className="section-title text-center">MY ProJects</h2>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting my skills in web development and UI/UX design
        </p>

        <div className="mt-12 mb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="major">Major Projects</TabsTrigger>
              <TabsTrigger value="minor">Minor Projects</TabsTrigger>
              <TabsTrigger value="course">Course Projects</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {activeFilter !== "all" && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearFilter} 
              className="flex items-center hover:bg-primary/10 transition-colors duration-300"
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
              <Card className="group h-full overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:border-primary/20 hover:bg-card/80">
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Badge 
                      variant={getCategoryBadgeVariant(project.category)}
                      className="backdrop-blur-md bg-background/80 border-primary/20"
                    >
                      {getCategoryDisplayName(project.category)}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-muted/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 py-4 border-t border-border/50 flex justify-between dark:border-gray-700/50 bg-card/30 group-hover:bg-card/60 transition-all duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 transition-all duration-300 group/btn"
                      >
                        Details
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
                          <Button asChild className="hover:shadow-md transition-shadow duration-300">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button variant="outline" asChild className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
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
                      className="text-primary hover:text-primary/80 hover:bg-primary/10 p-2 rounded-full transition-all duration-300 hover:scale-110 group/link"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-full transition-all duration-300 hover:scale-110 group/link"
                    >
                      <Github className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" />
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