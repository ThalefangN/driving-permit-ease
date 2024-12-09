import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Car, CreditCard, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: "Driving License",
      description: "Pay for your driving license test",
      path: "/driving-license-services",
      bgColor: "bg-blue-50"
    },
    {
      icon: CreditCard,
      title: "Road Permit",
      description: "Apply for or renew your road permit",
      path: "/permit-payments",
      bgColor: "bg-green-50"
    },
    {
      icon: AlertTriangle,
      title: "Traffic Fines",
      description: "View and pay for any outstanding fines",
      path: "/traffic-fines",
      bgColor: "bg-red-50"
    },
  ];

  const handleServiceClick = (service: any) => {
    toast.success(`Opening ${service.title} service`);
    navigate(service.path);
  };

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Services</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in ${service.bgColor}`}
            onClick={() => handleServiceClick(service)}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/80">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;