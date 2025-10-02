import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/DashboardLayout';
import { Search, Eye, Download, Package } from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: 'ORD-2024-001',
      vehicle: 'EcoSport Sedan',
      orderDate: '2024-01-15',
      status: 'In Transit',
      estimatedDelivery: '2024-02-28',
      progress: 75,
      amount: '2,500,000 ETB',
      stages: [
        { name: 'Order Placed', completed: true, date: '2024-01-15' },
        { name: 'Processing', completed: true, date: '2024-01-20' },
        { name: 'Shipping', completed: true, date: '2024-02-01' },
        { name: 'In Transit', completed: false, date: '' },
        { name: 'Delivered', completed: false, date: '' }
      ]
    },
    {
      id: 'ORD-2023-089',
      vehicle: 'Urban Compact',
      orderDate: '2023-12-20',
      status: 'Delivered',
      estimatedDelivery: '2024-01-15',
      progress: 100,
      amount: '1,800,000 ETB',
      stages: [
        { name: 'Order Placed', completed: true, date: '2023-12-20' },
        { name: 'Processing', completed: true, date: '2023-12-25' },
        { name: 'Shipping', completed: true, date: '2024-01-05' },
        { name: 'In Transit', completed: true, date: '2024-01-10' },
        { name: 'Delivered', completed: true, date: '2024-01-15' }
      ]
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      title="My Orders"
      description="Track and manage your vehicle orders"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          placeholder="Search orders by ID or vehicle..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="border-none bg-card/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex flex-wrap items-center gap-3 text-xl">
                    {order.vehicle}
                    <Badge variant={getStatusColor(order.status)}>{order.status}</Badge>
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Order ID: {order.id} • Placed on {order.orderDate}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-2xl font-bold">{order.amount}</div>
                  <div className="text-sm text-muted-foreground">Total Amount</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-muted-foreground">Order Progress</span>
                  <span className="font-semibold">{order.progress}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-muted">
                  <div
                    className="h-3 rounded-full bg-primary transition-all"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid gap-3 border-t pt-4 min-[520px]:grid-cols-5">
                {order.stages.map((stage, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`h-3 w-3 rounded-full ${stage.completed ? 'bg-primary' : 'bg-muted'}`} />
                    <div className="mt-2 text-center text-xs font-medium">{stage.name}</div>
                    {stage.date && <div className="mt-1 text-xs text-muted-foreground">{stage.date}</div>}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-between gap-3 border-t pt-4">
                <Link to={`/portal/orders/${order.id}`} className="flex-1 min-[520px]:flex-none">
                  <Button variant="outline" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1 min-[520px]:flex-none">
                  <Download className="mr-2 h-4 w-4" />
                  Invoice
                </Button>
                <Link to="/portal/documents" className="flex-1 min-[520px]:flex-none">
                  <Button variant="outline" className="w-full">
                    <Package className="mr-2 h-4 w-4" />
                    Documents
                  </Button>
                </Link>
              </div>

              {order.status === 'In Transit' && (
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <Package className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Estimated Delivery</div>
                      <div className="text-sm text-muted-foreground">
                        Your vehicle is expected to arrive by {order.estimatedDelivery}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Orders;
