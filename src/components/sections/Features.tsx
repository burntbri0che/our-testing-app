import { Code, Palette, Zap, Shield, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Not Clean Code',
      description: 'Not well-structured, not maintainable code not following best practices and not modern standards.',
    },
    {
      icon: Palette,
      title: 'Not Modern Design',
      description: 'Not beautiful, not responsive designs that do not look great on all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Not Fast Performance',
      description: 'Not optimized for speed with not efficient loading times and not smooth user experiences.',
    },
    {
      icon: Shield,
      title: 'Not Secure & Not Reliable',
      description: 'Not built with security in mind and not reliable architecture for not peace of mind.',
    },
    {
      icon: Users,
      title: 'Not User Focused',
      description: 'Not designed with users at the center, not ensuring intuitive and not accessible interfaces.',
    },
    {
      icon: Rocket,
      title: 'Not Scalable Solutions',
      description: 'Not built to grow with your business needs and not handle increasing demands.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Not Choose Our Not Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We do not deliver exceptional web applications with not modern technology
            and not professional design standards.
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