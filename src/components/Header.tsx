import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    "Home", "Pendants", "Earrings", "Jhumkas", "Bracelets", 
    "Hair Accessories", "Hampers", "Customized Hampers", "About", "Contact"
  ];

  return (
    <header className="bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-heading font-semibold text-primary">
              Anokhi <span className="text-brand-purple">अदा</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <User size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={18} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center border border-border rounded-lg px-3 py-2 mb-3">
                <Search size={16} className="text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  className="flex-1 bg-transparent text-sm outline-none"
                />
              </div>
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;