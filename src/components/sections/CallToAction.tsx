import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  const benefits = [
    'Professional Design',
    'Modern Technology Stack',
    'Responsive & Mobile-First',
    'SEO Optimized',
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="card-gradient border-primary/20 shadow-strong overflow-hidden relative">
          <div className="absolute inset-0 hero-gradient opacity-20"></div>
          <CardContent className="relative z-10 p-8 sm:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
                Ready to Build Something
                <span className="block text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
                  Amazing Together?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's create your next web application with modern design principles,
                clean code, and professional quality that stands out.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary-glow text-primary-foreground shadow-medium transition-smooth"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 transition-smooth"
                >
                  Schedule a Call
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