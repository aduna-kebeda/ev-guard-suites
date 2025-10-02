import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Battery, Shield, Wrench, Leaf, TrendingUp, Users, Star, CheckCircle2, ArrowRight, Zap, Car, Calculator, Phone, MapPin, Award, Clock, Settings, Eye, Heart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-ev-charging.jpg';
import evSuvBlue from '@/assets/ev-suv-blue.jpg';
import evSedanWhite from '@/assets/ev-sedan-white.jpg';
import evHatchbackGreen from '@/assets/ev-hatchback-green.jpg';

const Home = () => {
  const features = [
    {
      icon: Battery,
      title: 'Extended Range',
      description: 'Premium electric vehicles with ranges up to 520km, perfect for Ethiopian roads and daily commutes.',
      color: 'from-blue-500 to-cyan-500',
      stats: 'Up to 520km'
    },
    {
      icon: Shield,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty coverage with priority service and support for complete peace of mind.',
      color: 'from-green-500 to-emerald-500',
      stats: '5 Years'
    },
    {
      icon: Wrench,
      title: 'Expert Service Network',
      description: 'EV-trained technicians, state-of-the-art facilities, and nationwide service coverage across Ethiopia.',
      color: 'from-purple-500 to-pink-500',
      stats: '50+ Centers'
    },
    {
      icon: Leaf,
      title: 'Zero Emissions',
      description: 'Join Ethiopia\'s clean air initiative with 100% emission-free electric vehicles.',
      color: 'from-orange-500 to-red-500',
      stats: '0g/km CO₂'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '99%', label: 'Satisfaction Rate', color: 'from-green-500 to-emerald-500' },
    { icon: Shield, value: '5 Years', label: 'Warranty Coverage', color: 'from-purple-500 to-pink-500' },
    { icon: Car, value: '50+', label: 'Service Centers', color: 'from-orange-500 to-red-500' }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: 'EcoLux Sedan',
      image: evSedanWhite,
      price: '2,500,000 ETB',
      range: '520 km',
      badge: 'Most Popular',
      badgeColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'FamilyMax SUV',
      image: evSuvBlue,
      price: '3,200,000 ETB',
      range: '480 km',
      badge: 'Premium',
      badgeColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'CityPro Compact',
      image: evHatchbackGreen,
      price: '1,800,000 ETB',
      range: '380 km',
      badge: 'Best Value',
      badgeColor: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Electric Vehicle Charging" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">100% Electric. 100% Ethiopian.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Drive the Future with{' '}
              <span className="text-gradient">
                Electric Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover premium electric vehicles designed for Ethiopia's roads. Sustainable, reliable, and innovative.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vehicles">
                <Button size="lg" className="group h-14 px-8 text-lg glow">
                  Browse Vehicles
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth/login">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg backdrop-blur-sm">
                  Track Your Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Why Choose YouGuard Drive</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of Ethiopian Mobility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of electric vehicles tailored for Ethiopian roads and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-8">
                  <div className={`rounded-2xl bg-gradient-to-br ${feature.color} w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{feature.stats}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Ethiopian Drivers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied customers who've made the switch to sustainable driving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8">
                  <div className={`rounded-2xl bg-gradient-to-br ${stat.color} w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Experiences, Real Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from Ethiopian drivers who have made the switch to electric vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Helen Tesfaye',
                role: 'Environmental Scientist',
                content: 'The EcoLux Sedan has transformed my daily commute. The range anxiety is gone, and the comfort is exceptional. YouGuard Drive made the transition seamless.',
                rating: 5,
                avatar: '/api/placeholder/60/60',
                location: 'Addis Ababa',
                vehicle: 'EcoLux Sedan'
              },
              {
                name: 'Michael Birhanu',
                role: 'Business Executive',
                content: 'Perfect for our growing family. The 7 seats and safety features give us complete peace of mind. The savings on fuel costs are incredible.',
                rating: 5,
                avatar: '/api/placeholder/60/60',
                location: 'Hawassa',
                vehicle: 'FamilyMax SUV'
              },
              {
                name: 'Fatima Ahmed',
                role: 'Tech Entrepreneur',
                content: 'Amazing city car! Easy to park, great efficiency, and the smart features make driving effortless. Best investment I\'ve made.',
                rating: 5,
                avatar: '/api/placeholder/60/60',
                location: 'Mekelle',
                vehicle: 'CityPro Compact'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.vehicle}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Featured Vehicles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Best Sellers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular electric vehicles, designed for Ethiopian roads and lifestyles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`} className="group">
                <Card className="overflow-hidden border-2 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-primary/20">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 left-4 bg-gradient-to-r ${vehicle.badgeColor} text-white border-0`}
                    >
                      {vehicle.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{vehicle.price}</span>
                      <div className="flex items-center text-muted-foreground">
                        <Battery className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vehicle.range}</span>
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/vehicles">
              <Button size="lg" variant="outline" className="h-12 px-8 hover:bg-primary hover:text-white transition-colors">
                View All Vehicles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Go Electric?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who've made the switch to sustainable driving.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/vehicles">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg hover:scale-105 transition-transform">
                Explore Vehicles
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white hover:scale-105 transition-transform backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
