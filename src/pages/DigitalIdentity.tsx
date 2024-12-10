import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { QrCode, FileText, Download } from "lucide-react";
import { toast } from "sonner";

const DigitalIdentity = () => {
  const navigate = useNavigate();

  const handleDownloadQR = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Downloading QR Code...',
        success: 'QR Code downloaded successfully to your device.',
        error: 'Download failed. Please try again.',
      }
    );
  };

  const handleDocumentClick = (documentType: string) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: `Loading ${documentType} details...`,
        success: `${documentType} details loaded successfully.`,
        error: 'Failed to load details. Please try again.',
      }
    );
  };

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Your Digital ID</h2>
          <div className="flex justify-center mb-4">
            <QrCode className="h-48 w-48" />
          </div>
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleDownloadQR}
          >
            <Download className="mr-2 h-4 w-4" /> Download QR Code
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Available Documents</h2>
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => handleDocumentClick('Driving License')}
            >
              <FileText className="mr-2 h-4 w-4" /> Driving License
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => handleDocumentClick('Vehicle Registration')}
            >
              <FileText className="mr-2 h-4 w-4" /> Vehicle Registration
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => handleDocumentClick('Road Tax Certificate')}
            >
              <FileText className="mr-2 h-4 w-4" /> Road Tax Certificate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DigitalIdentity;