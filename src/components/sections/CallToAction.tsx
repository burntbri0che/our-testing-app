import { Anchor, Waves, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  const benefits = [
    'Deep Sea Discovery',
    'Marine Life Research',
    'Ocean Conservation',
    'Underwater Photography',
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="card-gradient border-primary/20 shadow-strong overflow-hidden relative">
          <div className="absolute inset-0 hero-gradient opacity-20"></div>
          <CardContent className="relative z-10 p-8 sm:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
                Ready to Dive Into
                <span className="block text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
                  Ocean Adventures?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in exploring the mysterious depths of the ocean, discovering new species,
                and protecting our planet's most precious underwater ecosystems.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Waves className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-medium transition-smooth"
                >
                  Start Diving
                  <Fish className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 transition-smooth"
                >
                  Book Expedition
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;