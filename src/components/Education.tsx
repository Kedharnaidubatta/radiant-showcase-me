import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering (AI/ML)",
      institution: "Mohanbabu University",
      location: "Tirupati, Andhra Pradesh",
      period: "2022 - 2026",
      cgpa: "8.4/10",
      current: true
    },
    {
      degree: "Intermediate / XII Class",
      field: "MPC (Maths, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      location: "Kurnool, Andhra Pradesh",
      period: "2020 - 2022",
      cgpa: "8.2/10",
      current: false
    },
    {
      degree: "SSC / X Class",
      field: "Secondary Education",
      institution: "Narayana English Medium School",
      location: "Tadipatri, Andhra Pradesh",
      period: "2019 - 2020",
      cgpa: "10/10",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Academic journey and achievements
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2" />
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
                
                <Card className={`md:w-1/2 p-6 hover:shadow-xl transition-all duration-300 border-2 ${
                  edu.current ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5' : 'hover:border-primary/30'
                }`}>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-sm text-primary font-medium">{edu.field}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-1">{edu.institution}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                  
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-semibold">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;