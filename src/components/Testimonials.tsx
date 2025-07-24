import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Home Baker",
      location: "Oakland, CA",
      quote: "Nouri helped me turn my sourdough hobby into a thriving neighborhood business. My customers have become friends.",
      avatar: "👩🏻‍🍳"
    },
    {
      name: "Marcus Rodriguez",
      role: "Busy Parent",
      location: "Austin, TX",
      quote: "Finally, homemade meals that fit our schedule. The quality and care in every dish is incredible.",
      avatar: "👨🏽‍💼"
    },
    {
      name: "Emma Thompson",
      role: "Farmers Market Vendor",
      location: "Portland, OR",
      quote: "I love how Nouri extends my reach beyond Saturday markets. More neighbors enjoying my fresh produce!",
      avatar: "👩🏼‍🌾"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real neighbors who are building community through food.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-warm hover:shadow-soft transition-all duration-300 transform hover:scale-105 bg-card">
              <CardContent className="p-8 text-center">
                <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" />
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-medium">Coming soon:</span> Real testimonials from our amazing community members
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;