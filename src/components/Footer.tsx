
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gradient tech-gradient-primary">Sagar Meravi</h3>
            <p className="text-sm text-muted-foreground">Full Stack Software Engineer | Cybersecurity Educator</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sagar-meravi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:sagarcringe@gmail.com"
              className="p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sagar Meravi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
