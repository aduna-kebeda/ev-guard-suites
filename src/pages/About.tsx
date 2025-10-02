import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Eye, Award, Users, Zap, TrendingUp, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To accelerate Ethiopia\'s transition to sustainable transportation through accessible, reliable electric vehicles.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading EV provider in East Africa, setting standards for quality, service, and customer satisfaction.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We partner with world-class manufacturers to bring you vehicles that meet international safety and quality standards.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction drives us. We provide comprehensive support from purchase through the entire lifecycle of your vehicle.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'YouGuard Drive was established with a vision to revolutionize EV adoption in Ethiopia.'
    },
    {
      year: '2021',
      title: 'First EV Launch',
      description: 'Successfully launched our first electric vehicle models in the Ethiopian market.'
    },
    {
      year: '2022',
      title: '500+ Customers',
      description: 'Reached our milestone of 500 satisfied customers across Ethiopia.'
    },
    {
      year: '2023',
      title: 'Service Network',
      description: 'Expanded to 3 state-of-the-art service centers with EV-trained technicians.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as Ethiopia\'s leading electric vehicle provider.'
    }
  ];

  const team = [
    {
      name: 'Abebe Kebede',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Former automotive industry executive with 15+ years of experience in vehicle distribution.'
    },
    {
      name: 'Sara Mengistu',
      role: 'Head of Operations',
      image: '/api/placeholder/150/150',
      bio: 'EV technology expert focused on building sustainable transportation infrastructure.'
    },
    {
      name: 'David Johnson',
      role: 'Technical Director',
      image: '/api/placeholder/150/150',
      bio: 'International EV specialist bringing global best practices to Ethiopian market.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Helen Tesfaye',
      role: 'University Professor',
      content: 'YouGuard Drive made switching to electric vehicles seamless. The service and support are exceptional.',
      rating: 5
    },
    {
      name: 'Michael Birhanu',
      role: 'Business Owner',
      content: 'The warranty coverage and maintenance service give me complete peace of mind with my EV purchase.',
      rating: 5
    },
    {
      name: 'Fatima Ahmed',
      role: 'Environmental Activist',
      content: 'Finally, a company that takes sustainable transportation seriously in Ethiopia. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Pioneering EV Revolution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                YouGuard Drive
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Leading Ethiopia's transition to sustainable electric mobility with world-class vehicles,
              exceptional service, and unwavering commitment to customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Zap className="mr-2 h-5 w-5" />
                Explore Our Fleet
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Vision to Reality</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of innovation, sustainability, and customer-centric excellence
            </p>
          </div>

          <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      YouGuard Drive, powered by Kairos Addis, was founded with a simple but powerful vision:
                      to make electric vehicles accessible and practical for Ethiopian drivers. We recognized that
                      the future of transportation is electric, and we're committed to leading that transition in our country.
                    </p>
                    <p>
                      Through our partnership with Kairos Addis, one of Ethiopia's most trusted automotive groups,
                      we bring together decades of automotive expertise with cutting-edge electric vehicle technology.
                      This unique combination allows us to offer not just vehicles, but a complete ecosystem of support,
                      service, and innovation.
                    </p>
                    <p>
                      Today, we're proud to serve hundreds of satisfied customers across Ethiopia, providing them with
                      reliable electric vehicles, comprehensive warranty coverage, and exceptional after-sales service.
                      Our state-of-the-art service centers employ EV-trained technicians who understand the unique needs
                      of electric vehicles.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>DJ</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-semibold">15+ Years Combined Experience</div>
                      <div>Automotive & EV Expertise</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold">2020</div>
                      <div className="text-muted-foreground">Founded</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className={`rounded-2xl bg-gradient-to-br ${value.gradient} w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key moments that shaped our path to becoming Ethiopia's premier EV provider
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {achievement.year}
                    </div>
                  </div>
                  <Card className="flex-1 border-2 hover:border-primary/50 transition-colors bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to advancing electric mobility in Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <Avatar className="w-24 h-24 mx-auto mb-6 border-4 border-primary/20">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from Ethiopian drivers who chose electric mobility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="mr-4">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats & CTA */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Electric? Why Now?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Electric vehicles represent the future of transportation. They're better for the environment,
              more economical to operate, and offer a superior driving experience. With Ethiopia's growing
              focus on renewable energy and sustainable development, there's never been a better time to make the switch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="font-semibold text-sm">Happy Customers</div>
                <TrendingUp className="h-6 w-6 text-green-500 mx-auto mt-2" />
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="font-semibold text-sm">Satisfaction Rate</div>
                <Star className="h-6 w-6 text-yellow-500 mx-auto mt-2" />
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="font-semibold text-sm">Service Centers</div>
                <MapPin className="h-6 w-6 text-blue-500 mx-auto mt-2" />
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="font-semibold text-sm">Support Available</div>
                <Phone className="h-6 w-6 text-green-500 mx-auto mt-2" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Zap className="mr-2 h-5 w-5" />
                Start Your EV Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
