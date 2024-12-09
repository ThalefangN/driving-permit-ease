import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background p-6 animate-fade-in">
      <div className="max-w-md mx-auto w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we'll send you a reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Email" type="email" className="pl-10" required />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Send Reset Link
          </Button>

          <Button
            type="button"
            variant="link"
            className="w-full"
            onClick={() => navigate("/signin")}
          >
            Back to Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;