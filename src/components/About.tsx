import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sprout, HandHeart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe food brings people together. Every meal is a chance to strengthen neighborhood bonds."
    },
    {
      icon: Sprout,
      title: "Local & Authentic",
      description: "Supporting homegrown talent and local ingredients. Real food from real people."
    },
    {
      icon: Users,
      title: "Mutual Support",
      description: "When neighbors support neighbors, everyone thrives. We're building an economy of care."
    },
    {
      icon: HandHeart,
      title: "Grassroots Growth",
      description: "Starting small, growing together. Every maker and buyer helps build something beautiful."
    }
  ];

  return (
    <section className="py-20 bg-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Nouri
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're not just another food delivery platform. We're a movement to nourish communities 
            through authentic connections between food makers and food lovers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is simple: help local food entrepreneurs grow their businesses while giving 
            neighbors access to incredible, homemade meals. This is a platform built for people, not profit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-warm transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;