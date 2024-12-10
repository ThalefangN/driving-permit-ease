import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import DrivingLicenseServices from "./pages/DrivingLicenseServices";
import PermitPayments from "./pages/PermitPayments";
import VehicleRegistration from "./pages/VehicleRegistration";
import RoadTaxPayments from "./pages/RoadTaxPayments";
import ReportIssue from "./pages/ReportIssue";
import DigitalIdentity from "./pages/DigitalIdentity";
import BottomNav from "./components/BottomNav";
import { useLocation } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 1,
      },
    },
  });

  const location = useLocation();
  const showBottomNav = !['/get-started', '/signup', '/signin', '/verify', '/forgot-password'].includes(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Navigate to="/get-started" replace />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/driving-license-services" element={<DrivingLicenseServices />} />
            <Route path="/permit-payments" element={<PermitPayments />} />
            <Route path="/vehicle-registration" element={<VehicleRegistration />} />
            <Route path="/road-tax-payments" element={<RoadTaxPayments />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/digital-identity" element={<DigitalIdentity />} />
          </Routes>
          {showBottomNav && <BottomNav />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;