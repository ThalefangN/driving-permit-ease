import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, AlertTriangle, Info } from "lucide-react";
import { toast } from "sonner";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      icon: Bell,
      title: "New Message",
      description: "You have a new message regarding your vehicle registration",
      time: "2 minutes ago",
      bgColor: "bg-blue-50"
    },
    {
      icon: AlertTriangle,
      title: "Traffic Alert",
      description: "Heavy traffic reported on Main Street",
      time: "1 hour ago",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Info,
      title: "Payment Reminder",
      description: "Your road tax payment is due in 5 days",
      time: "2 hours ago",
      bgColor: "bg-red-50"
    }
  ];

  const handleNotificationClick = (notification: any) => {
    toast.success(`Opening notification: ${notification.title}`);
  };

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {notifications.map((notification, index) => (
          <Card
            key={index}
            className={`p-4 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in ${notification.bgColor}`}
            onClick={() => handleNotificationClick(notification)}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-white/80">
                <notification.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;