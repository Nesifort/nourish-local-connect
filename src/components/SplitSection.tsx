import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Users, DollarSign, Clock, Star, Leaf } from "lucide-react";

const SplitSection = () => {
  const makerBenefits = [
    {
      icon: DollarSign,
      title: "Earn from Your Kitchen",
      description: "Turn your passion for cooking into income. Set your own prices and schedule."
    },
    {
      icon: Users,
      title: "Build Your Community",
      description: "Connect with neighbors who appreciate homemade food and local ingredients."
    },
    {
      icon: Star,
      title: "Grow Your Brand",
      description: "Build a reputation and loyal customer base right in your neighborhood."
    }
  ];

  const buyerBenefits = [
    {
      icon: Utensils,
      title: "Authentic Homemade Food",
      description: "Enjoy meals made with love, care, and local ingredients by skilled home cooks."
    },
    {
      icon: Clock,
      title: "Fresh & Convenient",
      description: "Order when you want it, delivered by neighbors who care about quality."
    },
    {
      icon: Leaf,
      title: "Support Local Economy",
      description: "Keep your money in the community while enjoying unique, seasonal dishes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Makers */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                For <span className="text-primary">Makers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a home baker, meal prep enthusiast, or farmers market vendor, 
                Nouri helps you share your passion and grow your business.
              </p>
            </div>
            
            <div className="space-y-6">
              {makerBenefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <Button variant="hero" size="lg">
                Start Selling Your Food
              </Button>
            </div>
          </div>

          {/* For Buyers */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                For <span className="text-terracotta">Buyers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover incredible homemade food from talented neighbors. 
                Support local makers while enjoying authentic, delicious meals.
              </p>
            </div>
            
            <div className="space-y-6">
              {buyerBenefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <Button variant="warm" size="lg">
                Find Food Near You
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;