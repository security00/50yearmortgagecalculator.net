'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { CalculationResult, AmortizationRow, PresetScenario } from './mortgageTypes';
import { MortgageInputs } from './MortgageInputs';
import { MortgageResults } from './MortgageResults';
import { MortgageBreakdown } from './MortgageBreakdown';
import { MortgageAmortization } from './MortgageAmortization';

const presetScenarios: PresetScenario[] = [
  {
    id: 'first-time',
    label: 'First-time buyer (5% down)',
    homePrice: '300000',
    downPayment: '15000',
    interestRate: '6.5',
    propertyTaxRate: '1.2',
    homeInsuranceAnnual: '1200',
    hoaMonthly: '0',
    pmiRate: '0.8',
    closingCosts: '7000',
  },
  {
    id: 'move-up',
    label: 'Move-up buyer (20% down)',
    homePrice: '450000',
    downPayment: '90000',
    interestRate: '6.5',
    propertyTaxRate: '1.3',
    homeInsuranceAnnual: '1500',
    hoaMonthly: '50',
    pmiRate: '0.5',
    closingCosts: '9000',
  },
  {
    id: 'high-cost',
    label: 'High-cost market (10% down)',
    homePrice: '650000',
    downPayment: '65000',
    interestRate: '7.2',
    propertyTaxRate: '1.7',
    homeInsuranceAnnual: '2000',
    hoaMonthly: '150',
    pmiRate: '1.0',
    closingCosts: '12000',
  },
];

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<string>('300000');
  const [downPayment, setDownPayment] = useState<string>('60000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [result50, setResult50] = useState<CalculationResult | null>(null);
  const [propertyTaxRate, setPropertyTaxRate] = useState<string>('1.2'); // %/yr
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState<string>('1200'); // $/yr
  const [hoaMonthly, setHoaMonthly] = useState<string>('0'); // $/mo
  const [pmiRate, setPmiRate] = useState<string>('0.5'); // %/yr, applied when LTV > 80%
  const [closingCosts, setClosingCosts] = useState<string>('0'); // $ one-time
  const [amortization, setAmortization] = useState<AmortizationRow[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sp = new URLSearchParams(window.location.search);
    const get = (k: string) => sp.get(k) || undefined;
    if (get('price')) setHomePrice(get('price')!);
    if (get('down')) setDownPayment(get('down')!);
    if (get('rate')) setInterestRate(get('rate')!);
    if (get('tax')) setPropertyTaxRate(get('tax')!);
    if (get('ins')) setHomeInsuranceAnnual(get('ins')!);
    if (get('hoa')) setHoaMonthly(get('hoa')!);
    if (get('pmi')) setPmiRate(get('pmi')!);
    if (get('close')) setClosingCosts(get('close')!);
  }, []);

  // Persist state to URL (shareable link)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    params.set('price', homePrice);
    params.set('down', downPayment);
    params.set('rate', interestRate);
    if (propertyTaxRate) params.set('tax', propertyTaxRate);
    if (homeInsuranceAnnual) params.set('ins', homeInsuranceAnnual);
    if (hoaMonthly) params.set('hoa', hoaMonthly);
     if (pmiRate) params.set('pmi', pmiRate);
     if (closingCosts) params.set('close', closingCosts);
    const url = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
  }, [homePrice, downPayment, interestRate, propertyTaxRate, homeInsuranceAnnual, hoaMonthly, pmiRate, closingCosts, pathname]);

  const calculateMortgage = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;
    const pmiPercent = parseFloat(pmiRate) || 0;
    const closingCostsValue = parseFloat(closingCosts) || 0;

    if (price <= 0 || rate <= 0) return;

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const ltv = principal > 0 && price > 0 ? principal / price : 0;
    let pmiMonthly = 0;
    if (pmiPercent > 0 && ltv > 0.8) {
      const annualPmi = (pmiPercent / 100) * principal;
      pmiMonthly = annualPmi / 12;
    }

    // Calculate for 50 years (primary focus of this calculator)
    const years = 50;
    const numberOfPayments = years * 12;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    const taxMonthly = ((parseFloat(propertyTaxRate) || 0) / 100) * price / 12;
    const insuranceMonthly = (parseFloat(homeInsuranceAnnual) || 0) / 12;
    const hoa = parseFloat(hoaMonthly) || 0;
    const pitiMonthly = monthlyPayment + taxMonthly + insuranceMonthly + hoa + pmiMonthly;

    setResult50({
      monthlyPayment,
      totalPayment,
      totalInterest,
      principalAmount: principal,
      pitiMonthly,
      pmiMonthly,
      closingCosts: closingCostsValue,
      totalCostWithClosing: totalPayment + closingCostsValue,
    });

    // Generate amortization schedule for the 50-year term
    const schedule: AmortizationRow[] = [];
    let balance = principal;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }

    setAmortization(schedule);
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, propertyTaxRate, homeInsuranceAnnual, hoaMonthly, pmiRate, closingCosts]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCurrencyDetailed = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const downPaymentPercent = ((parseFloat(downPayment) / parseFloat(homePrice)) * 100).toFixed(1);

  const priceForBreakdown = parseFloat(homePrice) || 0;
  const taxMonthly = ((parseFloat(propertyTaxRate) || 0) / 100) * priceForBreakdown / 12;
  const insuranceMonthlyBreakdown = (parseFloat(homeInsuranceAnnual) || 0) / 12;
  const hoaMonthlyBreakdown = parseFloat(hoaMonthly) || 0;
  const pmiMonthlyBreakdown = result50?.pmiMonthly ?? 0;

  return (
    <div className="w-full max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto space-y-8">
      {/* Input Section */}
      <MortgageInputs
        homePrice={homePrice}
        downPayment={downPayment}
        interestRate={interestRate}
        propertyTaxRate={propertyTaxRate}
        homeInsuranceAnnual={homeInsuranceAnnual}
        hoaMonthly={hoaMonthly}
        pmiRate={pmiRate}
        closingCosts={closingCosts}
        downPaymentPercent={downPaymentPercent}
        showAdvanced={showAdvanced}
        presetScenarios={presetScenarios}
        onHomePriceChange={setHomePrice}
        onDownPaymentChange={setDownPayment}
        onInterestRateChange={setInterestRate}
        onPropertyTaxRateChange={setPropertyTaxRate}
        onHomeInsuranceAnnualChange={setHomeInsuranceAnnual}
        onHoaMonthlyChange={setHoaMonthly}
        onPmiRateChange={setPmiRate}
        onClosingCostsChange={setClosingCosts}
        onToggleAdvanced={() => setShowAdvanced((prev) => !prev)}
        onApplyPreset={(scenario) => {
          setHomePrice(scenario.homePrice);
          setDownPayment(scenario.downPayment);
          setInterestRate(scenario.interestRate);
          setPropertyTaxRate(scenario.propertyTaxRate);
          setHomeInsuranceAnnual(scenario.homeInsuranceAnnual);
          setHoaMonthly(scenario.hoaMonthly);
          setPmiRate(scenario.pmiRate);
          setClosingCosts(scenario.closingCosts);
          setShowAdvanced(true);
        }}
      />

      {/* Results Section */}
      <MortgageResults
        result50={result50}
        formatCurrency={formatCurrency}
        formatCurrencyDetailed={formatCurrencyDetailed}
      />

      {/* Detailed payment & equity breakdown */}
      <MortgageBreakdown
        homePrice={homePrice}
        downPayment={downPayment}
        interestRate={interestRate}
        result50={result50}
        taxMonthly={taxMonthly}
        insuranceMonthlyBreakdown={insuranceMonthlyBreakdown}
        hoaMonthlyBreakdown={hoaMonthlyBreakdown}
        pmiMonthlyBreakdown={pmiMonthlyBreakdown}
        formatCurrency={formatCurrency}
        formatCurrencyDetailed={formatCurrencyDetailed}
      />

      {/* Amortization Visualization Section */}
      <MortgageAmortization
        amortization={amortization}
        homePrice={homePrice}
        formatCurrency={formatCurrency}
        formatCurrencyDetailed={formatCurrencyDetailed}
      />
    </div>
  );
}
