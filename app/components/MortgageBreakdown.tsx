'use client';

import type { CalculationResult } from './mortgageTypes';

interface MortgageBreakdownProps {
  homePrice: string;
  downPayment: string;
  interestRate: string;
  result50: CalculationResult | null;
  taxMonthly: number;
  insuranceMonthlyBreakdown: number;
  hoaMonthlyBreakdown: number;
  pmiMonthlyBreakdown: number;
  formatCurrency: (value: number) => string;
  formatCurrencyDetailed: (value: number) => string;
}

export function MortgageBreakdown({
  homePrice,
  downPayment,
  interestRate,
  result50,
  taxMonthly,
  insuranceMonthlyBreakdown,
  hoaMonthlyBreakdown,
  pmiMonthlyBreakdown,
  formatCurrency,
  formatCurrencyDetailed,
}: MortgageBreakdownProps) {
  if (!result50) {
    return null;
  }

  const generateEquityData = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const principal = price - down;
    const rate = parseFloat(interestRate) || 0;
    if (price <= 0 || principal <= 0 || rate <= 0) return [];

    const monthlyRate = rate / 100 / 12;
    const termYears = 50;
    const monthlyPayment = result50.monthlyPayment;
    const totalMonths = termYears * 12;

    const targets = [5, 10, 15, 20, 25, 30, 40, 50];

    const calcBalance = (year: number) => {
      const n = Math.min(year * 12, totalMonths);

      if (n === 0) {
        return principal;
      }

      const pow = Math.pow(1 + monthlyRate, n);
      let balance = principal * pow - monthlyPayment * ((pow - 1) / monthlyRate);

      if (!Number.isFinite(balance) || balance < 0.01) {
        balance = 0;
      }

      return balance;
    };

    return targets.map((year) => {
      const balance = calcBalance(year);
      const equity = price - balance;

      return {
        year,
        equity,
        balance,
        equityDisplay: formatCurrency(equity),
        balanceDisplay: formatCurrency(balance),
      };
    });
  };

  return (
    <section className="mt-10 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Detailed Monthly Payment Breakdown</h2>
        <p className="text-sm text-gray-600 mb-4">
          See exactly how your monthly payment is split between principal &amp; interest and other ongoing housing
          costs.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Term</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">Principal &amp; Interest</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">Property Tax</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">Insurance</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">HOA</th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">PMI</th>
                  <th className="text-right py-3 px-4 font-bold text-blue-700">Total PITI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">50-Year</td>
                  <td className="text-right py-3 px-4">
                    {formatCurrencyDetailed(result50.monthlyPayment)}
                  </td>
                  <td className="text-right py-3 px-4">
                    {formatCurrencyDetailed(taxMonthly)}
                  </td>
                  <td className="text-right py-3 px-4">
                    {formatCurrencyDetailed(insuranceMonthlyBreakdown)}
                  </td>
                  <td className="text-right py-3 px-4">
                    {formatCurrencyDetailed(hoaMonthlyBreakdown)}
                  </td>
                  <td className="text-right py-3 px-4">
                    {pmiMonthlyBreakdown > 0
                      ? formatCurrencyDetailed(pmiMonthlyBreakdown)
                      : '$0.00'}
                  </td>
                  <td className="text-right py-3 px-4 font-bold text-blue-700">
                    {formatCurrencyDetailed(result50.pitiMonthly)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Equity Growth with a 50-Year Mortgage</h2>
        <p className="text-sm text-gray-600 mb-4">
          See how your home equity grows over time with a 50-year fixed-rate mortgage at important checkpoints.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Year</th>
                  <th className="text-right py-3 px-4 font-bold text-purple-600">Equity (50-Year)</th>
                  <th className="text-right py-3 px-4 font-bold text-blue-700">Remaining Balance</th>
                </tr>
              </thead>
              <tbody>
                {generateEquityData().map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.year}</td>
                    <td className="text-right py-3 px-4 text-purple-700 font-semibold">
                      {row.equityDisplay}
                    </td>
                    <td className="text-right py-3 px-4 text-blue-700 font-bold">
                      {row.balanceDisplay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
