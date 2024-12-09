import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, CreditCard, User, ArrowLeft } from "lucide-react";
import { useState } from "react";

const DrivingLicenseServices = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Driving License Services</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Book a Driving Test</h2>
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <Button className="w-full" disabled={!date}>
              <CalendarIcon className="mr-2 h-4 w-4" /> Book Test
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pay for Driving License</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pay via mobile money, debit/credit card, or other supported payment methods
          </p>
          <Button className="w-full">
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">My Driving License Status</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View your current driving license status, renewal date, and required actions
          </p>
          <Button variant="outline" className="w-full">
            <User className="mr-2 h-4 w-4" /> View Status
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DrivingLicenseServices;