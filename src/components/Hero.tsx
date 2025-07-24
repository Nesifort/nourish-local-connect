import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Homegrown Meals,
            <br />
            <span className="text-warm-cream">Made by Neighbors</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-warm-cream/90 max-w-2xl mx-auto leading-relaxed">
            Connect with local home cooks, bakers, and farmers market vendors. 
            Real food, real people, real community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Join as a Maker
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
              Order Near You
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-warm-cream/80">
            <p>Nourishing community, one meal at a time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;