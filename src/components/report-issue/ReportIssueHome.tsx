import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, FileText, AlertTriangle, FileWarning, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ReportIssueHome = () => {
  const navigate = useNavigate();

  const issues = [
    {
      icon: Car,
      title: "Driving Test Issue",
      description: "Report problems with test booking or conduct",
      action: () => {
        toast.info("Opening driving test issue form");
        // Add navigation logic
      }
    },
    {
      icon: FileText,
      title: "Document Submission Issue",
      description: "Report problems with document uploads or verification",
      action: () => {
        toast.info("Opening document issue form");
        // Add navigation logic
      }
    },
    {
      icon: AlertTriangle,
      title: "Road Safety or Traffic Issue",
      description: "Report road safety concerns or traffic problems",
      action: () => {
        toast.info("Opening road safety issue form");
        // Add navigation logic
      }
    },
    {
      icon: FileWarning,
      title: "Vehicle Registration Issue",
      description: "Report vehicle registration related problems",
      action: () => {
        toast.info("Opening registration issue form");
        // Add navigation logic
      }
    },
    {
      icon: HelpCircle,
      title: "Other (Specify)",
      description: "Report any other issues not listed above",
      action: () => {
        toast.info("Opening general issue form");
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
            <AlertTriangle className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Report an Issue</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {issues.map((issue, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
            onClick={issue.action}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-red-50">
                <issue.icon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{issue.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReportIssueHome;