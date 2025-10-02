import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import DashboardLayout from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import {
  Wrench,
  Calendar,
  Clock,
  User,
  Car,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Eye
} from 'lucide-react';

const AdminService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const serviceRequests = [
    {
      id: 'SR-2024-001',
      customer: 'John Doe',
      vehicle: 'EcoSport Sedan',
      serviceType: 'Annual Maintenance',
      status: 'Scheduled',
      priority: 'Medium',
      date: '2024-01-25',
      technician: 'Mike Johnson',
      estimatedCost: '15,000 ETB'
    },
    {
      id: 'SR-2024-002',
      customer: 'Jane Smith',
      vehicle: 'Urban Compact',
      serviceType: 'Brake Inspection',
      status: 'In Progress',
      priority: 'High',
      date: '2024-01-20',
      technician: 'Sarah Davis',
      estimatedCost: '8,500 ETB'
    },
    {
      id: 'SR-2024-003',
      customer: 'Bob Johnson',
      vehicle: 'Family SUV',
      serviceType: 'Tire Replacement',
      status: 'Completed',
      priority: 'Low',
      date: '2024-01-15',
      technician: 'Tom Wilson',
      estimatedCost: '12,000 ETB'
    },
  ];

  const stats = [
    { title: 'Total Requests', value: '47', change: '+12%', icon: Wrench, color: 'text-blue-600' },
    { title: 'Scheduled', value: '18', change: '+5%', icon: Calendar, color: 'text-green-600' },
    { title: 'In Progress', value: '12', change: '+2%', icon: Clock, color: 'text-orange-600' },
    { title: 'Completed Today', value: '8', change: '+15%', icon: CheckCircle2, color: 'text-purple-600' },
  ];

  const filteredRequests = serviceRequests.filter(request => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.serviceType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'default';
      case 'In Progress':
        return 'secondary';
      case 'Scheduled':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout
      title="Service Management"
      description="Manage service requests and maintenance schedules"
      actions={
        <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-200 shadow-lg">
          <Plus className="mr-2 h-4 w-4" />
          New Service Request
        </Button>
      }
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
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500 font-semibold">{stat.change}</span>
                <span className="ml-1 text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search service requests..."
            className="pl-12 h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[200px] h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-white/20 dark:border-slate-700/50">
            <SelectItem value="all" className="hover:bg-primary/10">All Status</SelectItem>
            <SelectItem value="Scheduled" className="hover:bg-primary/10">Scheduled</SelectItem>
            <SelectItem value="In Progress" className="hover:bg-primary/10">In Progress</SelectItem>
            <SelectItem value="Completed" className="hover:bg-primary/10">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            Service Requests ({filteredRequests.length})
          </CardTitle>
          <CardDescription>Manage and track all service requests</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            {filteredRequests.map((request) => (
              <div key={request.id} className="group/request rounded-2xl border border-white/20 dark:border-slate-700/50 bg-gradient-to-r from-white/30 to-white/10 dark:from-slate-800/30 dark:to-slate-900/10 p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{request.id}</div>
                      <Badge variant={getStatusColor(request.status)} className="px-3 py-1 text-sm font-medium">
                        {request.status}
                      </Badge>
                      <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', getPriorityColor(request.priority))}>
                        {request.priority} Priority
                      </span>
                    </div>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary/60" />
                        <span className="text-muted-foreground font-medium">Customer:</span>
                        <span className="font-semibold text-foreground">{request.customer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-primary/60" />
                        <span className="text-muted-foreground font-medium">Vehicle:</span>
                        <span className="font-semibold text-foreground">{request.vehicle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-primary/60" />
                        <span className="text-muted-foreground font-medium">Service:</span>
                        <span className="font-semibold text-foreground">{request.serviceType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary/60" />
                        <span className="text-muted-foreground font-medium">Date:</span>
                        <span className="font-semibold text-foreground">{request.date}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <User className="h-4 w-4 text-primary/60" />
                      <span className="text-muted-foreground font-medium">Technician:</span>
                      <span className="font-semibold text-foreground">{request.technician}</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{request.estimatedCost}</div>
                    <div className="text-sm text-muted-foreground font-medium">Estimated Cost</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" className="flex-1 min-[480px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 min-[480px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Wrench className="mr-2 h-4 w-4" />
                    Update Status
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 min-[480px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminService;