import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Yeswanth Data Labs</h3>
              <p className="text-background/80 mb-4">
                Insights. Intelligence. Impact.
              </p>
              <p className="text-background/70 text-sm">
                Transforming data into actionable business intelligence
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#about" className="hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-background transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-background transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3 text-background/80">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:yeswanthdatalabs@gmail.com"
                    className="hover:text-background transition-colors"
                  >
                    yeswanthdatalabs@gmail.com
                  </a>
                </p>
                <p className="text-sm">📍 India, IST</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
            <p>© 2024 Yeswanth Data Labs. All rights reserved.</p>
            <p className="mt-2">Domain: yeswanthdatalabs.tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
