import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, Settings, LogOut } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Tlhalefang Ntshilane</h2>
              <p className="text-sm text-muted-foreground">Botswana</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p>tlhalefang@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p>+267 123 4567</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={() => {
              toast.success("Opening settings");
              navigate("/settings");
            }}
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-500" 
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Profile;