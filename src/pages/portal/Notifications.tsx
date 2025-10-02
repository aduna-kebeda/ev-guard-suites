import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/DashboardLayout';
import { Bell, Package, Wrench, CheckCircle2 } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      icon: Package,
      title: 'Order Update',
      message: 'Your order ORD-2024-001 is now in transit',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'service',
      icon: Wrench,
      title: 'Service Reminder',
      message: 'Annual maintenance due in 15 days',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'order',
      icon: CheckCircle2,
      title: 'Order Delivered',
      message: 'Your order ORD-2023-089 has been delivered',
      time: '3 days ago',
      read: true
    },
  ];

  return (
    <DashboardLayout
      title="Notifications"
      description="Stay updated with your orders and services"
      actions={<Button variant="outline">Mark all as read</Button>}
    >
      <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>All Notifications</CardTitle>
              <p className="text-sm text-muted-foreground">Latest updates about your orders and services</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex flex-col gap-3 rounded-xl border p-4 transition md:flex-row md:items-start ${
                  !notification.read ? 'border-primary/30 bg-primary/5 shadow-md shadow-primary/10' : 'border-border/60 bg-background/40'
                }`}
              >
                <div className={`w-fit rounded-full p-2 ${!notification.read ? 'bg-primary/10' : 'bg-muted'}`}>
                  <notification.icon className={`h-5 w-5 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <div className="font-semibold">{notification.title}</div>
                    {!notification.read && <Badge variant="default">New</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Notifications;
