import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Deep Learning Using TensorFlow and Keras",
      issuer: "Coursera",
      description: "Advanced deep learning concepts and practical implementation using TensorFlow and Keras frameworks",
      skills: ["Deep Learning", "TensorFlow", "Keras", "Neural Networks"]
    },
    {
      title: "Introduction to Python",
      issuer: "Coursera",
      description: "Comprehensive Python programming fundamentals and best practices",
      skills: ["Python", "Programming", "Data Structures"]
    }
  ];

  const extracurriculars = [
    "Participated in University-level Hackathon",
    "Participated in District level Football Tournament"
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Activities
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Continuous learning and personal development
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-primary font-medium flex items-center gap-1">
                    {cert.issuer}
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
            Extracurricular Activities
          </h3>
          <ul className="space-y-3">
            {extracurriculars.map((activity, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;