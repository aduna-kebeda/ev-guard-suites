import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Battery, Gauge, Users, ArrowRight, Zap, Leaf, Shield, Star, CheckCircle2, Calculator, CreditCard, Phone, MapPin, Heart, Share2, Eye, TrendingUp, Award, Clock, Settings, Car, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import evSuvBlue from '@/assets/ev-suv-blue.jpg';
import evSedanWhite from '@/assets/ev-sedan-white.jpg';
import evHatchbackGreen from '@/assets/ev-hatchback-green.jpg';

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicleId = parseInt(id || '1');

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

  const vehicle = vehicles.find(v => v.id === vehicleId);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Not Found</h1>
          <p className="text-muted-foreground mb-8">The vehicle you're looking for doesn't exist.</p>
          <Link to="/vehicles">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Vehicles
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/vehicles">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Vehicles
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className={`bg-gradient-to-r ${vehicle.badgeColor} text-white border-0 px-4 py-1`}>
                  {vehicle.badge}
                </Badge>
                {vehicle.popular && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1">
                    <Award className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{vehicle.name}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{vehicle.description}</p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Battery className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary">{vehicle.range}</div>
                  <div className="text-sm text-muted-foreground font-medium">Range</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <Gauge className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold text-accent">{vehicle.topSpeed}</div>
                  <div className="text-sm text-muted-foreground font-medium">Top Speed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <Users className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <div className="text-2xl font-bold text-secondary">{vehicle.seats}</div>
                  <div className="text-sm text-muted-foreground font-medium">Seats</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-bold text-primary">{vehicle.price}</div>
                <div className="text-xl text-muted-foreground line-through">{vehicle.originalPrice}</div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Save {Math.round(((parseInt(vehicle.originalPrice.replace(/,/g, '')) - parseInt(vehicle.price.replace(/,/g, ''))) / parseInt(vehicle.originalPrice.replace(/,/g, ''))) * 100)}%
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Zap className="mr-2 h-5 w-5" />
                    Order Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Financing
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 hover:bg-white/30">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 hover:bg-white/30">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Detailed Information Tabs */}
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="charging">Charging</TabsTrigger>
            <TabsTrigger value="financing">Financing</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="space-y-8">
            <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Specifications</CardTitle>
                <CardDescription>Detailed technical information about the {vehicle.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Dimensions</span>
                      <span className="text-muted-foreground">{vehicle.specifications.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Weight</span>
                      <span className="text-muted-foreground">{vehicle.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Motor</span>
                      <span className="text-muted-foreground">{vehicle.specifications.motor}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Transmission</span>
                      <span className="text-muted-foreground">{vehicle.specifications.transmission}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Suspension</span>
                      <span className="text-muted-foreground">{vehicle.specifications.suspension}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="font-semibold text-primary">Brakes</span>
                      <span className="text-muted-foreground">{vehicle.specifications.brakes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{vehicle.acceleration}</div>
                  <div className="text-muted-foreground">Acceleration (0-100 km/h)</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{vehicle.battery}</div>
                  <div className="text-muted-foreground">Battery Capacity</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{vehicle.monthlyPayment}</div>
                  <div className="text-muted-foreground">Monthly Payment</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Key Features</CardTitle>
                <CardDescription>Discover what makes the {vehicle.name} special</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg bg-white/50 border border-white/20">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="charging" className="space-y-8">
            <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Charging Information</CardTitle>
                <CardDescription>Everything you need to know about charging your {vehicle.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-8 w-8 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <div className="text-xl font-semibold mb-2">Charging Capability</div>
                    <div className="text-muted-foreground text-lg">{vehicle.charging}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                    <div className="text-lg font-semibold text-blue-800 mb-2">Home Charging</div>
                    <div className="text-blue-600">Level 2 charger included. Full charge in 6-8 hours.</div>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                    <div className="text-lg font-semibold text-green-800 mb-2">Public Charging</div>
                    <div className="text-green-600">DC fast charging network available at service centers.</div>
                  </div>
                </div>

                <div className="text-muted-foreground">
                  <p className="mb-4">All vehicles come with comprehensive charging solutions:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Level 2 home charger included</li>
                    <li>Mobile charging service available</li>
                    <li>Access to nationwide charging network</li>
                    <li>24/7 charging support hotline</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CreditCard className="mr-3 h-6 w-6 text-primary" />
                    Standard Financing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">8.5%</div>
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-semibold">Duration:</span> Up to 7 years</div>
                    <div><span className="font-semibold">Down Payment:</span> 20%</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Flexible terms
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Competitive rates
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Quick approval
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Payment
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                    Premium Financing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">6.9%</div>
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-semibold">Duration:</span> Up to 5 years</div>
                    <div><span className="font-semibold">Down Payment:</span> 15%</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Lower rates
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Priority service
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Extended warranty
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Payment
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-primary" />
                    Lease to Own
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">9.2%</div>
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-semibold">Duration:</span> Up to 4 years</div>
                    <div><span className="font-semibold">Down Payment:</span> 10%</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Lower monthly payments
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Upgrade options
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Maintenance included
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Payment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive the {vehicle.name}?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take the next step towards sustainable mobility. Schedule a test drive, explore financing options,
              or get a personalized quote for your {vehicle.name} today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-bold mb-2">Test Drive</div>
                <div className="text-sm text-muted-foreground mb-3">Experience the {vehicle.name} firsthand</div>
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
                  Order Your {vehicle.name}
                </Button>
              </Link>
              <Link to="/vehicles">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                  <Settings className="mr-2 h-5 w-5" />
                  Compare Other Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VehicleDetail;