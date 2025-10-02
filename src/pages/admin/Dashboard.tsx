import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import {
  Package,
  Users,
  Wrench,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Orders', value: '156', change: '+12%', icon: Package, color: 'text-primary' },
    { title: 'Active Customers', value: '423', change: '+8%', icon: Users, color: 'text-secondary' },
    { title: 'Pending Services', value: '23', change: '+3', icon: Wrench, color: 'text-warning' },
    { title: 'Monthly Revenue', value: '12.5M ETB', change: '+15%', icon: DollarSign, color: 'text-success' },
  ];

  const recentOrders = [
    { id: 'ORD-2024-156', customer: 'John Doe', vehicle: 'EcoSport Sedan', status: 'Processing', amount: '2.5M ETB' },
    { id: 'ORD-2024-155', customer: 'Jane Smith', vehicle: 'Urban Compact', status: 'In Transit', amount: '1.8M ETB' },
    { id: 'ORD-2024-154', customer: 'Bob Johnson', vehicle: 'Family SUV', status: 'Delivered', amount: '3.2M ETB' },
  ];

  const pendingActions = [
    { type: 'Order Approval', count: 5, icon: Package },
    { type: 'Service Requests', count: 8, icon: Wrench },
    { type: 'Customer Inquiries', count: 12, icon: Users },
  ];

  return (
    <DashboardLayout
      title="Admin Dashboard"
      description="Overview of business operations"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative pt-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{stat.value}</p>
                </div>
                <div className={cn('rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300', stat.color)}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500 font-semibold">{stat.change}</span>
                <span className="ml-1 text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Package className="h-5 w-5 text-primary" />
              Recent Orders
            </CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="group/order flex flex-col gap-4 rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/5 dark:bg-slate-800/20 p-4 shadow-sm hover:bg-white/10 dark:hover:bg-slate-700/30 transition-all duration-200 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{order.id}</div>
                    <div className="text-sm text-muted-foreground">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">{order.vehicle}</div>
                  </div>
                  <div className="text-left md:text-right">
                    <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="mb-2 md:mb-0">
                      {order.status}
                    </Badge>
                    <div className="text-sm font-semibold text-primary">{order.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Wrench className="h-5 w-5 text-primary" />
              Pending Actions
            </CardTitle>
            <CardDescription>Items requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-4">
              {pendingActions.map((action, index) => (
                <div key={index} className="group/action flex flex-col gap-4 rounded-xl border border-white/20 dark:border-slate-700/50 bg-gradient-to-r from-orange-50/50 to-yellow-50/50 dark:from-orange-900/20 dark:to-yellow-900/20 p-4 shadow-sm hover:shadow-md transition-all duration-200 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-800/50 dark:to-yellow-800/50 p-3 shadow-lg group-hover/action:scale-110 transition-transform duration-200">
                      <action.icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{action.type}</div>
                      <div className="text-sm text-muted-foreground">{action.count} pending</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300">
                    {action.count}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground font-medium">Order Completion</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">94%</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800/50 dark:to-emerald-800/50 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4 h-3 w-full rounded-full bg-muted/50 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000 ease-out" style={{ width: '94%' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground font-medium">Avg. Response Time</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">2.4 hrs</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800/50 dark:to-indigo-800/50 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium">
              15% faster than last month
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 xl:col-span-1 md:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground font-medium">Customer Satisfaction</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.8/5.0</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Based on 245 reviews
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
