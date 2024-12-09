import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, MapPin, Send } from "lucide-react";

const ReportIssue = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="bg-primary text-white p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Report an Issue</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Select Issue Type</h2>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accident">Road Accident</SelectItem>
              <SelectItem value="violation">Traffic Violation</SelectItem>
              <SelectItem value="signal">Broken Signal</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Issue Details</h2>
          <Textarea placeholder="Describe the issue in detail..." className="min-h-[100px]" />
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Attach Evidence</h2>
          <Button variant="outline" className="w-full">
            <Upload className="mr-2 h-4 w-4" /> Upload Image
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Location</h2>
          <Button variant="outline" className="w-full">
            <MapPin className="mr-2 h-4 w-4" /> Pin Location
          </Button>
        </Card>

        <Button className="w-full bg-primary hover:bg-primary/90">
          <Send className="mr-2 h-4 w-4" /> Submit Report
        </Button>
      </div>
    </div>
  );
};

export default ReportIssue;