
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 tech-gradient-primary rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-slide-in">
            <form className="space-y-6">
              <div className="space-y-4">
                <Input placeholder="Your Name" required className="bg-background" />
                <Input type="email" placeholder="Your Email" required className="bg-background" />
                <Input placeholder="Subject" className="bg-background" />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                  className="bg-background resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                I'll get back to you as soon as possible!
              </p>
            </form>
          </div>
          
          <div className="animate-fade-in">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:sagarcringe@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          sagarcringe@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/sagar-meravi/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          linkedin.com/in/sagar-meravi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                    <h4 className="font-medium mb-2">Looking for collaboration?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:sagarcringe@gmail.com">Let's Talk</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
