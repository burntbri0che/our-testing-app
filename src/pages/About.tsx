import { Users, Target, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We focus on delivering exceptional web experiences that exceed expectations and drive real business results.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Our clients are at the heart of everything we do. We build lasting relationships through trust and quality.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is crafted with attention to detail and professional standards.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and design trends to deliver cutting-edge solutions.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
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
                ModernWeb
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We're passionate about creating beautiful, functional, and modern web applications 
              that help businesses thrive in the digital world.
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
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ModernWeb was founded with a simple mission: to bridge the gap between 
                  beautiful design and functional technology. We believe that every business 
                  deserves a web presence that not only looks stunning but also performs 
                  exceptionally.
                </p>
                <p>
                  Our team combines years of experience in web development, UI/UX design, 
                  and digital strategy to deliver solutions that drive real results. We stay 
                  at the forefront of technology trends while maintaining a focus on 
                  timeless design principles.
                </p>
                <p>
                  From startups to established enterprises, we've helped businesses of all 
                  sizes establish their digital presence and achieve their goals through 
                  innovative web solutions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient shadow-strong p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl font-bold text-primary-foreground">MW</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Modern Design</h3>
                  <p className="text-muted-foreground">
                    Clean, professional, and timeless
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
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional results for every client.
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your project and see how we can help bring your vision to life 
            with modern web technology and professional design.
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <span className="text-primary font-medium">Contact us today to get started</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;