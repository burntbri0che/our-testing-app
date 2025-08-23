import { Rocket, Target, Award, Lightbulb, Satellite, Astronaut } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Control',
      description: 'We coordinate complex space operations with precision and expertise, ensuring every mission reaches its destination safely.',
    },
    {
      icon: Rocket,
      title: 'Space Pioneers',
      description: 'Our team leads the way in space exploration, pushing the boundaries of what\'s possible in the cosmos.',
    },
    {
      icon: Award,
      title: 'Excellence in Space',
      description: 'We maintain the highest standards in space technology and mission planning for optimal results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly develop new technologies and approaches to advance humanity\'s presence in space.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Space Missions' },
    { number: '1000+', label: 'Light Years Explored' },
    { number: '25+', label: 'Planets Discovered' },
    { number: '99.9%', label: 'Mission Success Rate' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              About 
              <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
                CosmosExplorer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We\'re passionate about exploring the vast reaches of space, discovering new worlds,
              and advancing humanity\'s understanding of the universe through cutting-edge technology.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Space Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CosmosExplorer was founded with a bold mission: to make space exploration
                  accessible to everyone and unlock the mysteries of the universe. We believe that
                  humanity\'s future lies among the stars.
                </p>
                <p>
                  Our team combines decades of experience in aerospace engineering, astrophysics,
                  and mission planning to deliver groundbreaking space missions. We stay at the
                  forefront of space technology while maintaining our commitment to safety and innovation.
                </p>
                <p>
                  From launching satellites to planning Mars missions, we\'ve helped advance
                  humanity\'s presence in space and discover new possibilities beyond Earth.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient shadow-strong p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto">
                    <Satellite className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Space Technology</h3>
                  <p className="text-muted-foreground">
                    Advanced, reliable, and innovative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Mission Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every space mission and ensure we deliver
              exceptional results in the most challenging environment known to humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-gradient border-border/50 shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-bg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Join the Space Mission?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let\'s discuss your space exploration goals and see how we can help bring your
            cosmic vision to life with cutting-edge space technology and expert mission planning.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Astronaut className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Contact us today to launch your mission</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;