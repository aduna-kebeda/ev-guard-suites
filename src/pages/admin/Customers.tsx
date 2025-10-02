import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/DashboardLayout';
import { Search, Eye, Mail, Phone, User } from 'lucide-react';

const AdminCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+251 91 234 5678',
      joinDate: '2023-06-15',
      orders: 2,
      totalSpent: '4,300,000 ETB',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+251 91 345 6789',
      joinDate: '2023-08-20',
      orders: 1,
      totalSpent: '1,800,000 ETB',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+251 91 456 7890',
      joinDate: '2023-05-10',
      orders: 3,
      totalSpent: '7,500,000 ETB',
      status: 'VIP'
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout
      title="Customer Management"
      description="View and manage customer accounts"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="mb-2 text-sm text-muted-foreground font-medium">Total Customers</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{customers.length}</div>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="mb-2 text-sm text-muted-foreground font-medium">Active</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{customers.filter(c => c.status === 'Active').length}</div>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="mb-2 text-sm text-muted-foreground font-medium">VIP Members</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{customers.filter(c => c.status === 'VIP').length}</div>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-900/20 dark:to-yellow-900/20 backdrop-blur-xl shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="relative pt-6">
            <div className="mb-2 text-sm text-muted-foreground font-medium">New This Month</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">12</div>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
          </CardContent>
        </Card>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          placeholder="Search customers by name or email..."
          className="pl-12 h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
              <User className="h-6 w-6 text-primary" />
            </div>
            All Customers ({filteredCustomers.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="group/customer rounded-2xl border border-white/20 dark:border-slate-700/50 bg-gradient-to-r from-white/30 to-white/10 dark:from-slate-800/30 dark:to-slate-900/10 p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div className="flex flex-1 items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg group-hover/customer:scale-110 transition-transform duration-200">
                      <User className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{customer.name}</div>
                        <Badge variant={customer.status === 'VIP' ? 'default' : 'secondary'} className="px-3 py-1 text-sm font-medium">
                          {customer.status}
                        </Badge>
                      </div>
                      <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="mr-2 h-4 w-4 text-primary/60" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="mr-2 h-4 w-4 text-primary/60" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground font-medium">Joined:</span>
                          <span className="text-foreground">{customer.joinDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground font-medium">Orders:</span>
                          <span className="font-semibold text-primary">{customer.orders}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{customer.totalSpent}</div>
                    <div className="text-sm text-muted-foreground font-medium">Total Spent</div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/20 dark:border-slate-700/50 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 min-[420px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Eye className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 min-[420px]:flex-none bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
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

export default AdminCustomers;
