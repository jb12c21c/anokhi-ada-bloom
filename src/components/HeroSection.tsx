import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Discover Your
              <br />
              <span className="text-brand-purple">Anokhi अदा</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Elegant jewelry for every mood & moment. Handcrafted with love, designed for your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="elegant" className="text-base px-8 py-6">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                View Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="Elegant jewelry collection"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-purple rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-lavender rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;