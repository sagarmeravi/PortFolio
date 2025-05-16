
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cycle Glow",
    description: "A menstrual tracking app that helps users track their cycles and symptoms with an intuitive interface.",
    techStack: ["React", "Vite", "Supabase", "TailwindCSS"],
    link: "https://cycleglow.netlify.app/",
    icon: <Database className="h-10 w-10 text-primary" />,
    category: "Full Stack Application"
  },
  {
    title: "Online Game Store",
    description: "A CRUD-based e-commerce platform for digital games, allowing users to browse, purchase, and manage their game library.",
    techStack: ["PHP","MYSQL","HTML","CSS","Bootstrap"],
    link: "https://github.com/sagarmeravi/game-project",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "E-commerce Platform"
  },
  {
    title: "Finance Management App",
    description: "Developed during a Python Developer Internship at InnoByte, this app helps users track expenses and manage budgets.",
    techStack: ["Python"],
    link: "https://github.com/sagarmeravi/Personal-Finance-Management-Application",
    icon: <FileText className="h-10 w-10 text-primary" />,
    category: "Financial Tool"
  },
  {
    title: "Philoshopy Quote Gen",
    description: "A Daily Quest To Find Knowlege",
    techStack: ["React","TailwindCSS","Typescript"],
    link: "https://phillosophy-quote-gen.vercel.app/",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "Front End Application"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 tech-gradient-primary rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover animate-scale-in border border-border/50">
              <CardHeader className="pb-3">
                <div className="mb-4">{project.icon}</div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.category}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
