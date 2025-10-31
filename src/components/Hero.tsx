import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent)]" />
      
      <div className="container mx-auto relative z-10 text-center space-y-8 py-20">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Batta Kedhar Naidu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            AI/ML Engineer & Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            B.Tech Computer Science Student specializing in AI/ML, passionate about building intelligent solutions and innovative applications
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>

        <div className="flex gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:naidukedhar99@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;