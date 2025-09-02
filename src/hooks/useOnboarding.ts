import { useState } from 'react';

export type BusinessGoal = 'sales' | 'hr' | 'healthcare' | 'operations' | 'support' | 'finance';
export type CompanySize = '1-10' | '11-50' | '51-200' | '200+';

interface OnboardingData {
  businessGoal?: BusinessGoal;
  companySize?: CompanySize;
  integrations: string[];
  email?: string;
}

export const useOnboarding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    integrations: []
  });
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setCurrentStep(1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setData({ integrations: [] });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const simulateLoading = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
    nextStep();
  };

  return {
    isOpen,
    currentStep,
    data,
    isLoading,
    openModal,
    closeModal,
    nextStep,
    prevStep,
    updateData,
    simulateLoading
  };
};