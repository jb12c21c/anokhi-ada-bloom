import { Button } from "@/components/ui/button";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Pendants",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      description: "Elegant statement pieces"
    },
    {
      name: "Earrings", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      description: "From studs to chandeliers"
    },
    {
      name: "Jhumkas",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", 
      description: "Traditional with a modern twist"
    },
    {
      name: "Bracelets",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      description: "Delicate wrist adornments"
    },
    {
      name: "Hair Accessories",
      image: "https://images.unsplash.com/photo-1596944924616-7b35e04f7156?w=400&h=400&fit=crop",
      description: "Beautiful hair embellishments"
    },
    {
      name: "Hampers",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=400&fit=crop",
      description: "Curated jewelry collections"
    },
    {
      name: "Customized Hampers",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Personalized gift sets"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of jewelry designed to complement your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer"
            >
              <div className="gradient-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth group-hover:scale-105">
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <h3 className="text-lg font-heading font-medium text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="soft" size="sm" className="w-full">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;