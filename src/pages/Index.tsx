import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SplitSection from "@/components/SplitSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <SplitSection />
      <About />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
