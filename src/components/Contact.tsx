import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naidukedhar99@gmail.com",
      href: "mailto:naidukedhar99@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9573580397",
      href: "tel:+919573580397"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirupati, Andhra Pradesh",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:bg-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:bg-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Let's discuss opportunities and collaborations
        </p>

        <Card className="p-8 bg-gradient-to-br from-card via-primary/5 to-secondary/5">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href || undefined}
                className={`flex flex-col items-center text-center p-4 rounded-lg hover:bg-primary/5 transition-colors ${
                  info.href ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-medium text-sm">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg bg-card border-2 border-border ${social.color} hover:text-white transition-all hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <Mail className="w-4 h-4" />
              Send Message
            </Button>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3">Personal Traits</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Team-oriented
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Proactive Problem-solver
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Tech Enthusiast
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;