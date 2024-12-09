import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, QrCode, FileText, Download } from "lucide-react";

const DigitalIdentity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Digital Identity</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Your Digital ID</h2>
          <div className="flex justify-center mb-4">
            <QrCode className="h-48 w-48" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" /> Download QR Code
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Available Documents</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Driving License
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Vehicle Registration
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Road Tax Certificate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DigitalIdentity;