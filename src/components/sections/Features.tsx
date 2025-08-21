import { Code, Palette, Zap, Shield, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following best practices and modern standards.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Beautiful, responsive designs that look great on all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with efficient loading times and smooth user experiences.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security in mind and reliable architecture for peace of mind.',
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Designed with users at the center, ensuring intuitive and accessible interfaces.',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs and handle increasing demands.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional web applications with modern technology
            and professional design standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border/50 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-bg mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;