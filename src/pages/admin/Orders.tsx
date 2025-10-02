import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardLayout from '@/components/DashboardLayout';
import { Search, Eye, Edit, MoreVertical } from 'lucide-react';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2024-156',
      customer: 'John Doe',
      email: 'john@example.com',
      vehicle: 'EcoSport Sedan',
      orderDate: '2024-01-25',
      status: 'Processing',
      amount: '2,500,000 ETB',
      progress: 25
    },
    {
      id: 'ORD-2024-155',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      vehicle: 'Urban Compact',
      orderDate: '2024-01-20',
      status: 'In Transit',
      amount: '1,800,000 ETB',
      progress: 75
    },
    {
      id: 'ORD-2024-154',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      vehicle: 'Family SUV',
      orderDate: '2024-01-15',
      status: 'Delivered',
      amount: '3,200,000 ETB',
      progress: 100
    },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'In Transit':
        return 'secondary';
      case 'Processing':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <DashboardLayout
      title="Order Management"
      description="Manage and track customer orders"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search orders by ID, customer, or vehicle..."
            className="pl-12 h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[220px] h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-white/20 dark:border-slate-700/50">
            <SelectItem value="all" className="hover:bg-primary/10">All Status</SelectItem>
            <SelectItem value="Processing" className="hover:bg-primary/10">Processing</SelectItem>
            <SelectItem value="In Transit" className="hover:bg-primary/10">In Transit</SelectItem>
            <SelectItem value="Delivered" className="hover:bg-primary/10">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
              <Search className="h-6 w-6 text-primary" />
            </div>
            All Orders ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div key={order.id} className="group/order rounded-2xl border border-white/20 dark:border-slate-700/50 bg-gradient-to-r from-white/30 to-white/10 dark:from-slate-800/30 dark:to-slate-900/10 p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{order.id}</div>
                      <Badge variant={getStatusColor(order.status)} className="px-3 py-1 text-sm font-medium">
                        {order.status}
                      </Badge>
                    </div>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground font-medium">Customer:</span>
                        <span className="font-semibold text-foreground">{order.customer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground font-medium">Vehicle:</span>
                        <span className="font-semibold text-foreground">{order.vehicle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground font-medium">Email:</span>
                        <span className="text-foreground">{order.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground font-medium">Order Date:</span>
                        <span className="text-foreground">{order.orderDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{order.amount}</div>
                    <div className="text-sm text-muted-foreground font-medium">Total Amount</div>
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="text-muted-foreground font-medium">Progress</span>
                    <span className="font-bold text-primary">{order.progress}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-muted/50 overflow-hidden shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" className="flex-1 min-[480px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 min-[480px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Edit className="mr-2 h-4 w-4" />
                    Update Status
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 min-[480px]:flex-none md:flex-none md:w-auto bg-white/30 dark:bg-slate-700/30 hover:bg-white/50 dark:hover:bg-slate-600/50 rounded-xl transition-all duration-200 hover:scale-105">
                    <MoreVertical className="h-4 w-4" />
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

export default AdminOrders;
