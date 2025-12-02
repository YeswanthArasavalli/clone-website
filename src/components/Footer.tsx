import { Github, Linkedin, Mail } from "lucide-react";

const footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sreejita Data Labs</h3>
            <p className="text-background/80 mb-4">
              Insights. Intelligence. Impact.
            </p>
            <p className="text-background/70 text-sm">
              Transforming data into actionable business intelligence
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="/#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="/#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="/#projects" className="hover:text-background transition-colors">Projects</a></li>
              <li><a href="/#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-background/70 text-sm mt-4">sreejitadatalabs@gmail.com</p>
            <p className="text-background/70 text-sm mt-1">📍 India, IST</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70 text-sm">
            <p>&copy; 2025 Sreejita Data Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
