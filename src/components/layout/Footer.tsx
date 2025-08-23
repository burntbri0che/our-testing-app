import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Rocket, Satellite, Planet } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">CosmosExplorer</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Exploring the vast reaches of space with cutting-edge technology and cosmic innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Mission Control</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                  Launch Pad
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                  Missions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Space Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Satellite Launch</li>
              <li className="text-muted-foreground text-sm">Planetary Exploration</li>
              <li className="text-muted-foreground text-sm">Cosmic Research</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Cosmic Network</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CosmosExplorer. All cosmic rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Powered by Space Technology & Cosmic Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;