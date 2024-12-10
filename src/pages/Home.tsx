import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Search,
  Car,
  CreditCard,
  Truck,
  Route,
  AlertTriangle,
  QrCode,
  User
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { 
      icon: Car, 
      title: "Driving License Services", 
      desc: "Learn more about driving license exam bookings and payments",
      path: "/driving-license-services",
      bgColor: "bg-blue-50"
    },
    { 
      icon: CreditCard, 
      title: "Permit & License Payments", 
      desc: "Pay for driving licenses and permits with ease",
      path: "/permit-payments",
      bgColor: "bg-green-50"
    },
    { 
      icon: Truck, 
      title: "Vehicle Registration", 
      desc: "Register or renew your vehicle in a few simple steps",
      path: "/vehicle-registration",
      bgColor: "bg-purple-50"
    },
    { 
      icon: Route, 
      title: "Road Tax Payments", 
      desc: "Pay road taxes and fees online quickly and easily",
      path: "/road-tax-payments",
      bgColor: "bg-orange-50"
    },
    { 
      icon: AlertTriangle, 
      title: "Report an Issue", 
      desc: "Report issues like road accidents, traffic violations, etc",
      path: "/report-issue",
      bgColor: "bg-red-50"
    },
    { 
      icon: QrCode, 
      title: "Digital Identity / QR Code", 
      desc: "Access your transport-related documents and digital ID",
      path: "/digital-identity",
      bgColor: "bg-indigo-50"
    },
  ];

  const handleServiceClick = (service: any) => {
    navigate(service.path);
    toast.success(`Opening ${service.title}`);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: 'Uploading file...',
          success: 'File uploaded successfully!',
          error: 'Upload failed. Please try again.',
        }
      );
    }
  };

  const handleDownload = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Preparing download...',
        success: 'File downloaded successfully!',
        error: 'Download failed. Please try again.',
      }
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, User!</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for a Service..." className="pl-10" />
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-lg transition-shadow cursor-pointer ${service.bgColor} animate-fade-in`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-full bg-white/80">
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
      </div>

      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
};

export default Home;