import { ChefHat, MapPin, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ChefHat,
      title: "Local Makers Cook",
      description: "Home cooks, bakers, and farmers market vendors create delicious, homemade food with love and local ingredients."
    },
    {
      icon: MapPin,
      title: "Neighbors Discover",
      description: "Browse and order from makers in your neighborhood. Find everything from fresh bread to family recipes."
    },
    {
      icon: Heart,
      title: "Community Grows",
      description: "Support local food entrepreneurs while enjoying authentic, home-cooked meals. Everyone wins."
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Nouri Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, authentic, community-driven. Here's how we connect food lovers with local makers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-sage-light transform -translate-x-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;