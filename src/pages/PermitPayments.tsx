import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, History } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const PermitPayments = () => {
  const navigate = useNavigate();
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [showHistoryScreen, setShowHistoryScreen] = useState(false);

  const handleApplyPermit = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Processing your permit application...',
        success: 'Application submitted successfully! Proceeding to payment.',
        error: 'Failed to process application. Please try again.',
      }
    );
    setShowPaymentScreen(true);
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
    setShowPaymentScreen(false);
  };

  const handleViewHistory = () => {
    setShowHistoryScreen(true);
    toast.success("Loading payment history...");
  };

  if (showPaymentScreen) {
    return (
      <div className="min-h-screen bg-background pb-16 animate-fade-in">
        <div className="bg-white text-black p-4 border-b">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setShowPaymentScreen(false)} className="text-black">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold">Pay for Permit</h1>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <div className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="mobile">Mobile Money</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-primary hover:bg-primary/90" onClick={handlePayment}>
                <CreditCard className="mr-2 h-4 w-4" /> Complete Payment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (showHistoryScreen) {
    return (
      <div className="min-h-screen bg-background pb-16 animate-fade-in">
        <div className="bg-white text-black p-4 border-b">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setShowHistoryScreen(false)} className="text-black">
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold">Payment History</h1>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-semibold">Payment - 01 Jan 2024</p>
                <p className="text-sm text-muted-foreground">Amount: BWP 500</p>
                <p className="text-sm text-muted-foreground">Status: Completed</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold">Payment - 01 Dec 2023</p>
                <p className="text-sm text-muted-foreground">Amount: BWP 450</p>
                <p className="text-sm text-muted-foreground">Status: Completed</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-white text-black p-4 border-b">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-black">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Permit & License Payments</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Apply for New Permit</h2>
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
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleApplyPermit}>
              Apply Now
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pay for License or Permit</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pay for your selected permit or license via mobile payment options
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setShowPaymentScreen(true)}>
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">View Payment History</h2>
          <p className="text-sm text-muted-foreground mb-4">
            View your past payments and invoices for permits and licenses
          </p>
          <Button variant="outline" className="w-full" onClick={handleViewHistory}>
            <History className="mr-2 h-4 w-4" /> View History
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PermitPayments;