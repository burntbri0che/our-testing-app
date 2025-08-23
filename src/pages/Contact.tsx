import { useState } from 'react';
import { Satellite, Rocket, MapPin, Send, Astronaut, Planet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mission request sent!",
        description: "Thank you for your cosmic inquiry. We'll contact you soon to discuss your space mission.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Satellite,
      title: 'Mission Control',
      detail: 'mission@cosmosexplorer.com',
      description: 'Send us your space mission proposals',
    },
    {
      icon: Rocket,
      title: 'Launch Pad',
      detail: '+1 (555) 321-4567',
      description: 'Call us during mission planning hours',
    },
    {
      icon: Planet,
      title: 'Space Station',
      detail: 'International Space Station',
      description: 'Visit our orbital headquarters',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Contact Mission
            <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
              Control
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your next space mission? We\'d love to hear from you. 
            Send us a message and we\'ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Let\'s Plan Your Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a space mission in mind, need technical consultation, 
                  or just want to discuss cosmic possibilities, we\'re here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-bg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.detail}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient border-border/50 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Send Mission Request
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Astronaut Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Space Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@space.com"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mission Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your space mission or cosmic inquiry..."
                        rows={6}
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-primary-foreground shadow-medium transition-smooth group"
                    >
                      {isSubmitting ? (
                        <>Launching...</>
                      ) : (
                        <>
                          Launch Request
                          <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Cosmic Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our space missions and cosmic services.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: "What's your typical mission timeline?",
                answer: "Mission timelines vary depending on complexity and destination. Most missions are planned within 6-18 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing mission support?",
                answer: "Yes! We offer comprehensive mission support packages including real-time monitoring, technical assistance, and emergency response protocols throughout your space journey."
              },
              {
                question: "Can you work with existing space technology?",
                answer: "Absolutely! We can integrate with existing space systems, upgrade current technology, or design completely new solutions based on your mission requirements."
              },
              {
                question: "What space technologies do you use?",
                answer: "We use cutting-edge space technologies including advanced propulsion systems, AI navigation, quantum communication, and sustainable life support systems."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-gradient border-border/50 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;