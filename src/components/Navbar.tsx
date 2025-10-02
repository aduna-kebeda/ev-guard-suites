import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Zap, User, ChevronDown, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  // const { theme, setTheme } = useTheme(); // Uncomment when theme context is available

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-background/80 backdrop-blur-xl border-b border-border/30'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    YouGuard Drive
                  </span>
                  <span className="text-xs text-muted-foreground -mt-1 font-medium">Electric Vehicles</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActiveLink(item.href)
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full ${
                      isActiveLink(item.href) ? 'w-full' : ''
                    }`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-1">
              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="hidden md:flex items-center ml-2 space-x-2">
                   <Link
                    to={user?.role === 'admin' ? '/admin/dashboard' : '/portal/dashboard'}
                  >
                    <Button variant="ghost" className={`font-medium transition-all duration-200 ${
                      location.pathname.includes('dashboard')
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-primary hover:bg-muted/50'
                    }`}>
                      Dashboard
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 h-auto hover:bg-muted/50 transition-colors hover:scale-105">
                        <Avatar className="h-9 w-9 ring-2 ring-primary/20">
                          <AvatarImage src={undefined} />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold">
                            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-semibold">{user?.name || 'User'}</span>
                          <span className="text-xs text-muted-foreground capitalize">{user?.role}</span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64">
                      <DropdownMenuLabel className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={undefined} />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-sm">
                            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user?.name || 'User'}</div>
                          <div className="text-sm text-muted-foreground">{user?.email}</div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/portal/profile" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          Profile Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/portal/orders" className="flex items-center">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          My Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                        <X className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-2 ml-2">
                  <Link to="/auth/login">
                    <Button variant="ghost" className="hover:bg-muted/50 transition-colors hover:scale-105">Login</Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-muted/50 transition-colors hover:scale-105"
                  aria-label="Toggle mobile menu"
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isOpen ? 'rotate-45 top-3' : 'top-1'
                    }`} />
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                    <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isOpen ? '-rotate-45 top-3' : 'top-5'
                    }`} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-2 border-t border-border/50 bg-background/95 backdrop-blur-xl">
           

            {isAuthenticated ? (
              <div className="border-t border-border/50 pt-4 space-y-3">
                <div className="flex items-center space-x-3 px-4 py-3 bg-muted/30 rounded-lg">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={undefined} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                      {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                    </AvatarFallback>
                    </Avatar>
                  <div>
                    <div className="font-semibold">{user?.name || 'User'}</div>
                    <div className="text-sm text-muted-foreground capitalize">{user?.role}</div>
                    <div className="text-xs text-muted-foreground">{user?.email}</div>
                  </div>
                </div>
                <Link
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/portal/dashboard'}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="inline mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/portal/profile"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="inline mr-2 h-4 w-4" />
                  Profile Settings
                </Link>
                <Link
                  to="/portal/orders"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="inline mr-2 h-4 w-4" />
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                >
                  <X className="inline mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="border-t border-border/50 pt-4 space-y-3">
                <Link
                  to="/auth/login"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="block px-4 py-3 rounded-lg text-base font-medium bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
