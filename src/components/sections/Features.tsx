import { Code, Palette, Zap, Shield, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Legendary Weapons',
      description: 'Wield ancient blades forged by master blacksmiths with mystical enchantments and legendary powers.',
    },
    {
      icon: Palette,
      title: 'Magical Protection',
      description: 'Cast powerful spells and enchantments to protect yourself from dark forces and evil creatures.',
    },
    {
      icon: Zap,
      title: 'Arcane Magic',
      description: 'Master the ancient arts of spellcasting and unlock the secrets of forgotten magical knowledge.',
    },
    {
      icon: Shield,
      title: 'Royal Authority',
      description: 'Rule over vast kingdoms with wisdom and justice, commanding armies and making crucial decisions.',
    },
    {
      icon: Users,
      title: 'Mythical Companions',
      description: 'Befriend legendary creatures and form bonds with dragons, unicorns, and other magical beings.',
    },
    {
      icon: Rocket,
      title: 'Epic Quests',
      description: 'Embark on dangerous adventures to save kingdoms, defeat villains, and restore peace to the realm.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Makes Our Fantasy World Special?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in a realm of magic, adventure, and epic quests where anything is possible
            and legends come to life.
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