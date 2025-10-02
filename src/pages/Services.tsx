import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Wrench, Shield, Battery, Calendar, CheckCircle2, Clock, Star, Users, Zap, Phone, Mail, MapPin, ArrowRight, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Battery,
      title: 'Battery Service',
      description: 'Complete battery health checks, diagnostics, and replacements with advanced testing equipment.',
      features: [
        'Battery Health Reports',
        'Performance Optimization',
        'Thermal Management Check',
        'Charging System Diagnostics',
        'Warranty Assessment'
      ],
      price: 'From 2,500 ETB',
      duration: '2-4 hours',
      popular: false
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular maintenance to keep your EV running smoothly with genuine parts and expert care.',
      features: [
        'Tire Service & Rotation',
        'Brake Inspection & Service',
        'Fluid Level Checks',
        'Software Updates',
        'Safety System Testing'
      ],
      price: 'From 1,800 ETB',
      duration: '1-3 hours',
      popular: true
    },
    {
      icon: Shield,
      title: 'Warranty Service',
      description: 'Comprehensive warranty coverage with priority service and genuine replacement parts.',
      features: [
        'Battery Coverage',
        'Motor & Drivetrain',
        'Electronics Warranty',
        'Priority Service',
        'Loaner Vehicle Available'
      ],
      price: 'Included',
      duration: 'Varies',
      popular: false
    },
    {
      icon: Calendar,
      title: 'Service Booking',
      description: 'Easy online booking for all your service needs with flexible scheduling and reminders.',
      features: [
        'Flexible Scheduling',
        'Service Reminders',
        'Online Booking',
        'Progress Tracking',
        'Digital Service History'
      ],
      price: 'Free',
      duration: 'Instant',
      popular: false
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: 'Book Appointment',
      description: 'Schedule your service online or call us directly. Choose a convenient time and location.',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Vehicle Inspection',
      description: 'Our EV-trained technicians perform comprehensive diagnostics using advanced equipment.',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 3,
      title: 'Service Execution',
      description: 'Expert technicians perform all necessary maintenance and repairs with genuine parts.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 4,
      title: 'Quality Check',
      description: 'Final inspection ensures everything meets our high standards before vehicle delivery.',
      icon: CheckCircle2,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Helen Tesfaye',
      service: 'Battery Service',
      content: 'Excellent battery diagnostics and replacement service. Very professional and transparent about costs.',
      rating: 5,
      avatar: '/api/placeholder/50/50'
    },
    {
      name: 'Michael Birhanu',
      service: 'Regular Maintenance',
      content: 'The maintenance service is thorough and the staff is knowledgeable about EVs. Highly recommended!',
      rating: 5,
      avatar: '/api/placeholder/50/50'
    },
    {
      name: 'Fatima Ahmed',
      service: 'Warranty Service',
      content: 'Warranty claim was processed quickly and professionally. No hassle at all.',
      rating: 5,
      avatar: '/api/placeholder/50/50'
    }
  ];

  const warrantyDetails = [
    { item: 'Battery warranty', coverage: '5 years or 100,000 km', icon: Battery },
    { item: 'Motor and drivetrain', coverage: '5 years or 150,000 km', icon: Wrench },
    { item: 'Electronics and infotainment', coverage: '3 years or 60,000 km', icon: Zap },
    { item: 'Body and paint', coverage: '3 years', icon: Shield },
    { item: 'Roadside assistance', coverage: 'Included', icon: MapPin },
    { item: 'Free annual inspections', coverage: 'Included', icon: CheckCircle2 }
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
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Expert EV Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Service &{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Warranty
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Expert care for your electric vehicle with industry-leading warranty coverage,
              state-of-the-art diagnostics, and EV-trained technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book Service Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call for Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive EV Care</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we provide complete care for your electric vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm relative ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-primary font-semibold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {service.price}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to get your EV back on the road quickly and safely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`rounded-2xl bg-gradient-to-br ${step.color} w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-x-10" />
                  )}
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty & Service Booking Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="warranty" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="warranty">Warranty Details</TabsTrigger>
                <TabsTrigger value="booking">Service Booking</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="warranty">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Shield className="mr-3 h-6 w-6 text-primary" />
                      Warranty Coverage
                    </CardTitle>
                    <CardDescription>
                      Comprehensive protection for your peace of mind
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {warrantyDetails.map((warranty, index) => (
                        <div key={index} className="flex items-start p-3 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                          <warranty.icon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{warranty.item}</div>
                            <div className="text-sm text-muted-foreground">{warranty.coverage}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Why Choose Our Warranty?</CardTitle>
                    <CardDescription>
                      Industry-leading coverage you can trust
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>5-year battery warranty (longest in Ethiopia)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Genuine parts and manufacturer-backed</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Free roadside assistance included</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Priority service scheduling</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6" size="lg">
                      <Shield className="mr-2 h-5 w-5" />
                      Learn More About Warranty
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="booking">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Calendar className="mr-3 h-6 w-6 text-primary" />
                      Book a Service
                    </CardTitle>
                    <CardDescription>
                      Schedule your next maintenance appointment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Our EV-trained technicians are ready to service your vehicle with state-of-the-art equipment and genuine parts.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Same-day service available</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Complimentary vehicle inspection</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Comfortable waiting lounge</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                        <span>Real-time service updates</span>
                      </div>
                    </div>
                    <Link to="/portal/service">
                      <Button className="w-full" size="lg">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Service Appointment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Emergency Service</CardTitle>
                    <CardDescription>
                      24/7 roadside assistance when you need it most
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <span>24/7 Emergency Hotline: +251 911 123 456</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary mr-3" />
                        <span>Nationwide Coverage</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span>Average Response: 30 minutes</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-3" />
                        <span>Certified EV Technicians</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency Service
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from customers who trust us with their EV service needs
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Center Hours */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Service Center Hours</h2>
            <p className="text-muted-foreground">Visit us at any of our three locations across Ethiopia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="font-bold mb-2">Addis Ababa</div>
                <div className="space-y-1 text-sm">
                  <div><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</div>
                  <div><strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
                  <div><strong>Sunday:</strong> Closed</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="font-bold mb-2">Hawassa</div>
                <div className="space-y-1 text-sm">
                  <div><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</div>
                  <div><strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
                  <div><strong>Sunday:</strong> Closed</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="font-bold mb-2">Mekelle</div>
                <div className="space-y-1 text-sm">
                  <div><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</div>
                  <div><strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
                  <div><strong>Sunday:</strong> Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
