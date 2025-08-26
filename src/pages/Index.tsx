import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RoleSelection from '@/components/RoleSelection';
import PublicDashboard from '@/components/dashboards/PublicDashboard';
import BusinessDashboard from '@/components/dashboards/BusinessDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';

type ViewState = 'landing' | 'public' | 'business' | 'admin';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const handleRoleSelect = (role: 'public' | 'business' | 'admin') => {
    setCurrentView(role);
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
  };

  const handleGetStarted = () => {
    // Scroll to role selection or show it prominently
    const roleSection = document.getElementById('role-selection');
    if (roleSection) {
      roleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render role-specific dashboards
  if (currentView === 'public') {
    return <PublicDashboard onBack={handleBackToHome} />;
  }

  if (currentView === 'business') {
    return <BusinessDashboard onBack={handleBackToHome} />;
  }

  if (currentView === 'admin') {
    return <AdminDashboard onBack={handleBackToHome} />;
  }

  // Render landing page
  return (
    <div className="min-h-screen bg-gradient-light">
      <Header onRoleSelect={handleRoleSelect} />
      <HeroSection onGetStarted={handleGetStarted} />
      <div id="role-selection">
        <RoleSelection onRoleSelect={handleRoleSelect} />
      </div>
      
      {/* Footer */}
      <footer className="bg-card/5 border-t border-border/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-luxury">Ready to Experience Luxury?</h3>
            <p className="text-muted-foreground mb-6">
              Join our exclusive platform today and elevate your business collaboration experience.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Luxury Business Platform. Crafted with excellence for sophisticated business solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
