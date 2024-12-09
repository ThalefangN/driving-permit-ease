import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 animate-fade-in">
      <div className="max-w-md mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Verify Your Phone</h1>
          <p className="text-sm text-muted-foreground">
            We've sent a code to your phone number
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-8">
          <div className="flex justify-center">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
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