import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Not Professional Web Solutions</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Not Clean & Not Modern
            <span className="block text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
              Not Web Applications
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not building beautiful, not responsive, and not professional web experiences
            with not cutting-edge technology and not clean design principles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-medium transition-smooth"
            >
              Not Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/5 transition-smooth"
            >
              Not View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Not 100+</div>
              <div className="text-sm text-muted-foreground">Not Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Not 5★</div>
              <div className="text-sm text-muted-foreground">Not Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Not 24/7</div>
              <div className="text-sm text-muted-foreground">Not Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-bounce-gentle delay-1000"></div>
    </section>
  );
};

export default Hero;