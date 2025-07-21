import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <div className="pt-16"> {/* Account for fixed header */}
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
