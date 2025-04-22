
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 hero-gradient opacity-5"></div>
      <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-64 top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient tech-gradient-primary">Sagar Meravi</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
            Full Stack Software Engineer | Cybersecurity Educator
          </h2>
          
          <p className="text-lg mb-8 max-w-2xl">
            Passionate about building scalable applications and spreading cyber safety awareness. 
            Experienced in React, Python, Node.js, and more.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild className="group">
              <a href="#contact">
                Contact Me 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/sagar-meravi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a href="mailto:sagarcringe@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
          </div>
          
          <div className="inline-flex items-center">
            <div className="h-px w-12 bg-muted-foreground/30 mr-4"></div>
            <p className="text-muted-foreground italic">Scroll down to learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
