import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle, 
  ArrowLeft,
  BarChart3,
  Settings
} from "lucide-react";

interface BusinessDashboardProps {
  onBack: () => void;
}

const BusinessDashboard = ({ onBack }: BusinessDashboardProps) => {
  const submissions = [
    {
      id: 1,
      title: "Business Profile Update",
      type: "Profile",
      status: "approved",
      submittedDate: "2024-01-15",
      reviewedDate: "2024-01-17"
    },
    {
      id: 2,
      title: "Product Showcase Materials",
      type: "Content",
      status: "pending",
      submittedDate: "2024-01-20",
      reviewedDate: null
    },
    {
      id: 3,
      title: "Company Certifications",
      type: "Documents",
      status: "rejected",
      submittedDate: "2024-01-18",
      reviewedDate: "2024-01-19"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-business/10 text-business border-business/20"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'pending':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Business Dashboard</h1>
            <p className="text-muted-foreground">Manage your business profile and submissions</p>
          </div>
          <Button variant="outline" onClick={onBack} className="transition-smooth">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-business/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-business" />
              </div>
              <h3 className="font-semibold mb-2">New Submission</h3>
              <p className="text-sm text-muted-foreground mb-4">Submit content for review</p>
              <Button className="role-business w-full">Create Submission</Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">View performance metrics</p>
              <Button variant="outline" className="w-full">View Analytics</Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-smooth hover:shadow-medium cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-admin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-admin" />
              </div>
              <h3 className="font-semibold mb-2">Profile Settings</h3>
              <p className="text-sm text-muted-foreground mb-4">Manage business profile</p>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-business" />
              Recent Submissions
            </CardTitle>
            <CardDescription>Track the status of your submitted content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg transition-smooth hover:bg-muted/50">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{submission.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Type: {submission.type}</span>
                      <span>Submitted: {submission.submittedDate}</span>
                      {submission.reviewedDate && (
                        <span>Reviewed: {submission.reviewedDate}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(submission.status)}
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-business mb-2">12</div>
              <p className="text-sm text-muted-foreground">Total Submissions</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">8</div>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground mb-2">2</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-destructive mb-2">2</div>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;