import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-mirchi.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Connect Directly",
      description: "Connect farmers directly with buyers, eliminating middlemen and maximizing profits.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Bidding",
      description: "Competitive bidding system ensures you get the best market price for your produce.",
    },
    {
      icon: MapPin,
      title: "Location-based",
      description: "Find buyers near you and reduce transportation costs and delivery time.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Safe and verified transactions with transparent pricing and secure payments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container relative mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Sell Your Mirchi{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Directly to Buyers
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join India's fastest-growing digital marketplace for mirchi. Connect with verified buyers,
                get competitive prices, and grow your farming business.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/login">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                    Start Selling
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img
                src={heroImage}
                alt="Fresh Mirchi"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Mirchi Market?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform empowers farmers with tools to succeed in the modern agricultural marketplace.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of farmers already using Mirchi Market
              </p>
              <Link to="/login">
                <Button size="lg" variant="secondary" className="shadow-xl">
                  Register Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Mirchi Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
