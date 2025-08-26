import { Button } from "@/components/ui/button";
import { Building, Shield, Users } from "lucide-react";

interface HeaderProps {
  onRoleSelect?: (role: 'public' | 'business' | 'admin') => void;
}

const Header = ({ onRoleSelect }: HeaderProps) => {
  return (
    <header className="border-b bg-card shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BusinessHub</h1>
              <p className="text-xs text-muted-foreground">Multi-Role Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRoleSelect?.('public')}
              className="transition-smooth hover:bg-primary/10"
            >
              <Users className="w-4 h-4 mr-2" />
              Public Access
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRoleSelect?.('business')}
              className="transition-smooth hover:bg-business/10 hover:text-business"
            >
              <Building className="w-4 h-4 mr-2" />
              Business
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRoleSelect?.('admin')}
              className="transition-smooth hover:bg-admin/10 hover:text-admin"
            >
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;