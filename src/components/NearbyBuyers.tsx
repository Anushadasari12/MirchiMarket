import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import { toast } from "sonner";

const NearbyBuyers = () => {
  // Mock data for demonstration
  const buyers = [
    {
      id: "1",
      name: "Spice Traders Co.",
      location: "Guntur, AP",
      distance: "5 km",
      requirement: "Premium Guntur Sannam - 100 quintals",
      rating: 4.8,
      verified: true,
    },
    {
      id: "2",
      name: "Export House India",
      location: "Hyderabad, TS",
      distance: "45 km",
      requirement: "Teja variety - 200 quintals",
      rating: 4.6,
      verified: true,
    },
    {
      id: "3",
      name: "Local Wholesale Market",
      location: "Warangal, TS",
      distance: "75 km",
      requirement: "Any variety - 50 quintals",
      rating: 4.2,
      verified: false,
    },
    {
      id: "4",
      name: "Mirchi Processing Unit",
      location: "Guntur, AP",
      distance: "8 km",
      requirement: "Grade A quality - 150 quintals",
      rating: 4.9,
      verified: true,
    },
  ];

  const handleContact = (buyerName: string) => {
    toast.success(`Contact request sent to ${buyerName}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Buyers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {buyers.map((buyer) => (
            <Card key={buyer.id} className="border-2 hover:border-secondary/50 transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{buyer.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span>{buyer.rating}</span>
                    </div>
                  </div>
                  {buyer.verified && (
                    <Badge className="bg-secondary">Verified</Badge>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {buyer.location} • {buyer.distance} away
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Requirement:</span> {buyer.requirement}
                  </p>
                </div>

                <Button
                  onClick={() => handleContact(buyer.name)}
                  className="w-full"
                  variant="outline"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Buyer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyBuyers;
