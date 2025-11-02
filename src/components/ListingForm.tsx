import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Listing } from "@/pages/Dashboard";

interface ListingFormProps {
  onSubmit: (listing: Listing) => void;
  onCancel: () => void;
}

const ListingForm = ({ onSubmit, onCancel }: ListingFormProps) => {
  const [formData, setFormData] = useState({
    variety: "",
    quantity: "",
    askPrice: "",
    location: "",
    availability: "",
    qualityGrade: "",
    moistureContent: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const listing: Listing = {
      id: Date.now().toString(),
      variety: formData.variety,
      quantity: parseFloat(formData.quantity),
      askPrice: parseFloat(formData.askPrice),
      location: formData.location,
      availability: formData.availability,
      qualityGrade: formData.qualityGrade,
      moistureContent: formData.moistureContent,
    };

    onSubmit(listing);
    toast.success("Listing added successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Mirchi Listing</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="variety">Mirchi Variety *</Label>
              <Select
                value={formData.variety}
                onValueChange={(value) => setFormData({ ...formData, variety: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select variety" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Guntur Sannam">Guntur Sannam</SelectItem>
                  <SelectItem value="Warangal Chapatta">Warangal Chapatta</SelectItem>
                  <SelectItem value="Teja">Teja</SelectItem>
                  <SelectItem value="Byadgi">Byadgi</SelectItem>
                  <SelectItem value="Kashmiri">Kashmiri</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (Quintals) *</Label>
              <Input
                id="quantity"
                type="number"
                step="0.1"
                placeholder="e.g., 50"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="askPrice">Ask Price (₹/Quintal) *</Label>
              <Input
                id="askPrice"
                type="number"
                step="100"
                placeholder="e.g., 15000"
                value={formData.askPrice}
                onChange={(e) => setFormData({ ...formData, askPrice: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="e.g., Guntur, AP"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Expected Availability *</Label>
              <Input
                id="availability"
                type="date"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualityGrade">Quality Grade *</Label>
              <Select
                value={formData.qualityGrade}
                onValueChange={(value) => setFormData({ ...formData, qualityGrade: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Grade A">Grade A</SelectItem>
                  <SelectItem value="Grade B">Grade B</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="moistureContent">Moisture Content *</Label>
              <Select
                value={formData.moistureContent}
                onValueChange={(value) => setFormData({ ...formData, moistureContent: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select moisture %" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Below 10%">Below 10%</SelectItem>
                  <SelectItem value="10-12%">10-12%</SelectItem>
                  <SelectItem value="12-14%">12-14%</SelectItem>
                  <SelectItem value="Above 14%">Above 14%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Add Listing
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ListingForm;
