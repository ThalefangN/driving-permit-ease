import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, CreditCard, RefreshCw, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const PermitPayments = () => {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState("home");
  const [paymentDetails, setPaymentDetails] = useState({
    permitNumber: "",
    amount: "",
    paymentMethod: ""
  });

  const handlePayment = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Processing payment...",
        success: () => {
          setCurrentScreen("success");
          return "Payment completed successfully!";
        },
        error: "Payment failed. Please try again.",
      }
    );
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1500)),
        {
          loading: "Uploading document...",
          success: "Document uploaded successfully!",
          error: "Upload failed. Please try again.",
        }
      );
    }
  };

  const renderHomeScreen = () => (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-50">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Pay for Learner's Permit</h3>
            <p className="text-sm text-muted-foreground">Start your driving journey by making payment for your learner's permit.</p>
          </div>
        </div>
        <Button className="w-full mt-4" onClick={() => setCurrentScreen("learnerPermit")}>
          Pay Now
        </Button>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-green-50">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Pay for Driving License</h3>
            <p className="text-sm text-muted-foreground">Pay for a new license or renew an existing one.</p>
          </div>
        </div>
        <Button className="w-full mt-4" onClick={() => setCurrentScreen("drivingLicense")}>
          Pay Now
        </Button>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-purple-50">
            <RefreshCw className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Renew Driving License</h3>
            <p className="text-sm text-muted-foreground">Extend your driving license validity.</p>
          </div>
        </div>
        <Button className="w-full mt-4" onClick={() => setCurrentScreen("renewLicense")}>
          Renew Now
        </Button>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-orange-50">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">More Information</h3>
            <p className="text-sm text-muted-foreground">Learn about fees, processes, and refund policies.</p>
          </div>
        </div>
        <Button className="w-full mt-4" variant="outline" onClick={() => setCurrentScreen("information")}>
          View Details
        </Button>
      </Card>
    </div>
  );

  const renderPaymentScreen = (title: string) => (
    <div className="space-y-4">
      <Input 
        placeholder="Enter permit/license number"
        value={paymentDetails.permitNumber}
        onChange={(e) => setPaymentDetails({...paymentDetails, permitNumber: e.target.value})}
      />
      <Input 
        placeholder="Amount"
        value={paymentDetails.amount}
        onChange={(e) => setPaymentDetails({...paymentDetails, amount: e.target.value})}
      />
      <Select onValueChange={(value) => setPaymentDetails({...paymentDetails, paymentMethod: value})}>
        <SelectTrigger>
          <SelectValue placeholder="Select payment method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mobile">Mobile Money</SelectItem>
          <SelectItem value="card">Bank Card</SelectItem>
          <SelectItem value="eft">EFT</SelectItem>
        </SelectContent>
      </Select>
      {currentScreen === "renewLicense" && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Upload Vision Test/Medical Report</p>
          <input
            type="file"
            className="hidden"
            id="documentUpload"
            onChange={handleUpload}
          />
          <Button variant="outline" className="w-full" onClick={() => document.getElementById("documentUpload")?.click()}>
            Upload Document
          </Button>
        </div>
      )}
      <Button className="w-full" onClick={handlePayment}>
        Proceed to Payment
      </Button>
    </div>
  );

  const renderInformationScreen = () => (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Fee Information</h3>
      <ul className="space-y-2 text-sm">
        <li>• Learner's Permit Fees: BWP 50</li>
        <li>• Driving License Fees: BWP 200</li>
        <li>• Renewal Fees:</li>
        <li className="pl-4">- 1 Year: BWP 150</li>
        <li className="pl-4">- 3 Years: BWP 350</li>
        <li className="pl-4">- 5 Years: BWP 500</li>
        <li>• Refund Policy: Non-refundable after payment</li>
      </ul>
    </Card>
  );

  const renderSuccessScreen = () => (
    <Card className="p-4 text-center">
      <h3 className="text-xl font-semibold mb-4">🎉 Payment Successful!</h3>
      <p className="text-sm text-muted-foreground mb-4">Receipt sent to your email.</p>
      <div className="space-y-2">
        <Button className="w-full" onClick={() => toast.success("Receipt downloaded successfully")}>
          Download Receipt
        </Button>
        <Button variant="outline" className="w-full" onClick={() => setCurrentScreen("home")}>
          Back to Home
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-white text-black p-4 border-b">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => currentScreen === "home" ? navigate("/home") : setCurrentScreen("home")} 
            className="text-black"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">
            {currentScreen === "home" && "Permit & License Payments"}
            {currentScreen === "learnerPermit" && "Pay for Learner's Permit"}
            {currentScreen === "drivingLicense" && "Pay for Driving License"}
            {currentScreen === "renewLicense" && "Renew Driving License"}
            {currentScreen === "information" && "More Information"}
            {currentScreen === "success" && "Payment Status"}
          </h1>
        </div>
      </div>

      <div className="p-4">
        {currentScreen === "home" && renderHomeScreen()}
        {currentScreen === "learnerPermit" && renderPaymentScreen("Learner's Permit")}
        {currentScreen === "drivingLicense" && renderPaymentScreen("Driving License")}
        {currentScreen === "renewLicense" && renderPaymentScreen("License Renewal")}
        {currentScreen === "information" && renderInformationScreen()}
        {currentScreen === "success" && renderSuccessScreen()}
      </div>
    </div>
  );
};

export default PermitPayments;