export interface CalculationResult {
  monthlyPayment: number; // P&I only
  totalPayment: number;
  totalInterest: number;
  principalAmount: number;
  pitiMonthly: number; // Estimated PITI
  pmiMonthly: number;
  closingCosts: number;
  totalCostWithClosing: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface PresetScenario {
  id: string;
  label: string;
  homePrice: string;
  downPayment: string;
  interestRate: string;
  propertyTaxRate: string;
  homeInsuranceAnnual: string;
  hoaMonthly: string;
  pmiRate: string;
  closingCosts: string;
}

