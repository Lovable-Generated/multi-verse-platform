import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowLeft,
  Shield,
  BarChart3,
  Eye
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const pendingReviews = [
    {
      id: 1,
      businessName: "NextGen Technologies",
      submissionType: "Business Registration",
      submittedDate: "2024-01-22",
      priority: "high"
    },
    {
      id: 2,
      businessName: "Eco Solutions Inc",
      submissionType: "Content Update",
      submittedDate: "2024-01-21",
      priority: "medium"
    },
    {
      id: 3,
      businessName: "Creative Studios LLC",
      submissionType: "Profile Verification",
      submittedDate: "2024-01-20",
      priority: "low"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Approved business registration",
      business: "TechStart Solutions",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      action: "Rejected content submission",
      business: "Green Earth Consulting",
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      action: "User account suspended",
      business: "Design Studio Pro",
      timestamp: "1 day ago"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="secondary">Low Priority</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform oversight and management</p>
          </div>
          <Button variant="outline" onClick={onBack} className="transition-smooth">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-admin mb-1">1,247</div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                </div>
                <Users className="w-8 h-8 text-admin" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-business mb-1">342</div>
                  <p className="text-sm text-muted-foreground">Businesses</p>
                </div>
                <Building className="w-8 h-8 text-business" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-600 mb-1">23</div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">5</div>
                  <p className="text-sm text-muted-foreground">Security Alerts</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-admin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-admin" />
              </div>
              <h3 className="font-semibold mb-2">Review Submissions</h3>
              <p className="text-sm text-muted-foreground mb-4">Process pending business submissions</p>
              <Button className="role-admin w-full">Start Reviewing</Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground mb-4">Manage user accounts and permissions</p>
              <Button variant="outline" className="w-full">Manage Users</Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-business/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-business" />
              </div>
              <h3 className="font-semibold mb-2">Platform Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">View detailed platform metrics</p>
              <Button variant="outline" className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Reviews */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                Pending Reviews
              </CardTitle>
              <CardDescription>Business submissions awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="flex items-center justify-between p-4 border rounded-lg transition-smooth hover:bg-muted/50">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{review.businessName}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{review.submissionType}</span>
                        <span>Submitted: {review.submittedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getPriorityBadge(review.priority)}
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-admin" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest administrative actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.business}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;