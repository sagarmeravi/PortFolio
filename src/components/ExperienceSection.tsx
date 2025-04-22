
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

const experiences = [
  {
    title: "Secretary at QuickHeal Foundation",
    company: "VPASC",
    period: "2023 - 2025",
    description: "Led initiatives in cybersecurity awareness and data analysis using Power BI/Tableau. Organized workshops and training sessions for students to promote cyber safety practices.",
    icon: <Users className="h-10 w-10 text-primary" />,
    skills: ["Cybersecurity Education", "Event Management", "Data Analysis", "Leadership"]
  },
  {
    title: "Python Developer Intern",
    company: "InnoByte",
    period: "2025",
    description: "Built real-world finance app solutions using Python and related technologies. Designed and implemented database schemas, API endpoints, and user interfaces.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    skills: ["Python", "FastAPI", "PostgreSQL", "Git", "Agile Development"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="h-1 w-20 tech-gradient-primary rounded mb-6"></div>
          <p className="text-muted-foreground mb-12">
            My professional journey so far, combining technical development and cybersecurity education.
          </p>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="animate-slide-in border border-border/50">
                <div className="md:flex">
                  <div className="hidden md:flex items-center justify-center p-6 border-r border-border/50">
                    {experience.icon}
                  </div>
                  
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex md:hidden items-center mb-4">
                        {experience.icon}
                      </div>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription>
                        {experience.company} • {experience.period}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="mb-4">{experience.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-accent/10 text-accent-foreground rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
