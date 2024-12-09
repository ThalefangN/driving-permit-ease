import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background p-6 animate-fade-in">
      <div className="max-w-md mx-auto w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Verify Your Phone</h1>
          <p className="text-sm text-muted-foreground">
            We've sent a code to your phone number
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                className="w-14 h-14 text-center text-2xl"
                required
              />
            ))}
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Verify
          </Button>
        </form>

        <p className="text-center text-sm">
          Didn't receive code?{" "}
          <Button variant="link" className="p-0 h-auto font-semibold">
            Resend
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Verify;