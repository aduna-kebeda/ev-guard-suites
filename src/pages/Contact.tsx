import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Youtube, ChevronRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent successfully',
      description: 'We\'ll get back to you within 24 hours.',
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Bole Road, Addis Ababa', 'Next to Edna Mall', 'Ethiopia'],
      color: 'from-blue-500 to-cyan-500',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+251 11 123 4567', '+251 91 234 5678', 'Mon-Sat: 8AM-6PM'],
      color: 'from-green-500 to-emerald-500',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@youguarddrive.com', 'support@youguarddrive.com', 'sales@youguarddrive.com'],
      color: 'from-purple-500 to-pink-500',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8AM - 6PM', 'Saturday: 9AM - 4PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-red-500',
      action: 'Schedule Visit'
    }
  ];

  const faqs = [
    {
      question: 'What types of electric vehicles do you offer?',
      answer: 'We offer a comprehensive range of electric vehicles including sedans, SUVs, hatchbacks, and commercial vehicles. All our vehicles come with manufacturer warranties and our exclusive after-sales support.'
    },
    {
      question: 'Do you provide home charging installation?',
      answer: 'Yes, we offer complete home charging solutions including installation, electrical assessment, and ongoing maintenance. Our certified technicians ensure safe and efficient charging setups.'
    },
    {
      question: 'What is your warranty coverage?',
      answer: 'We provide industry-leading warranty coverage: 5 years or 100,000 km for battery and drivetrain, 3 years for electronics, and comprehensive roadside assistance included with every vehicle.'
    },
    {
      question: 'Can I test drive an electric vehicle?',
      answer: 'Absolutely! We offer comprehensive test drive experiences at our showrooms. Our trained staff will guide you through the features and answer any questions you may have.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we partner with leading financial institutions to offer competitive financing options. Our team can help you find the best financing solution for your needs.'
    },
    {
      question: 'What maintenance services do you provide?',
      answer: 'We provide complete EV maintenance including battery diagnostics, software updates, tire services, brake inspections, and all routine maintenance. Our service centers are equipped with specialized EV diagnostic tools.'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', handle: '@YouGuardDrive', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', handle: '@YouGuardDrive', color: 'hover:text-sky-500' },
    { icon: Instagram, name: 'Instagram', handle: '@youguarddrive', color: 'hover:text-pink-600' },
    { icon: Youtube, name: 'YouTube', handle: 'YouGuard Drive', color: 'hover:text-red-600' }
  ];

  const quickStats = [
    { label: 'Response Time', value: '< 24 hours', icon: Clock },
    { label: 'Customer Satisfaction', value: '99%', icon: Star },
    { label: 'Service Centers', value: '3 Locations', icon: MapPin },
    { label: 'Years Experience', value: '4+ Years', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start Your{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                EV Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Have questions about electric vehicles? Need service assistance? Want to schedule a test drive?
              We're here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We're available through various channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-8 text-center">
                  <div className={`rounded-2xl bg-gradient-to-br ${info.color} w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">{detail}</div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {info.action}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="mb-16">
          <Tabs defaultValue="contact" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="contact">Send Message</TabsTrigger>
                <TabsTrigger value="location">Find Us</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Send className="mr-3 h-6 w-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-background/50"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            className="bg-background/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                  <CardContent className="pt-8">
                    <h3 className="font-bold text-xl mb-6 text-center">Why Contact Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Expert EV Knowledge</div>
                          <div className="text-sm text-muted-foreground">Our team has extensive experience with electric vehicles</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Quick Response</div>
                          <div className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Personalized Service</div>
                          <div className="text-sm text-muted-foreground">Each customer gets dedicated attention and support</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Local Expertise</div>
                          <div className="text-sm text-muted-foreground">Deep understanding of Ethiopian market and infrastructure</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <MapPin className="mr-3 h-6 w-6 text-primary" />
                      Visit Our Showroom
                    </CardTitle>
                    <CardDescription>
                      Experience our vehicles in person at our state-of-the-art facility
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/30">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                        <div className="text-lg font-semibold">Interactive Map</div>
                        <div className="text-sm text-muted-foreground">Bole Road, Addis Ababa</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-primary mr-3" />
                        <span>Bole Road, Addis Ababa, Next to Edna Mall</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-primary mr-3" />
                        <span>Monday - Saturday: 8AM - 6PM</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-primary mr-3" />
                        <span>+251 11 123 4567</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      <MapPin className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Service Center Locations</CardTitle>
                    <CardDescription>
                      Three convenient locations across Ethiopia
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="font-semibold text-primary mb-2">Addis Ababa (Main)</div>
                        <div className="text-sm text-muted-foreground">Bole Road, Next to Edna Mall</div>
                        <div className="text-sm text-muted-foreground">+251 11 123 4567</div>
                      </div>
                      <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="font-semibold text-primary mb-2">Hawassa</div>
                        <div className="text-sm text-muted-foreground">Main Road, Downtown Hawassa</div>
                        <div className="text-sm text-muted-foreground">+251 46 123 4567</div>
                      </div>
                      <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="font-semibold text-primary mb-2">Mekelle</div>
                        <div className="text-sm text-muted-foreground">Makonnen Road, Central Mekelle</div>
                        <div className="text-sm text-muted-foreground">+251 34 123 4567</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our electric vehicles and services
            </p>
          </div>

          <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/20 last:border-b-0">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Social Media & Newsletter */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow us on social media for the latest EV news, tips, and updates from YouGuard Drive
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm group cursor-pointer">
                <CardContent className="pt-8">
                  <social.icon className={`h-8 w-8 mx-auto mb-4 text-muted-foreground group-hover:text-primary ${social.color} transition-colors`} />
                  <div className="font-semibold mb-1">{social.name}</div>
                  <div className="text-sm text-muted-foreground">{social.handle}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat Support
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
