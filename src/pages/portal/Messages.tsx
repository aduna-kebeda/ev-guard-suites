import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/DashboardLayout';
import { MessageSquare, Send } from 'lucide-react';

const Messages = () => {
  return (
    <DashboardLayout
      title="Messages"
      description="Chat with support and sales team"
    >
      <Card className="flex h-[60vh] min-h-[420px] flex-col border-none bg-card/80 shadow-lg shadow-primary/5">
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Support Chat</CardTitle>
              <p className="text-sm text-muted-foreground">We're here to help with anything you need</p>
            </div>
          </div>
          <Button variant="outline" size="sm">New Message</Button>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex-1 space-y-4 overflow-y-auto rounded-xl border border-border/60 bg-background/40 p-4">
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl bg-muted px-4 py-3 shadow-sm">
                <div className="mb-1 text-sm font-semibold">Support Team</div>
                <div className="text-sm text-muted-foreground">
                  Hello! How can we help you today?
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-md">
                <div className="text-sm">Hi! I would like to check the status of my order.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-background/40 p-3 sm:flex-row">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button className="gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Messages;
