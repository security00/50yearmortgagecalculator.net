'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface CalculationResult {
  monthlyPayment: number; // P&I only
  totalPayment: number;
  totalInterest: number;
  principalAmount: number;
  pitiMonthly: number; // Estimated PITI
}

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<string>('300000');
  const [downPayment, setDownPayment] = useState<string>('60000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [result30, setResult30] = useState<CalculationResult | null>(null);
  const [result50, setResult50] = useState<CalculationResult | null>(null);
  const [propertyTaxRate, setPropertyTaxRate] = useState<string>('1.2'); // %/yr
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState<string>('1200'); // $/yr
  const [hoaMonthly, setHoaMonthly] = useState<string>('0'); // $/mo
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [amortization, setAmortization] = useState<AmortizationRow[]>([]);
  const [showFullTable, setShowFullTable] = useState(false);
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
    const url = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
  }, [homePrice, downPayment, interestRate, propertyTaxRate, homeInsuranceAnnual, hoaMonthly, pathname]);

  const calculateMortgage = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;

    if (price <= 0 || rate <= 0) return;

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;

    // Calculate for 30 years
    {
      const years = 30;
      const numberOfPayments = years * 12;

      const monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      const taxMonthly = ((parseFloat(propertyTaxRate) || 0) / 100) * price / 12;
      const insuranceMonthly = (parseFloat(homeInsuranceAnnual) || 0) / 12;
      const hoa = parseFloat(hoaMonthly) || 0;
      const pitiMonthly = monthlyPayment + taxMonthly + insuranceMonthly + hoa;

      setResult30({
        monthlyPayment,
        totalPayment,
        totalInterest,
        principalAmount: principal,
        pitiMonthly,
      });

      // Generate amortization schedule
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
    }

    // Calculate for 50 years
    {
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
      const pitiMonthly = monthlyPayment + taxMonthly + insuranceMonthly + hoa;

      setResult50({
        monthlyPayment,
        totalPayment,
        totalInterest,
        principalAmount: principal,
        pitiMonthly,
      });
    }

    setResult(null); // Keep for backward compatibility
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, propertyTaxRate, homeInsuranceAnnual, hoaMonthly]);

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

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Shareable link copied!');
    } catch {}
  };

  const exportCSV = () => {
    const header = ['Month', 'Payment', 'Principal', 'Interest', 'Balance'];
    const rows = amortization.map((r) => [
      r.month,
      r.payment.toFixed(2),
      r.principal.toFixed(2),
      r.interest.toFixed(2),
      r.balance.toFixed(2),
    ]);
    const csv = [header, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `amortization_${loanTerm}yr_${homePrice}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const downPaymentPercent = ((parseFloat(downPayment) / parseFloat(homePrice)) * 100).toFixed(1);

  const displayedRows = showFullTable ? amortization : amortization.slice(0, 12);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>

          <div className="space-y-6">
            {/* Home Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Home Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="300000"
                />
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="60000"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Interest Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full pl-4 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="6.5"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
              </div>
            </div>

            {/* Loan Term - Informational only now */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Comparison
              </label>
              <div className="flex gap-3">
                <div className="flex-1 py-3 px-4 rounded-xl font-semibold bg-blue-100 text-blue-800 text-center">
                  30 Years
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1 py-3 px-4 rounded-xl font-semibold bg-purple-100 text-purple-800 text-center">
                  50 Years
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">This calculator always shows both terms for comparison</p>
            </div>

            {/* Property Tax (%/yr) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Property Tax Rate (annual)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  value={propertyTaxRate}
                  onChange={(e) => setPropertyTaxRate(e.target.value)}
                  className="w-full pl-4 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="1.2"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
              </div>
            </div>

            {/* Homeowners Insurance ($/yr) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Homeowners Insurance (annual)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={homeInsuranceAnnual}
                  onChange={(e) => setHomeInsuranceAnnual(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="1200"
                />
              </div>
            </div>

            {/* HOA ($/mo) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">HOA Fees (monthly)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={hoaMonthly}
                  onChange={(e) => setHoaMonthly(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Comparison: 30-Year vs 50-Year Mortgage</h2>

          {result30 && result50 && (
            <div className="space-y-8">
              {/* Key Metrics Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 30-Year Column */}
                <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50">
                  <h3 className="text-lg font-bold text-blue-900 mb-6">30-Year Mortgage</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Monthly Payment (P&I)</div>
                      <div className="text-3xl font-bold text-gray-900">{formatCurrency(result30.monthlyPayment)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Monthly (PITI Estimate)</div>
                      <div className="text-2xl font-bold text-gray-900">{formatCurrency(result30.pitiMonthly)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                      <div className="text-xl font-bold text-gray-900">{formatCurrency(result30.totalInterest)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Total Amount Paid</div>
                      <div className="text-xl font-bold text-gray-900">{formatCurrency(result30.totalPayment)}</div>
                    </div>
                  </div>
                </div>

                {/* 50-Year Column */}
                <div className="border-2 border-purple-200 rounded-2xl p-6 bg-purple-50">
                  <h3 className="text-lg font-bold text-purple-900 mb-6">50-Year Mortgage (Proposal)</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Monthly Payment (P&I)</div>
                      <div className="text-3xl font-bold text-gray-900">{formatCurrency(result50.monthlyPayment)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Monthly (PITI Estimate)</div>
                      <div className="text-2xl font-bold text-gray-900">{formatCurrency(result50.pitiMonthly)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                      <div className="text-xl font-bold text-orange-600">{formatCurrency(result50.totalInterest)}</div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Total Amount Paid</div>
                      <div className="text-xl font-bold text-gray-900">{formatCurrency(result50.totalPayment)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings vs Extra Cost Analysis */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-6">50-Year vs 30-Year Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-blue-100 mb-2">Monthly Savings</div>
                    <div className="text-3xl font-bold">{formatCurrency(result30.monthlyPayment - result50.monthlyPayment)}</div>
                    <div className="text-xs text-blue-100 mt-1">per month</div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-100 mb-2">Extra Interest Cost</div>
                    <div className="text-3xl font-bold text-orange-300">{formatCurrency(result50.totalInterest - result30.totalInterest)}</div>
                    <div className="text-xs text-blue-100 mt-1">over loan lifetime</div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-100 mb-2">Breakeven Analysis</div>
                    <div className="text-3xl font-bold">
                      {Math.round((result50.totalInterest - result30.totalInterest) / (result30.monthlyPayment - result50.monthlyPayment))}
                    </div>
                    <div className="text-xs text-blue-100 mt-1">months to break even</div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <p className="text-gray-800 text-center font-semibold">
                  💡 <strong>Key Insight:</strong> You'll save <span className="text-blue-600">${(result30.monthlyPayment - result50.monthlyPayment).toFixed(0)}/month</span> with a 50-year mortgage,
                  but pay an additional <span className="text-orange-600">${(result50.totalInterest - result30.totalInterest).toLocaleString('en-US', {maximumFractionDigits: 0})}</span> in interest.
                  Is that trade-off worth it for your situation?
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Amortization Table */}
      {amortization.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Amortization Schedule</h2>
            <div className="flex gap-3">
              <button
                onClick={copyShareLink}
                className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 border border-blue-200"
              >
                Copy Share Link
              </button>
              <button
                onClick={exportCSV}
                className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 border border-gray-200"
              >
                Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Month</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Payment</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Principal</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Interest</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Balance</th>
                </tr>
              </thead>
              <tbody>
                {displayedRows.map((row) => (
                  <tr key={row.month} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.month}</td>
                    <td className="py-3 px-4 text-right text-gray-900">{formatCurrencyDetailed(row.payment)}</td>
                    <td className="py-3 px-4 text-right text-gray-900">{formatCurrencyDetailed(row.principal)}</td>
                    <td className="py-3 px-4 text-right text-gray-900">{formatCurrencyDetailed(row.interest)}</td>
                    <td className="py-3 px-4 text-right text-gray-900 font-medium">{formatCurrency(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!showFullTable && amortization.length > 12 && (
            <button
              onClick={() => setShowFullTable(true)}
              className="mt-4 w-full py-3 bg-blue-50 text-blue-600 font-semibold rounded-xl hover:bg-blue-100 transition-colors"
            >
              Show Full Schedule ({amortization.length} months)
            </button>
          )}

          {showFullTable && (
            <button
              onClick={() => setShowFullTable(false)}
              className="mt-4 w-full py-3 bg-gray-50 text-gray-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
