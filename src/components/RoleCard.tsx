import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  variant: 'primary' | 'business' | 'admin';
  onSelect: () => void;
}

const RoleCard = ({ title, description, icon: Icon, features, variant, onSelect }: RoleCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'business':
        return 'hover:shadow-[0_8px_30px_-8px_hsl(var(--business)/0.3)] border-business/20';
      case 'admin':
        return 'hover:shadow-[0_8px_30px_-8px_hsl(var(--admin)/0.3)] border-admin/20';
      default:
        return 'hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.3)] border-primary/20';
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case 'business':
        return 'role-business';
      case 'admin':
        return 'role-admin';
      default:
        return 'role-user';
    }
  };

  return (
    <Card className={`transition-smooth cursor-pointer ${getVariantClasses()}`} onClick={onSelect}>
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${getButtonVariant()}`}>
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className={`w-full transition-bounce ${getButtonVariant()}`} onClick={onSelect}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoleCard;