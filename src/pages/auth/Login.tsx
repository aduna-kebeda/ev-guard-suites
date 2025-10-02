import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Zap, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroEvCharging from '@/assets/hero-ev-charging.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent, role: 'customer' | 'admin') => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password, role);
      toast({
        title: 'Login successful',
        description: `Welcome back!`,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="w-full max-w-sm space-y-4">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 mb-3">
              <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2 shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YouGuard Drive
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Welcome Back
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Sign in to access your electric vehicle services
            </p>
          </div>

          {/* Login Form */}
          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-3 bg-slate-200 dark:bg-slate-700">
              <TabsTrigger
                value="customer"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Customer
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customer" className="space-y-0">
              <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="space-y-1 pb-2">
                  <CardTitle className="text-lg text-center text-slate-900 dark:text-white">
                    Customer Portal
                  </CardTitle>
                  <CardDescription className="text-center text-sm text-slate-600 dark:text-slate-400">
                    Access your orders and service history
                  </CardDescription>
                </CardHeader>
                <form onSubmit={(e) => handleSubmit(e, 'customer')}>
                  <CardContent className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="customer-email" className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="customer-email"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-9 h-9 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="customer-password" className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="customer-password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-9 pr-9 h-9 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 text-sm"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2 pt-3">
                    <Button
                      type="submit"
                      className="w-full h-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                    <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                      Don't have an account?{' '}
                      <Link to="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                        Create one here
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="admin" className="space-y-0">
              <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="space-y-1 pb-2">
                  <CardTitle className="text-lg text-center text-slate-900 dark:text-white">
                    Admin Portal
                  </CardTitle>
                  <CardDescription className="text-center text-sm text-slate-600 dark:text-slate-400">
                    Access the administration dashboard
                  </CardDescription>
                </CardHeader>
                <form onSubmit={(e) => handleSubmit(e, 'admin')}>
                  <CardContent className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="admin-email" className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        Admin Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="admin-email"
                          type="email"
                          placeholder="admin@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-9 h-9 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="admin-password" className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="admin-password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-9 pr-9 h-9 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 text-sm"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Button
                      type="submit"
                      className="w-full h-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In as Admin'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 font-medium transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
            {/* Right side - Image */}
      <div className="hidden lg:block flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url(${heroEvCharging})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-12">
          <div className="max-w-md text-white">
            <h2 className="text-4xl font-bold tracking-tight">
              Your Journey, Electrified
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Access your personalized dashboard, manage your charging schedules, and view your service history with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
