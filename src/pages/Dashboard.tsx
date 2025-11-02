import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ListingForm from "@/components/ListingForm";
import MyListings from "@/components/MyListings";
import NearbyBuyers from "@/components/NearbyBuyers";
import { Plus } from "lucide-react";

export interface Listing {
  id: string;
  variety: string;
  quantity: number;
  askPrice: number;
  location: string;
  availability: string;
  qualityGrade: string;
  moistureContent: string;
}

export interface Buyer {
  id: string;
  name: string;
  location: string;
  distance: string;
  requirement: string;
  rating: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showListingForm, setShowListingForm] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
      // Load existing listings from localStorage
      const savedListings = localStorage.getItem("listings");
      if (savedListings) {
        setListings(JSON.parse(savedListings));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userPhone");
    setIsAuthenticated(false);
  };

  const handleAddListing = (listing: Listing) => {
    const updatedListings = [...listings, listing];
    setListings(updatedListings);
    localStorage.setItem("listings", JSON.stringify(updatedListings));
    setShowListingForm(false);
  };

  const handleDeleteListing = (id: string) => {
    const updatedListings = listings.filter((l) => l.id !== id);
    setListings(updatedListings);
    localStorage.setItem("listings", JSON.stringify(updatedListings));
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your mirchi listings and connect with buyers
          </p>
        </div>

        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="buyers">Buyers</TabsTrigger>
            <TabsTrigger value="bids">Bids</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            {showListingForm ? (
              <ListingForm
                onSubmit={handleAddListing}
                onCancel={() => setShowListingForm(false)}
              />
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Your Active Listings</CardTitle>
                    <Button onClick={() => setShowListingForm(true)}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Listing
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <MyListings listings={listings} onDelete={handleDeleteListing} />
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="buyers">
            <NearbyBuyers />
          </TabsContent>

          <TabsContent value="bids">
            <Card>
              <CardHeader>
                <CardTitle>Active Bids</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p>No active bids yet</p>
                  <p className="text-sm mt-2">Bids will appear here once buyers start bidding on your listings</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
