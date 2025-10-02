import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import DashboardLayout from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import {
  MessageSquare,
  Send,
  Search,
  User,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Reply
} from 'lucide-react';

const AdminMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [replyText, setReplyText] = useState('');

  const messages = [
    {
      id: 1,
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '+251 91 234 5678',
      subject: 'Service Inquiry - Brake Inspection',
      message: 'Hi, I need to schedule a brake inspection for my EcoSport Sedan. Can you please let me know the availability and cost?',
      timestamp: '2024-01-25 10:30 AM',
      status: 'Unread',
      priority: 'Medium',
      replies: [
        {
          from: 'Admin',
          message: 'Thank you for your inquiry. We can schedule your brake inspection for tomorrow at 2 PM. The cost will be approximately 8,500 ETB.',
          timestamp: '2024-01-25 11:15 AM'
        }
      ]
    },
    {
      id: 2,
      customer: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+251 91 345 6789',
      subject: 'Order Status Update',
      message: 'I placed an order for the Urban Compact last week. Can you provide an update on when it will be delivered?',
      timestamp: '2024-01-24 3:45 PM',
      status: 'Replied',
      priority: 'High',
      replies: [
        {
          from: 'Admin',
          message: 'Your order is currently in transit and should arrive within 2-3 business days. You will receive a tracking update via email.',
          timestamp: '2024-01-24 4:20 PM'
        }
      ]
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+251 91 456 7890',
      subject: 'Warranty Claim',
      message: 'I purchased a Family SUV 6 months ago and experiencing issues with the battery. Is this covered under warranty?',
      timestamp: '2024-01-23 9:15 AM',
      status: 'Replied',
      priority: 'High',
      replies: [
        {
          from: 'Admin',
          message: 'Yes, battery issues within the first year are covered under warranty. Please bring your vehicle to our service center tomorrow for inspection.',
          timestamp: '2024-01-23 10:30 AM'
        }
      ]
    },
  ];

  const stats = [
    { title: 'Total Messages', value: '156', change: '+12%', icon: MessageSquare, color: 'text-blue-600' },
    { title: 'Unread', value: '23', change: '-5%', icon: AlertCircle, color: 'text-red-600' },
    { title: 'Replied Today', value: '18', change: '+8%', icon: CheckCircle2, color: 'text-green-600' },
    { title: 'Avg Response Time', value: '2.4 hrs', change: '-15%', icon: Clock, color: 'text-purple-600' },
  ];

  const filteredMessages = messages.filter(message =>
    message.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Unread':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Replied':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleSendReply = () => {
    if (replyText.trim() && selectedMessage !== null) {
      // In a real app, this would send the reply to the backend
      console.log('Sending reply:', replyText);
      setReplyText('');
    }
  };

  return (
    <DashboardLayout
      title="Message Center"
      description="Manage customer inquiries and communications"
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
                <span className="ml-1 text-muted-foreground">vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          placeholder="Search messages by customer, subject, or content..."
          className="pl-12 h-12 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              Messages ({filteredMessages.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-3">
              {filteredMessages.map((message, index) => (
                <div
                  key={message.id}
                  className={cn(
                    'group/message cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:scale-102',
                    selectedMessage === index
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 dark:hover:bg-slate-700/50'
                  )}
                  onClick={() => setSelectedMessage(index)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 border border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-sm font-semibold">
                        {message.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-foreground truncate">{message.customer}</p>
                        <span className={cn('text-xs px-2 py-1 rounded-full font-medium', getStatusColor(message.status))}>
                          {message.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground mb-1 truncate">{message.subject}</p>
                      <p className="text-xs text-muted-foreground truncate">{message.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        {message.priority === 'High' && (
                          <AlertCircle className={cn('h-4 w-4', getPriorityColor(message.priority))} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5 lg:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              {selectedMessage !== null ? filteredMessages[selectedMessage]?.subject : 'Select a message'}
            </CardTitle>
            {selectedMessage !== null && (
              <CardDescription>
                From {filteredMessages[selectedMessage]?.customer} • {filteredMessages[selectedMessage]?.timestamp}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="relative">
            {selectedMessage !== null ? (
              <div className="space-y-6">
                <div className="rounded-xl bg-white/50 dark:bg-slate-800/50 p-4 border border-white/20 dark:border-slate-700/50">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="h-8 w-8 border border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-semibold">
                        {filteredMessages[selectedMessage].customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{filteredMessages[selectedMessage].customer}</p>
                      <p className="text-sm text-muted-foreground">{filteredMessages[selectedMessage].email}</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{filteredMessages[selectedMessage].message}</p>
                </div>

                {filteredMessages[selectedMessage].replies.map((reply, index) => (
                  <div key={index} className="rounded-xl bg-primary/5 dark:bg-primary/10 p-4 border border-primary/20">
                    <div className="flex items-start gap-3 mb-2">
                      <Avatar className="h-8 w-8 border border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">
                          AD
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-primary">{reply.from}</p>
                        <p className="text-xs text-muted-foreground">{reply.timestamp}</p>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">{reply.message}</p>
                  </div>
                ))}

                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="min-h-[100px] bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={handleSendReply}
                      disabled={!replyText.trim()}
                      className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Reply
                    </Button>
                    <Button variant="outline" className="bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl">
                      <Reply className="mr-2 h-4 w-4" />
                      Quick Reply
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Select a message</h3>
                <p className="text-muted-foreground">Choose a message from the list to view its content and reply.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminMessages;