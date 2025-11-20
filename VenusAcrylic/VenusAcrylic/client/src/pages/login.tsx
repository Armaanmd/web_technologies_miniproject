import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md border-none shadow-2xl bg-white/90 backdrop-blur-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Enter your email to sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" required />
            </div>
            <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity">
              Sign In
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Forgot password?</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
