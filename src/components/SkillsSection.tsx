
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, FileText, Settings, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "TailwindCSS"]
  },
  {
    title: "Backend",
    icon: <Settings className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "FastAPI", "SpringBoot", "Redis", "WebSockets", "Express"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["PostgreSQL", "SQLite", "MongoDB", "Supabase", "SQL", "ORM"]
  },
  {
    title: "Tools",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    skills: ["Docker", "Git", "GitHub", "Slack", "Power BI", "Tableau"]
  },
  {
    title: "Others",
    icon: <FileText className="h-6 w-6 text-primary" />,
    skills: ["Cybersecurity", "Microservices", "SEO", "Pine Script", "Data Analysis", "API Development"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 tech-gradient-primary rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My technical toolkit spans across frontend, backend, databases, and cybersecurity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-accent-foreground rounded-full text-sm transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
