import { ReactNode, useMemo, useState } from 'react';
import { Menu, Bell, Search, Zap } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

const DashboardLayout = ({ title, description, actions, children }: DashboardLayoutProps) => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const initials = useMemo(() => {
    if (!user?.name) return 'YG';
    const parts = user.name.trim().split(/\s+/).slice(0, 2);
    return parts.map((part) => part.charAt(0).toUpperCase()).join('');
  }, [user?.name]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="fixed left-0 top-0 z-40 hidden h-screen border-r border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:bg-slate-900/80 dark:border-slate-700/50 lg:flex lg:w-72 xl:w-80">
        <DashboardSidebar className="h-screen" />
      </div>

      <div className="flex flex-1 flex-col lg:pl-72 xl:pl-80">
        <header className="sticky top-0 z-30 border-b border-white/20 bg-white/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/5 dark:bg-slate-900/80 dark:border-slate-700/50 shadow-xl shadow-black/5">
          <div className="flex h-20 items-center gap-4 px-6 sm:px-8 lg:px-10 py-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] max-w-xs p-0 sm:max-w-sm">
                <DashboardSidebar className="h-full max-w-none" onNavigate={() => setSidebarOpen(false)} />
              </SheetContent>
            </Sheet>

            <div className="flex flex-col justify-center min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-primary/80 flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Control Center
              </p>
              <h1 className="text-lg font-semibold text-foreground md:text-2xl truncate">{title}</h1>
              {description ? (
                <p className="text-sm text-muted-foreground truncate">{description}</p>
              ) : null}
            </div>

            <div className="flex-1 max-w-md mx-6 hidden sm:block">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search dashboards, orders, customers..."
                  className="pl-9 bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 focus:border-primary/60 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-200"
                />
              </div>
            </div>

            <div className={cn('flex items-center gap-4', !actions && 'ml-auto')}>
              <Button variant="ghost" size="icon" className="relative hover:bg-white/20 dark:hover:bg-slate-700/50 rounded-xl transition-all duration-200 hover:scale-105">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse shadow-lg"></span>
                <span className="sr-only">Notifications</span>
              </Button>
              {actions}
              <Avatar className="h-10 w-10 border-2 border-white/30 dark:border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 ring-2 ring-transparent hover:ring-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/20 text-sm font-semibold uppercase tracking-wide text-primary dark:from-primary/50 dark:to-accent/30">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-transparent via-white/5 to-white/10 dark:via-slate-900/5 dark:to-slate-900/10">
          <div className="container mx-auto flex w-full flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10 xl:max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
