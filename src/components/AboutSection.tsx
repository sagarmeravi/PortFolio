
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 tech-gradient-primary rounded mb-6"></div>
            
            <div className="space-y-4 text-lg">
              <p>
                I'm a passionate second-year BCA student at Vidya Pratishthan, where I'm not just studying computer applications but actively leading cyber awareness campaigns that have reached and trained over 4,000 students.
              </p>
              <p>
                My journey in technology is driven by a dual passion: creating robust software solutions and empowering others with cybersecurity knowledge. This combination has allowed me to develop a unique perspective on building secure, user-friendly applications.
              </p>
              <p>
                I'm proud to be recognized as the Highest Outline Offline Winner in Cyber Siksha for Cyber Suraksha 2024, a testament to my dedication to cybersecurity education.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-slide-in">
            <Card className="overflow-hidden border- shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
                      <p className="text-white/90">
                        To build technology that makes an impact while raising the bar for cybersecurity awareness among the next generation of digital citizens & solve real world problems.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">BCA Student at Vidya Pratishthan</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Achievement</h3>
                  <p className="text-sm text-muted-foreground">Winner in Cyber Suraksha 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
