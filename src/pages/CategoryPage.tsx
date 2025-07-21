import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = {
    pendants: {
      title: "Pendants",
      description: "Elegant statement pieces that add grace to your neckline",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop"
    },
    earrings: {
      title: "Earrings", 
      description: "From delicate studs to glamorous chandeliers",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop"
    },
    jhumkas: {
      title: "Jhumkas",
      description: "Traditional Indian earrings with a contemporary touch",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop"
    },
    bracelets: {
      title: "Bracelets",
      description: "Delicate wrist adornments for every occasion",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop"
    },
    "hair-accessories": {
      title: "Hair Accessories",
      description: "Beautiful embellishments for your hair",
      image: "https://images.unsplash.com/photo-1596944924616-7b35e04f7156?w=800&h=600&fit=crop"
    },
    hampers: {
      title: "Hampers",
      description: "Curated jewelry collections for gifting",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&h=600&fit=crop"
    },
    "customized-hampers": {
      title: "Customized Hampers",
      description: "Personalized gift sets tailored to your preferences",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-semibold text-primary mb-4">Category Not Found</h1>
            <Button onClick={() => navigate("/")} variant="default">
              Return Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
                  {currentCategory.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentCategory.description}
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="px-8">
                    View Collection
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Filter & Sort
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-purple to-brand-lavender rounded-full opacity-60"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-brand-purple-light to-brand-purple rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
                Collection Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're carefully curating our {currentCategory.title.toLowerCase()} collection. 
                Each piece is handpicked to ensure the highest quality and elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Notify Me When Available
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/")} className="px-8">
                  Explore Other Categories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;