import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell } from "lucide-react";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      title: "New Message",
      message: "You have a new message regarding your vehicle registration",
      time: "2 hours ago",
      type: "info",
      bgColor: "bg-blue-50"
    },
    {
      title: "Payment Confirmation",
      message: "Your driving license payment was successfully processed",
      time: "5 hours ago",
      type: "success",
      bgColor: "bg-green-50"
    },
    // Add more notifications as needed
  ];

  return (
    <div className="min-h-screen bg-background pb-16 animate-fade-in">
      <div className="p-4 bg-white shadow-sm">
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
            className={`p-4 ${notification.bgColor}`}
          >
            <div className="flex items-start space-x-3">
              <Bell className="h-5 w-5 mt-1" />
              <div>
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;