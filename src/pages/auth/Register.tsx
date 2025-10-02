import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Zap, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import evSuvBlue from '@/assets/ev-suv-blue.jpg';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Please make sure your passwords match.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, name);
      toast({
        title: 'Registration successful',
        description: 'Welcome to YouGuard Drive!',
      });
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: 'Please try again later.',
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
        <div className="w-full max-w-sm">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 p-1.5 shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                YouGuard Drive
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Join the Revolution
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xs">
              Create your account and start your electric journey
            </p>
          </div>

          {/* Registration Form */}
          <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-1">
              <CardTitle className="text-lg text-center text-slate-900 dark:text-white">
                Create Account
              </CardTitle>
              <CardDescription className="text-center text-slate-600 dark:text-slate-400 text-xs">
                Join thousands of EV owners choosing YouGuard Drive
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-1 py-2">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium text-xs">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 h-9 border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium text-xs">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-9 border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300 font-medium text-xs">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-9 border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
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
                <div className="space-y-1">
                  <Label htmlFor="confirm-password" className="text-slate-700 dark:text-slate-300 font-medium text-xs">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 pr-10 h-9 border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 pt-3">
                <Button
                  type="submit"
                  className="w-full h-9 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                  Already have an account?{' '}
                  <Link to="/auth/login" className="text-green-600 hover:text-green-700 font-medium hover:underline">
                    Sign in here
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>

          <div className="text-center">
            <Link to="/" className="text-xs text-slate-500 dark:text-slate-400 hover:text-green-600 font-medium transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
            {/* Right side - Image */}
      <div className="hidden lg:block flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url(${evSuvBlue})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-12">
          <div className="max-w-md text-white">
            <h2 className="text-4xl font-bold tracking-tight">
              Unlock the Full Potential of Your EV
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Register to access exclusive features, manage your vehicle, and join a community of smart EV owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
