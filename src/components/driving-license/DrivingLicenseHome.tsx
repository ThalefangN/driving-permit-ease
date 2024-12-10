import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, RefreshCw, FileText, Calendar, FileSearch, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DrivingLicenseHome = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: CreditCard,
      title: "Pay for New Driving License",
      description: "Pay fees and upload documents for your new license",
      action: () => {
        toast.info("Opening payment screen");
        // Add navigation logic
      }
    },
    {
      icon: RefreshCw,
      title: "Renew Driving License",
      description: "Extend your license validity with easy renewal options",
      action: () => {
        toast.info("Opening renewal screen");
        // Add navigation logic
      }
    },
    {
      icon: FileText,
      title: "Change License Information",
      description: "Update your personal details and documentation",
      action: () => {
        toast.info("Opening information update screen");
        // Add navigation logic
      }
    },
    {
      icon: Calendar,
      title: "Book Driving Test",
      description: "Schedule your driving test at your preferred center",
      action: () => {
        toast.info("Opening booking calendar");
        // Add navigation logic
      }
    },
    {
      icon: FileSearch,
      title: "View License Status",
      description: "Check your application progress in real-time",
      action: () => {
        toast.info("Checking license status");
        // Add navigation logic
      }
    },
    {
      icon: Info,
      title: "More Information",
      description: "Learn about processes, fees, and requirements",
      action: () => {
        toast.info("Opening information guide");
        // Add navigation logic
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-white border-b p-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/home")}
            className="text-black"
          >
            <FileText className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Driving License Services</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
            onClick={service.action}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
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

export default DrivingLicenseHome;