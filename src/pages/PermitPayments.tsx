import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, History } from "lucide-react";

const PermitPayments = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Permit & License Payments</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Apply for a New Permit</h2>
          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select permit type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="learners">Learner's Permit</SelectItem>
                <SelectItem value="temporary">Temporary Permit</SelectItem>
                <SelectItem value="international">International Permit</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pay for License or Permit</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pay for your selected permit or license via mobile payment options
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">View Payment History</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View your past payments and invoices for permits and licenses
          </p>
          <Button variant="outline" className="w-full">
            <History className="mr-2 h-4 w-4" /> View History
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PermitPayments;