import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-blur rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-blur rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-blur rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6 shadow-glow">
            <Star className="w-4 h-4 mr-2" />
            #1 English Learning Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Master English
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Fluently</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with our comprehensive English courses. From beginner to advanced, 
            we'll guide you to fluency with personalized lessons and expert instruction.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">10,000+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 animate-glow"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover:bg-muted transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
              <span className="text-sm text-muted-foreground">Trusted by students from:</span>
              <div className="flex items-center gap-6">
                <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Cambridge</div>
                <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Oxford</div>
                <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Harvard</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroClassroom} 
                alt="English learning classroom with diverse students" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow animate-pulse">
              98%
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-glow animate-pulse">
              10K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;