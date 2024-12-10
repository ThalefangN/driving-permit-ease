import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, CreditCard, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DrivingLicenseServices = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleBookTest = () => {
    if (!date) {
      toast.error("Please select a date first");
      return;
    }
    toast.success("Test scheduled successfully! Please check your status after 24 hours.", {
      description: `Scheduled for ${date.toLocaleDateString()}`
    });
  };

  const handlePayment = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Processing payment...',
        success: 'Payment completed successfully!',
        error: 'Payment failed. Please try again.',
      }
    );
  };

  const handleViewStatus = () => {
    toast.info("Your application is under review", {
      description: "Expected processing time: 24-48 hours"
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
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
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleBookTest}
            >
              <CalendarIcon className="mr-2 h-4 w-4" /> Book Test
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pay for Driving License</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pay via mobile money, debit/credit card, or other supported payment methods
          </p>
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handlePayment}
          >
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">My Driving License Status</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View your current driving license status, renewal date, and required actions
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleViewStatus}
          >
            <User className="mr-2 h-4 w-4" /> View Status
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DrivingLicenseServices;