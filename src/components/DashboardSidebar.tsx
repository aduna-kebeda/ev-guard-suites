import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Package,
  Wrench,
  User,
  FileText,
  MessageSquare,
  Bell,
  LogOut,
  Zap,
  Users,
  Settings
} from 'lucide-react';

interface DashboardSidebarProps {
  onNavigate?: () => void;
  className?: string;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ onNavigate, className }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isAdmin = user?.role === 'admin';

  const customerNavigation = [
    { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'My Orders', href: '/portal/orders', icon: Package },
    { name: 'Service', href: '/portal/service', icon: Wrench },
    { name: 'Documents', href: '/portal/documents', icon: FileText },
    { name: 'Messages', href: '/portal/messages', icon: MessageSquare },
    { name: 'Notifications', href: '/portal/notifications', icon: Bell },
    { name: 'Profile', href: '/portal/profile', icon: User },
  ];

  const adminNavigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Orders', href: '/admin/orders', icon: Package },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Service', href: '/admin/service', icon: Wrench },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const navigation = isAdmin ? adminNavigation : customerNavigation;

  return (
    <div
      className={cn(
        "flex h-full w-full max-w-xs flex-col border-r border-white/20 bg-white/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/5 dark:bg-slate-900/80 dark:border-slate-700/50 lg:w-72 xl:w-80",
        "shadow-2xl shadow-black/10",
        className
      )}
    >
      <div className="flex h-20 items-center border-b border-white/20 px-6 dark:border-slate-700/50">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="rounded-xl bg-gradient-to-br from-primary to-accent p-2 shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-lg">
            YouGuard Drive
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 group',
                  isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                    : 'text-muted-foreground hover:bg-white/20 dark:hover:bg-slate-700/50 hover:text-foreground hover:scale-102 hover:shadow-md'
                )}
                onClick={onNavigate}
              >
                <item.icon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/20 p-4 dark:border-slate-700/50">
        <div className="mb-4 rounded-xl bg-white/20 dark:bg-slate-700/50 p-4 backdrop-blur-sm shadow-lg">
          <div className="text-sm font-medium text-foreground">{user?.name}</div>
          <div className="text-xs text-muted-foreground">{user?.email}</div>
          <div className="mt-1 text-xs text-primary capitalize font-semibold">{user?.role}</div>
        </div>
        <Button
          variant="outline"
          className="w-full rounded-xl border-white/30 dark:border-slate-600/50 bg-white/10 dark:bg-slate-800/50 hover:bg-white/20 dark:hover:bg-slate-700/70 transition-all duration-200 hover:scale-105 shadow-md"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
