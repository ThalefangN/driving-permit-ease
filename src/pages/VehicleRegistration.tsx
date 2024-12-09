import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, FileText } from "lucide-react";

const VehicleRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Vehicle Registration</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Register a New Vehicle</h2>
          <div className="space-y-4">
            <Input placeholder="Vehicle Make" />
            <Input placeholder="Vehicle Model" />
            <Input placeholder="Year" type="number" />
            <Input placeholder="Chassis Number" />
            <Button className="w-full bg-primary hover:bg-primary/90">
              Register Vehicle
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pay for Registration</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pay for vehicle registration via mobile payment methods
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">View Registration Status</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View your vehicle registration status or print registration certificate
          </p>
          <Button variant="outline" className="w-full">
            <FileText className="mr-2 h-4 w-4" /> View Status
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default VehicleRegistration;