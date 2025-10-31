import { Card } from "@/components/ui/card";
import { Brain, Code2, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "Expertise in TensorFlow, Keras, and deep learning architectures"
    },
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Proficient in Python, Java, and modern web technologies"
    },
    {
      icon: Database,
      title: "Data Engineer",
      description: "Experienced with MongoDB, MySQL, and data analysis tools"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aspiring Engineer with a passion for AI/ML and software development
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5">
          <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
          <p className="text-muted-foreground leading-relaxed">
            Aspiring Engineer with a B.Tech in Computer Science (AI/ML specialization) seeking an 
            opportunity to apply and expand my knowledge in real-world applications, contribute to 
            innovative projects and grow within a tech-driven organization.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;