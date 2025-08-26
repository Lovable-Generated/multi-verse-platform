import { Building, Shield, Users } from "lucide-react";
import RoleCard from "./RoleCard";

interface RoleSelectionProps {
  onRoleSelect: (role: 'public' | 'business' | 'admin') => void;
}

const RoleSelection = ({ onRoleSelect }: RoleSelectionProps) => {
  const roles = [
    {
      id: 'public' as const,
      title: 'Public User',
      description: 'Browse and discover verified businesses',
      icon: Users,
      variant: 'primary' as const,
      features: [
        'Create personal account',
        'Browse verified businesses',
        'Access public content',
        'Mobile authentication',
        'Personalized experience'
      ]
    },
    {
      id: 'business' as const,
      title: 'Business Account',
      description: 'Manage your business profile and submissions',
      icon: Building,
      variant: 'business' as const,
      features: [
        'Business profile management',
        'Content submission system',
        'File upload capabilities',
        'Submission status tracking',
        'Analytics and insights'
      ]
    },
    {
      id: 'admin' as const,
      title: 'Administrator',
      description: 'Oversee platform operations and approvals',
      icon: Shield,
      variant: 'admin' as const,
      features: [
        'Business approval workflow',
        'User management tools',
        'Content moderation',
        'Platform analytics',
        'System administration'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-luxury">Choose Your Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your exclusive access level to unlock premium features designed for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              description={role.description}
              icon={role.icon}
              features={role.features}
              variant={role.variant}
              onSelect={() => onRoleSelect(role.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;