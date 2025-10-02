import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import ScrollToTop from './components/ScrollToTop';

// Public pages
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Customer portal
import CustomerDashboard from "./pages/portal/Dashboard";
import Orders from "./pages/portal/Orders";
import Service from "./pages/portal/Service";
import Documents from "./pages/portal/Documents";
import Profile from "./pages/portal/Profile";
import Messages from "./pages/portal/Messages";
import Notifications from "./pages/portal/Notifications";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders";
import AdminCustomers from "./pages/admin/Customers";
import AdminService from "./pages/admin/Service";
import AdminMessages from "./pages/admin/Messages";
import AdminSettings from "./pages/admin/Settings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            
            {/* Customer portal routes */}
            <Route path="/portal/dashboard" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
            <Route path="/portal/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/portal/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
            <Route path="/portal/documents" element={<ProtectedRoute><Documents /></ProtectedRoute>} />
            <Route path="/portal/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/portal/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
            <Route path="/portal/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            
            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute requireAdmin><AdminOrders /></ProtectedRoute>} />
            <Route path="/admin/customers" element={<ProtectedRoute requireAdmin><AdminCustomers /></ProtectedRoute>} />
            <Route path="/admin/service" element={<ProtectedRoute requireAdmin><AdminService /></ProtectedRoute>} />
            <Route path="/admin/messages" element={<ProtectedRoute requireAdmin><AdminMessages /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute requireAdmin><AdminSettings /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
