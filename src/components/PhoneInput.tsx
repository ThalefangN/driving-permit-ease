import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState } from "react";

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState("+267"); // Botswana

  return (
    <div className="flex space-x-2">
      <div className="relative w-24">
        <Button
          type="button"
          variant="outline"
          className="w-full h-10 px-3 text-left font-normal"
        >
          {countryCode}
        </Button>
      </div>
      <div className="relative flex-1">
        <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input type="tel" placeholder="Phone number" className="pl-10" required />
      </div>
    </div>
  );
};

export default PhoneInput;