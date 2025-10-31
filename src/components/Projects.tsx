import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Customer Churn Prediction using ANN",
      description: "Built an Artificial Neural Network model using TensorFlow to predict customer churn with high accuracy. Implemented data preprocessing, feature engineering, and model optimization techniques.",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
      accuracy: "85%+",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Academic and personal projects showcasing my skills
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {project.accuracy} Accuracy
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;