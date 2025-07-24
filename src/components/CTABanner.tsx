import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Users } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-none shadow-warm bg-card/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Bell className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join the Nouri Community?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience local food like never before. 
              Whether you're a maker or a buyer, we're excited to welcome you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Join Beta as Maker
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join Beta as Buyer
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Join <strong>500+</strong> neighbors already on our waitlist</span>
            </div>
            
            <div className="mt-6 text-xs text-muted-foreground">
              <p>Free to join • Launch starts in your neighborhood • No commitment required</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTABanner;