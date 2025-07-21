import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
              Crafting elegance,
              <br />
              <span className="text-brand-purple">one jewel at a time</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Anokhi अदा, we believe every woman deserves to feel beautiful and confident. 
              Our handcrafted jewelry pieces are designed to celebrate your unique style and 
              complement your personality.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From traditional jhumkas to contemporary pendants, each piece is carefully 
              curated to bring out your inner radiance. We use premium materials and 
              traditional craftsmanship techniques to create jewelry that lasts a lifetime.
            </p>
            <Button variant="elegant" size="lg">
              Our Story
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="gradient-card rounded-2xl p-8 shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop"
                alt="Happy customer wearing jewelry"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              {/* Decorative quote */}
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-soft max-w-xs">
                <p className="text-sm italic text-muted-foreground mb-2">
                  "Every piece tells a story of elegance and grace"
                </p>
                <p className="text-xs font-medium text-brand-purple">
                  - Anokhi अदा Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;