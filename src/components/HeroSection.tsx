import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const benefits = [
    "Streamlined business verification process",
    "Role-based access control",
    "Comprehensive admin oversight",
    "Mobile-first authentication"
  ];

  return (
    <section className="bg-gradient-dark py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury opacity-10" />
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-luxury">
            Luxury Business Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience unparalleled sophistication in business collaboration. 
            A premium platform where elegance meets functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow text-lg px-8 py-6 transition-all duration-300" 
              onClick={onGetStarted}
            >
              Begin Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Discover More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;