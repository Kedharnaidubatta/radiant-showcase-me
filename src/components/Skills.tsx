import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      category: "AI/ML Frameworks",
      skills: ["TensorFlow", "Keras", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      category: "Tools & IDEs",
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "Git"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} px-3 py-1 text-sm font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;