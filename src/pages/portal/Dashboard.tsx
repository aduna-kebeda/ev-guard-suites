import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import {
  Package,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calendar,
  FileText,
  AlertCircle
} from 'lucide-react';

const CustomerDashboard = () => {
  const stats = [
    { title: 'Active Orders', value: '2', icon: Package, color: 'text-primary' },
    { title: 'Pending Actions', value: '1', icon: AlertCircle, color: 'text-warning' },
    { title: 'Completed Orders', value: '3', icon: CheckCircle2, color: 'text-success' },
    { title: 'Next Service', value: '15 days', icon: Clock, color: 'text-secondary' },
  ];

  const recentOrders = [
    {
      id: 'ORD-2024-001',
      vehicle: 'EcoSport Sedan',
      status: 'In Transit',
      date: '2024-01-15',
      progress: 75
    },
    {
      id: 'ORD-2023-089',
      vehicle: 'Urban Compact',
      status: 'Delivered',
      date: '2023-12-20',
      progress: 100
    }
  ];

  const upcomingServices = [
    {
      type: 'Annual Maintenance',
      date: '2024-02-15',
      vehicle: 'EcoSport Sedan'
    }
  ];

  return (
    <DashboardLayout
      title="Dashboard"
      description="Welcome back! Here's an overview of your account."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-2 text-sm text-muted-foreground font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{stat.value}</p>
                </div>
                <div className={cn('rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300', stat.color)}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Package className="h-5 w-5 text-primary" />
                Recent Orders
              </CardTitle>
              <Link to="/portal/orders">
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-white/20 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 p-4 shadow-sm hover:bg-white/40 dark:hover:bg-slate-700/40 transition-all duration-200 backdrop-blur-sm">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-foreground">{order.vehicle}</div>
                    <div className="text-sm text-muted-foreground">{order.id}</div>
                  </div>
                  <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="px-3 py-1">
                    {order.status}
                  </Badge>
                </div>
                <div className="mt-3 h-3 w-full rounded-full bg-muted/50 overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground font-medium">Progress: {order.progress}%</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Services
              </CardTitle>
              <Link to="/portal/service">
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-white/20 dark:hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                  Book Service
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-4">
            {upcomingServices.map((service, index) => (
              <div key={index} className="rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 p-4 shadow-sm hover:bg-white/40 dark:hover:bg-slate-700/40 transition-all duration-200 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 p-2 shadow-sm">
                    <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{service.type}</div>
                    <div className="text-sm text-muted-foreground">{service.vehicle}</div>
                    <div className="mt-1 text-sm text-muted-foreground font-medium">Scheduled: {service.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <Link to="/portal/orders">
          <Card className="group cursor-pointer relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative pt-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800/50 dark:to-indigo-800/50 p-3 w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 font-bold text-lg text-foreground">Track Orders</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                View and track all your vehicle orders
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/portal/documents">
          <Card className="group cursor-pointer relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative pt-6">
              <div className="rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800/50 dark:to-emerald-800/50 p-3 w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 font-bold text-lg text-foreground">Documents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access your vehicle documents and warranty
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/portal/service">
          <Card className="group cursor-pointer relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 xl:col-span-1 md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative pt-6">
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 p-3 w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 font-bold text-lg text-foreground">Book Service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Schedule maintenance and repairs
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
