import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Clock, CheckCircle2, Wrench, Shield, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Service = () => {
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Annual Maintenance',
      date: '2024-02-15',
      time: '10:00 AM',
      vehicle: 'EcoSport Sedan',
      status: 'Confirmed'
    }
  ];

  const serviceHistory = [
    {
      id: 1,
      type: 'Battery Check',
      date: '2023-12-10',
      vehicle: 'EcoSport Sedan',
      cost: '5,000 ETB',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'Tire Rotation',
      date: '2023-09-15',
      vehicle: 'EcoSport Sedan',
      cost: '3,000 ETB',
      status: 'Completed'
    }
  ];

  const warranty = {
    vehicle: 'EcoSport Sedan',
    vin: 'YGD2024EV001234',
    purchaseDate: '2023-06-15',
    expiryDate: '2028-06-15',
    coverage: [
      { item: 'Battery', period: '5 years / 100,000 km', status: 'Active' },
      { item: 'Motor & Drivetrain', period: '5 years / 150,000 km', status: 'Active' },
      { item: 'Electronics', period: '3 years / 60,000 km', status: 'Active' }
    ]
  };

  const handleBookService = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: 'Service Booked',
        description: 'Your service appointment has been confirmed.',
      });
    }, 1000);
  };

  return (
    <DashboardLayout
      title="Service & Warranty"
      description="Manage your vehicle maintenance and warranty"
    >
      <Tabs defaultValue="appointments" className="space-y-6">
        <TabsList className="flex w-full flex-wrap justify-start gap-2 rounded-xl bg-muted/40 p-1">
          <TabsTrigger value="appointments" className="flex-1 min-w-[140px]">Appointments</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 min-w-[140px]">Service History</TabsTrigger>
          <TabsTrigger value="warranty" className="flex-1 min-w-[140px]">Warranty Info</TabsTrigger>
          <TabsTrigger value="book" className="flex-1 min-w-[140px]">Book Service</TabsTrigger>
        </TabsList>

        <TabsContent value="appointments" className="space-y-4">
          <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled service appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="rounded-xl border border-border/60 bg-background/40 p-4 shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold">{appointment.type}</div>
                      <div className="text-sm text-muted-foreground">{appointment.vehicle}</div>
                    </div>
                    <Badge>{appointment.status}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button variant="outline" size="sm">Cancel</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle>Service History</CardTitle>
              <CardDescription>Complete record of all services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {serviceHistory.map((service) => (
                  <div key={service.id} className="flex flex-col gap-4 border-b pb-3 last:border-0 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" />
                      <div>
                        <div className="font-semibold">{service.type}</div>
                        <div className="text-sm text-muted-foreground">{service.vehicle}</div>
                        <div className="text-sm text-muted-foreground">{service.date}</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="font-semibold">{service.cost}</div>
                      <Badge variant="outline" className="mt-1">{service.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warranty" className="space-y-4">
          <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle>Warranty Information</CardTitle>
              <CardDescription>Your vehicle warranty details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-1 text-sm text-muted-foreground">Vehicle</div>
                  <div className="font-semibold">{warranty.vehicle}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-muted-foreground">VIN</div>
                  <div className="font-semibold">{warranty.vin}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-muted-foreground">Purchase Date</div>
                  <div className="font-semibold">{warranty.purchaseDate}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-muted-foreground">Warranty Expires</div>
                  <div className="font-semibold">{warranty.expiryDate}</div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-4 font-semibold">Coverage Details</h3>
                <div className="space-y-3">
                  {warranty.coverage.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-lg border border-border/60 bg-background/40 p-3 shadow-sm md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">{item.item}</div>
                          <div className="text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit bg-success/10 text-success border-success/20">
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="book">
          <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle>Book a Service</CardTitle>
              <CardDescription>Schedule your next service appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookService} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">EcoSport Sedan - YGD2024EV001234</SelectItem>
                      <SelectItem value="2">Urban Compact - YGD2023EV005678</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">Annual Maintenance</SelectItem>
                      <SelectItem value="battery">Battery Service</SelectItem>
                      <SelectItem value="tires">Tire Service</SelectItem>
                      <SelectItem value="inspection">General Inspection</SelectItem>
                      <SelectItem value="repair">Repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input type="date" id="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9">9:00 AM</SelectItem>
                        <SelectItem value="10">10:00 AM</SelectItem>
                        <SelectItem value="11">11:00 AM</SelectItem>
                        <SelectItem value="14">2:00 PM</SelectItem>
                        <SelectItem value="15">3:00 PM</SelectItem>
                        <SelectItem value="16">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific concerns or requests..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isBooking}>
                  <Plus className="mr-2 h-4 w-4" />
                  {isBooking ? 'Booking...' : 'Book Appointment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Service;
