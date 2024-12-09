import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background animate-fade-in">
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Mookgweetsi</h1>
          <p className="text-muted-foreground">Transport Services for Batswana</p>
        </div>
        
        <div className="w-full max-w-md aspect-video bg-[url('/placeholder.svg')] bg-cover bg-center rounded-lg shadow-lg" />
        
        <div className="w-full max-w-md space-y-4">
          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;