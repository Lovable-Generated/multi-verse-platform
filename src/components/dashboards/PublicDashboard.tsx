import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Star, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PublicDashboardProps {
  onBack: () => void;
}

const PublicDashboard = ({ onBack }: PublicDashboardProps) => {
  const featuredBusinesses = [
    {
      id: 1,
      name: "TechStart Solutions",
      category: "Technology",
      rating: 4.8,
      location: "San Francisco, CA",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      name: "Green Earth Consulting",
      category: "Environmental",
      rating: 4.9,
      location: "Portland, OR",
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      name: "Creative Design Studio",
      category: "Design",
      rating: 4.7,
      location: "New York, NY",
      lastUpdated: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Public Dashboard</h1>
            <p className="text-muted-foreground">Discover and explore verified businesses</p>
          </div>
          <Button variant="outline" onClick={onBack} className="transition-smooth">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2 text-primary" />
              Find Businesses
            </CardTitle>
            <CardDescription>Search through our verified business directory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input 
                placeholder="Search businesses, categories, or locations..." 
                className="flex-1 transition-smooth focus:ring-2 focus:ring-primary/20"
              />
              <Button className="role-user px-8">Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Businesses */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <Card key={business.id} className="transition-smooth hover:shadow-medium cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{business.name}</CardTitle>
                      <CardDescription>{business.category}</CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-primary mr-1" />
                      <span className="text-sm font-medium">{business.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {business.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      Updated {business.lastUpdated}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 transition-smooth hover:bg-primary/5">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <p className="text-muted-foreground">Verified Businesses</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-business mb-2">15</div>
              <p className="text-muted-foreground">Business Categories</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-admin mb-2">98%</div>
              <p className="text-muted-foreground">Approval Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;