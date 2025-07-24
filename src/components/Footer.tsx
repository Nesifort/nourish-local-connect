import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nouri</h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Nourishing community through food. Connecting local makers with neighbors 
              who appreciate authentic, homemade meals.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">Made with love for community</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Join as Maker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Order Food</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@nouri.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Starting in Bay Area</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Nouri. Building community, one meal at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;