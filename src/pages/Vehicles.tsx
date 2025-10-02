import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Battery, Gauge, Users, ArrowRight, Zap, Leaf, Shield, Star, CheckCircle2, Calculator, CreditCard, Phone, MapPin, Filter, Search, Heart, Share2, Eye, TrendingUp, Award, Clock, Settings, Car, Calendar, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import evSuvBlue from '@/assets/ev-suv-blue.jpg';
import evSedanWhite from '@/assets/ev-sedan-white.jpg';
import evHatchbackGreen from '@/assets/ev-hatchback-green.jpg';

const Vehicles = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const vehicles = [
    {
      id: 1,
      name: 'EcoLux Sedan',
      image: evSedanWhite,
      price: '2,500,000 ETB',
      originalPrice: '2,800,000 ETB',
      monthlyPayment: '45,000 ETB',
      range: '520 km',
      topSpeed: '180 km/h',
      acceleration: '0-100 km/h in 7.2s',
      seats: 5,
      battery: '75 kWh',
      charging: 'DC Fast Charging (30 min to 80%)',
      category: 'sedan',
      description: 'Elegant and efficient. Perfect for professionals and city commuting with premium comfort and cutting-edge technology.',
      features: [
        'Fast Charging (DC 150kW)',
        'Autopilot Level 2',
        'Premium Leather Interior',
        'Panoramic Sunroof',
        'Wireless Phone Charging',
        '360° Camera System',
        'Adaptive Cruise Control',
        'Premium Sound System'
      ],
      specifications: {
        dimensions: '4,750 x 1,820 x 1,430 mm',
        weight: '1,850 kg',
        motor: 'Single Motor 150kW',
        transmission: 'Single-Speed Automatic',
        suspension: 'Air Suspension',
        brakes: 'Regenerative Braking System'
      },
      badge: 'Popular',
      badgeColor: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 2,
      name: 'CityPro Compact',
      image: evHatchbackGreen,
      price: '1,800,000 ETB',
      originalPrice: '2,000,000 ETB',
      monthlyPayment: '32,000 ETB',
      range: '380 km',
      topSpeed: '150 km/h',
      acceleration: '0-100 km/h in 8.5s',
      seats: 5,
      battery: '45 kWh',
      charging: 'AC Fast Charging (6 hours)',
      category: 'hatchback',
      description: 'Agile urban mobility. Ideal for city driving with excellent efficiency, smart parking assistance, and compact design.',
      features: [
        'Compact Design',
        'Smart Parking Assist',
        'Low Maintenance',
        '360° Camera',
        'Apple CarPlay/Android Auto',
        'Digital Instrument Cluster',
        'Hill Start Assist',
        'Energy Recovery System'
      ],
      specifications: {
        dimensions: '4,100 x 1,750 x 1,500 mm',
        weight: '1,350 kg',
        motor: 'Single Motor 100kW',
        transmission: 'Single-Speed Automatic',
        suspension: 'Independent Suspension',
        brakes: 'Regenerative Braking'
      },
      badge: 'Best Value',
      badgeColor: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      id: 3,
      name: 'FamilyMax SUV',
      image: evSuvBlue,
      price: '3,200,000 ETB',
      originalPrice: '3,600,000 ETB',
      monthlyPayment: '58,000 ETB',
      range: '480 km',
      topSpeed: '200 km/h',
      acceleration: '0-100 km/h in 6.8s',
      seats: 7,
      battery: '85 kWh',
      charging: 'DC Fast Charging (35 min to 80%)',
      category: 'suv',
      description: 'Spacious luxury for families. Premium comfort with advanced safety features, all-weather capability, and generous cargo space.',
      features: [
        '7 Seats with 3rd Row',
        'All-Wheel Drive',
        'Advanced Safety Suite',
        'Premium Harman Kardon Sound',
        'Panoramic Moonroof',
        'Wireless Phone Charging',
        'Adaptive Air Suspension',
        'Power Tailgate'
      ],
      specifications: {
        dimensions: '4,850 x 1,930 x 1,680 mm',
        weight: '2,200 kg',
        motor: 'Dual Motor 220kW AWD',
        transmission: 'Single-Speed Automatic',
        suspension: 'Adaptive Air Suspension',
        brakes: 'Carbon Ceramic Brakes'
      },
      badge: 'Premium',
      badgeColor: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Helen Tesfaye',
      vehicle: 'EcoLux Sedan',
      content: 'The EcoLux Sedan has transformed my daily commute. The range anxiety is gone, and the comfort is exceptional.',
      rating: 5,
      avatar: '/api/placeholder/50/50',
      location: 'Addis Ababa'
    },
    {
      name: 'Michael Birhanu',
      vehicle: 'FamilyMax SUV',
      content: 'Perfect for our growing family. The 7 seats and safety features give us complete peace of mind.',
      rating: 5,
      avatar: '/api/placeholder/50/50',
      location: 'Hawassa'
    },
    {
      name: 'Fatima Ahmed',
      vehicle: 'CityPro Compact',
      content: 'Amazing city car! Easy to park, great efficiency, and the smart features make driving effortless.',
      rating: 5,
      avatar: '/api/placeholder/50/50',
      location: 'Mekelle'
    }
  ];

  const financingOptions = [
    {
      name: 'Standard Financing',
      interest: '8.5%',
      duration: 'Up to 7 years',
      downPayment: '20%',
      features: ['Flexible terms', 'Competitive rates', 'Quick approval']
    },
    {
      name: 'Premium Financing',
      interest: '6.9%',
      duration: 'Up to 5 years',
      downPayment: '15%',
      features: ['Lower rates', 'Priority service', 'Extended warranty']
    },
    {
      name: 'Lease to Own',
      interest: '9.2%',
      duration: 'Up to 4 years',
      downPayment: '10%',
      features: ['Lower monthly payments', 'Upgrade options', 'Maintenance included']
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle =>
    filterCategory === 'all' || vehicle.category === filterCategory
  ).sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
    if (sortBy === 'price-high') return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
    if (sortBy === 'range') return parseInt(b.range) - parseInt(a.range);
    return a.popular ? -1 : 1; // popular first by default
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Premium Electric Vehicles</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Electric Fleet
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our range of premium electric vehicles, carefully selected and optimized for Ethiopian roads,
              climate, and driving conditions. Experience the future of sustainable mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Eye className="mr-2 h-5 w-5" />
                Explore Vehicles
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Financing
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="font-semibold">Filter by:</span>
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Vehicles</SelectItem>
                  <SelectItem value="sedan">Sedans</SelectItem>
                  <SelectItem value="suv">SUVs</SelectItem>
                  <SelectItem value="hatchback">Hatchbacks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="range">Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {filteredVehicles.map((vehicle, index) => (
            <Card key={vehicle.id} className={`group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm relative overflow-hidden ${vehicle.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {vehicle.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1">
                    <Award className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4">
                  <Badge className={`bg-gradient-to-r ${vehicle.badgeColor} text-white border-0 px-4 py-1 shadow-lg`}>
                    {vehicle.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{vehicle.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{vehicle.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{vehicle.originalPrice}</div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">{vehicle.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group/stat">
                    <Battery className="h-6 w-6 mx-auto mb-2 text-primary group-hover/stat:scale-110 transition-transform" />
                    <div className="text-lg font-bold">{vehicle.range}</div>
                    <div className="text-xs text-muted-foreground font-medium">Range</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors group/stat">
                    <Gauge className="h-6 w-6 mx-auto mb-2 text-accent group-hover/stat:scale-110 transition-transform" />
                    <div className="text-lg font-bold">{vehicle.topSpeed}</div>
                    <div className="text-xs text-muted-foreground font-medium">Top Speed</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors group/stat">
                    <Users className="h-6 w-6 mx-auto mb-2 text-secondary group-hover/stat:scale-110 transition-transform" />
                    <div className="text-lg font-bold">{vehicle.seats}</div>
                    <div className="text-xs text-muted-foreground font-medium">Seats</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-6">
                <Link to={`/vehicles/${vehicle.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button className="w-full group/btn">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Why Choose Electric Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Why Choose Electric</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of Ethiopian Mobility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of electric vehicles tailored for Ethiopian roads and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">0g/km</div>
                <div className="text-xl font-bold mb-3">Zero Emissions</div>
                <p className="text-muted-foreground leading-relaxed">
                  Contribute to Ethiopia's clean air initiative with 100% emission-free driving
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">70%</div>
                <div className="text-xl font-bold mb-3">Cost Savings</div>
                <p className="text-muted-foreground leading-relaxed">
                  Save up to 70% on fuel costs compared to traditional gasoline vehicles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">5 Years</div>
                <div className="text-xl font-bold mb-3">Comprehensive Warranty</div>
                <p className="text-muted-foreground leading-relaxed">
                  Industry-leading warranty coverage with priority service and support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financing Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Financing Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your EV Dreams Affordable</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible financing solutions designed to make electric vehicles accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CreditCard className="mr-3 h-6 w-6 text-primary" />
                    {option.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{option.interest}</div>
                    <div className="text-sm text-muted-foreground">Interest Rate</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-primary">Duration</div>
                      <div className="text-muted-foreground">{option.duration}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Down Payment</div>
                      <div className="text-muted-foreground">{option.downPayment}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {option.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant="outline">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Payment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Experiences, Real Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from Ethiopian drivers who have made the switch to electric vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                        <div className="text-sm text-muted-foreground">{testimonial.vehicle} Owner</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Electric Mobility?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of satisfied Ethiopian drivers who have made the switch to electric vehicles.
              Schedule a test drive, explore financing options, or get a personalized quote today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-bold mb-2">Test Drive</div>
                <div className="text-sm text-muted-foreground mb-3">Experience our vehicles firsthand</div>
                <Button size="sm" variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-bold mb-2">Financing</div>
                <div className="text-sm text-muted-foreground mb-3">Explore payment options</div>
                <Button size="sm" variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Calculate
                </Button>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-bold mb-2">Consultation</div>
                <div className="text-sm text-muted-foreground mb-3">Speak with our experts</div>
                <Button size="sm" variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Your EV Today
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                <Settings className="mr-2 h-5 w-5" />
                Compare Vehicles
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vehicles;
