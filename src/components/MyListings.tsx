import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Trash2 } from "lucide-react";
import { Listing } from "@/pages/Dashboard";
import { toast } from "sonner";

interface MyListingsProps {
  listings: Listing[];
  onDelete: (id: string) => void;
}

const MyListings = ({ listings, onDelete }: MyListingsProps) => {
  const handleDelete = (id: string) => {
    onDelete(id);
    toast.success("Listing deleted successfully");
  };

  if (listings.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>No listings yet</p>
        <p className="text-sm mt-2">Click "Add New Listing" to create your first listing</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {listings.map((listing) => (
        <Card key={listing.id} className="border-2 hover:border-primary/50 transition-all">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{listing.variety}</h3>
                <p className="text-2xl font-bold text-primary">₹{listing.askPrice.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">per quintal</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(listing.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {listing.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Available: {new Date(listing.availability).toLocaleDateString()}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">{listing.quantity} quintals</Badge>
              <Badge variant="outline">{listing.qualityGrade}</Badge>
              <Badge variant="outline">{listing.moistureContent}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyListings;
