import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Car,
  CreditCard,
  Truck,
  Route,
  AlertTriangle,
  QrCode,
  Home as HomeIcon,
  Wrench,
  Bell,
  User
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { 
      icon: Car, 
      title: "Driving License Services", 
      desc: "Learn more about driving license exam bookings and payments",
      path: "/driving-license-services"
    },
    { 
      icon: CreditCard, 
      title: "Permit & License Payments", 
      desc: "Pay for driving licenses and permits with ease",
      path: "/permit-payments"
    },
    { 
      icon: Truck, 
      title: "Vehicle Registration", 
      desc: "Register or renew your vehicle in a few simple steps",
      path: "/vehicle-registration"
    },
    { 
      icon: Route, 
      title: "Road Tax Payments", 
      desc: "Pay road taxes and fees online quickly and easily",
      path: "/road-tax-payments"
    },
    { 
      icon: AlertTriangle, 
      title: "Report an Issue", 
      desc: "Report issues like road accidents, traffic violations, etc",
      path: "/report-issue"
    },
    { 
      icon: QrCode, 
      title: "Digital Identity / QR Code", 
      desc: "Access your transport-related documents and digital ID",
      path: "/digital-identity"
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, User!</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for a Service..." className="pl-10" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(service.path)}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t">
        <div className="flex justify-around p-2">
          {[
            { icon: HomeIcon, label: "Home" },
            { icon: Wrench, label: "Services" },
            { icon: Bell, label: "Notifications" },
            { icon: User, label: "Profile" },
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex-1 flex flex-col items-center py-2 hover:bg-transparent"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;