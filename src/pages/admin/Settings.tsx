import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import {
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Mail,
  Phone,
  MapPin,
  Save,
  RefreshCw
} from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    // General Settings
    companyName: 'YouGuard Drive',
    companyEmail: 'admin@youguard.com',
    companyPhone: '+251 11 234 5678',
    companyAddress: 'Addis Ababa, Ethiopia',
    timezone: 'Africa/Addis_Ababa',
    currency: 'ETB',

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    orderNotifications: true,
    serviceNotifications: true,
    marketingEmails: false,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90',

    // Appearance Settings
    theme: 'system',
    language: 'en',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h'
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log('Saving settings:', settings);
  };

  const handleReset = () => {
    // Reset to defaults
    console.log('Resetting settings');
  };

  return (
    <DashboardLayout
      title="System Settings"
      description="Configure system preferences and settings"
      actions={
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleReset} className="bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-xl">
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-200 shadow-lg">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      }
    >
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                Company Information
              </CardTitle>
              <CardDescription>Basic company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium">Company Name</Label>
                  <Input
                    id="companyName"
                    value={settings.companyName}
                    onChange={(e) => setSettings({...settings, companyName: e.target.value})}
                    className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyEmail" className="text-sm font-medium">Company Email</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={settings.companyEmail}
                    onChange={(e) => setSettings({...settings, companyEmail: e.target.value})}
                    className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyPhone" className="text-sm font-medium">Company Phone</Label>
                  <Input
                    id="companyPhone"
                    value={settings.companyPhone}
                    onChange={(e) => setSettings({...settings, companyPhone: e.target.value})}
                    className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-sm font-medium">Timezone</Label>
                  <Select value={settings.timezone} onValueChange={(value) => setSettings({...settings, timezone: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="Africa/Addis_Ababa">East Africa Time (EAT)</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="Africa/Nairobi">East Africa Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress" className="text-sm font-medium">Company Address</Label>
                <Textarea
                  id="companyAddress"
                  value={settings.companyAddress}
                  onChange={(e) => setSettings({...settings, companyAddress: e.target.value})}
                  className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl"
                  rows={3}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-sm font-medium">Currency</Label>
                  <Select value={settings.currency} onValueChange={(value) => setSettings({...settings, currency: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="ETB">Ethiopian Birr (ETB)</SelectItem>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                Notification Preferences
              </CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, smsNotifications: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Order Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new orders</p>
                  </div>
                  <Switch
                    checked={settings.orderNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, orderNotifications: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Service Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified about service requests</p>
                  </div>
                  <Switch
                    checked={settings.serviceNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, serviceNotifications: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                  <Switch
                    checked={settings.marketingEmails}
                    onCheckedChange={(checked) => setSettings({...settings, marketingEmails: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({...settings, twoFactorAuth: checked})}
                  />
                </div>
                <Separator className="bg-white/20 dark:bg-slate-700/50" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout" className="text-sm font-medium">Session Timeout (minutes)</Label>
                    <Select value={settings.sessionTimeout} onValueChange={(value) => setSettings({...settings, sessionTimeout: value})}>
                      <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry" className="text-sm font-medium">Password Expiry (days)</Label>
                    <Select value={settings.passwordExpiry} onValueChange={(value) => setSettings({...settings, passwordExpiry: value})}>
                      <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of the application</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="text-sm font-medium">Theme</Label>
                  <Select value={settings.theme} onValueChange={(value) => setSettings({...settings, theme: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-sm font-medium">Language</Label>
                  <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="am">አማርኛ (Amharic)</SelectItem>
                      <SelectItem value="ti">ትግርኛ (Tigrinya)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat" className="text-sm font-medium">Date Format</Label>
                  <Select value={settings.dateFormat} onValueChange={(value) => setSettings({...settings, dateFormat: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeFormat" className="text-sm font-medium">Time Format</Label>
                  <Select value={settings.timeFormat} onValueChange={(value) => setSettings({...settings, timeFormat: value})}>
                    <SelectTrigger className="bg-white/50 dark:bg-slate-800/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl">
                      <SelectItem value="12h">12 Hour</SelectItem>
                      <SelectItem value="24h">24 Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                Third-party Integrations
              </CardTitle>
              <CardDescription>Connect with external services and APIs</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                <div className="rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-100 dark:bg-blue-900/50 p-2">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Service</h4>
                        <p className="text-sm text-muted-foreground">SendGrid integration for email notifications</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-green-100 dark:bg-green-900/50 p-2">
                        <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">SMS Service</h4>
                        <p className="text-sm text-muted-foreground">Twilio integration for SMS notifications</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-purple-100 dark:bg-purple-900/50 p-2">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Maps Integration</h4>
                        <p className="text-sm text-muted-foreground">Google Maps for location services</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white/50 dark:bg-slate-700/50 border-white/30 dark:border-slate-600/30 rounded-xl">
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AdminSettings;