import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flame } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phone !== "9989595486") {
      toast.error("Invalid phone number. Please use 9989595486 for demo.");
      return;
    }

    setOtpSent(true);
    toast.success("OTP sent successfully! Use 12345 to login.");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp !== "12345") {
      toast.error("Invalid OTP. Please use 12345 for demo.");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userPhone", phone);
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Flame className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Seller Login</CardTitle>
              <CardDescription>
                {otpSent ? "Enter the OTP sent to your phone" : "Enter your phone number to continue"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="9989595486"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      maxLength={10}
                    />
                    <p className="text-xs text-muted-foreground">
                      Demo: Use 9989595486
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Send OTP
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="12345"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      maxLength={5}
                    />
                    <p className="text-xs text-muted-foreground">
                      Demo: Use 12345
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Verify & Login
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => setOtpSent(false)}
                  >
                    Change Phone Number
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
