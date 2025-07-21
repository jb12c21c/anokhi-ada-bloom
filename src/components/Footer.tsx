import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Shop", "About Us", "Contact", "FAQs", "Size Guide", 
    "Shipping Info", "Returns", "Privacy Policy", "Terms of Service"
  ];

  const categories = [
    "Pendants", "Earrings", "Jhumkas", "Bracelets", 
    "Hair Accessories", "Hampers", "Gift Cards"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Anokhi <span className="text-brand-purple-light">अदा</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Elegant jewelry for every mood & moment. Handcrafted with love, 
              designed for your unique style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-brand-purple rounded-lg hover:bg-brand-purple/80 transition-smooth">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-brand-purple rounded-lg hover:bg-brand-purple/80 transition-smooth">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-brand-purple rounded-lg hover:bg-brand-purple/80 transition-smooth">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-brand-purple-light transition-smooth text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-brand-purple-light transition-smooth text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-purple-light" />
                <span className="text-primary-foreground/80 text-sm">hello@anokhiada.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-purple-light" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-purple-light mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Jewelry Street,<br />Mumbai, India 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2024 Anokhi अदा. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/80 hover:text-brand-purple-light transition-smooth text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-brand-purple-light transition-smooth text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;