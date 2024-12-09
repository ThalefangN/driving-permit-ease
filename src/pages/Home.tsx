import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Search,
  Car,
  CreditCard,
  Truck,
  Road,
  AlertTriangle,
  QrCode,
  Home as HomeIcon,
  Wrench,
  Bell,
  User
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      {/* Header */}
      <div className="bg-primary text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, User!</h1>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for a Service..." className="pl-10" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-4 space-y-4">
        {[
          { icon: Car, title: "Driving License Services", desc: "Learn more about driving license exam bookings and payments" },
          { icon: CreditCard, title: "Permit & License Payments", desc: "Pay for driving licenses and permits with ease" },
          { icon: Truck, title: "Vehicle Registration", desc: "Register or renew your vehicle in a few simple steps" },
          { icon: Road, title: "Road Tax Payments", desc: "Pay road taxes and fees online quickly and easily" },
          { icon: AlertTriangle, title: "Report an Issue", desc: "Report issues like road accidents, traffic violations, etc" },
          { icon: QrCode, title: "Digital Identity / QR Code", desc: "Access your transport-related documents and digital ID" },
        ].map((service, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
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
              className="flex-1 flex flex-col items-center py-2"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;