const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Batta Kedhar Naidu. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;