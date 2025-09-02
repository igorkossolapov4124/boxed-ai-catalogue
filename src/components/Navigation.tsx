import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useOnboarding } from '@/hooks/useOnboarding';
import OnboardingModal from './OnboardingModal';
import RoleSelectionModal from './RoleSelectionModal';
import DeveloperLoginModal from './DeveloperLoginModal';
import AddAgentModal from './AddAgentModal';
import BoxedAILogo from './BoxedAILogo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoleSelectionOpen, setIsRoleSelectionOpen] = useState(false);
  const [isDeveloperLoginOpen, setIsDeveloperLoginOpen] = useState(false);
  const [isAddAgentOpen, setIsAddAgentOpen] = useState(false);
  const location = useLocation();
  const onboarding = useOnboarding();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Categories', href: '/categories' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleRoleSelection = (role: 'entrepreneur' | 'developer') => {
    setIsRoleSelectionOpen(false);
    if (role === 'entrepreneur') {
      onboarding.openModal();
    } else {
      setIsDeveloperLoginOpen(true);
    }
  };

  const handleDeveloperLoginSuccess = () => {
    setIsDeveloperLoginOpen(false);
    setIsAddAgentOpen(true);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BoxedAILogo className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              BoxedAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" size="sm" onClick={() => setIsRoleSelectionOpen(true)}>
              Sign In
            </Button>
            <Button className="gradient-primary text-white hover:opacity-90" size="sm" onClick={onboarding.openModal}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-3 pt-4">
                <Button variant="secondary" size="sm" className="flex-1" onClick={() => setIsRoleSelectionOpen(true)}>
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 gradient-primary text-white hover:opacity-90" onClick={onboarding.openModal}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Role Selection Modal */}
      <RoleSelectionModal
        isOpen={isRoleSelectionOpen}
        onClose={() => setIsRoleSelectionOpen(false)}
        onSelectEntrepreneur={() => handleRoleSelection('entrepreneur')}
        onSelectDeveloper={() => handleRoleSelection('developer')}
      />

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={onboarding.isOpen}
        onClose={onboarding.closeModal}
        currentStep={onboarding.currentStep}
        data={onboarding.data}
        isLoading={onboarding.isLoading}
        nextStep={onboarding.nextStep}
        prevStep={onboarding.prevStep}
        updateData={onboarding.updateData}
        simulateLoading={onboarding.simulateLoading}
      />

      {/* Developer Login Modal */}
      <DeveloperLoginModal
        isOpen={isDeveloperLoginOpen}
        onClose={() => setIsDeveloperLoginOpen(false)}
        onLoginSuccess={handleDeveloperLoginSuccess}
      />

      {/* Add Agent Modal */}
      <AddAgentModal
        isOpen={isAddAgentOpen}
        onClose={() => setIsAddAgentOpen(false)}
      />
    </nav>
  );
};

export default Navigation;