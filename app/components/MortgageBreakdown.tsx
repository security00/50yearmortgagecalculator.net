'use client';

import type { CalculationResult } from './mortgageTypes';

interface MortgageBreakdownProps {
  homePrice: string;
  downPayment: string;
  interestRate: string;
  result30: CalculationResult | null;
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
  result30,
  result50,
  taxMonthly,
  insuranceMonthlyBreakdown,
  hoaMonthlyBreakdown,
  pmiMonthlyBreakdown,
  formatCurrency,
  formatCurrencyDetailed,
}: MortgageBreakdownProps) {
  if (!result30 || !result50) {
    return null;
  }

  const generateTermComparisonData = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const principal = price - down;
    const rate = parseFloat(interestRate) || 0;
    if (price <= 0 || principal <= 0 || rate <= 0) return [];

    const monthlyRate = rate / 100 / 12;
    const years30 = 30;
    const years50 = 50;
    const monthly30 = result30.monthlyPayment;
    const monthly50 = result50.monthlyPayment;

    const targets = [5, 10, 15, 20, 25, 30, 40, 50];

    const calcMetrics = (termYears: number, monthlyPayment: number, year: number) => {
      const nTotal = termYears * 12;
      const n = Math.min(year * 12, nTotal);

      if (n === 0) {
        return { balance: principal, principalPaid: 0, interestPaid: 0 };
      }

      const pow = Math.pow(1 + monthlyRate, n);
      let balance = principal * pow - monthlyPayment * ((pow - 1) / monthlyRate);

      if (!Number.isFinite(balance) || balance < 0.01) {
        balance = 0;
      }

      const totalPaid = monthlyPayment * n;
      const principalPaid = principal - balance;
      const interestPaid = totalPaid - principalPaid;

      return { balance, principalPaid, interestPaid };
    };

    return targets.map((year) => {
      const m30 = calcMetrics(years30, monthly30, year);
      const m50 = calcMetrics(years50, monthly50, year);

      const equity30 = price - m30.balance;
      const equity50 = price - m50.balance;
      const equityAdvantage = equity30 - equity50;

      return {
        year,
        equity30,
        equity50,
        equityAdvantage,
        equity30Display: formatCurrency(equity30),
        equity50Display: formatCurrency(equity50),
        advantageDisplay: formatCurrency(equityAdvantage),
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
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">30-Year</td>
                  <td className="text-right py-3 px-4">
                    {formatCurrencyDetailed(result30.monthlyPayment)}
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
                    {formatCurrencyDetailed(result30.pitiMonthly)}
                  </td>
                </tr>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Equity Growth at Key Milestones</h2>
        <p className="text-sm text-gray-600 mb-4">
          Compare how quickly you build home equity with a 30-year versus 50-year mortgage at important checkpoints.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Year</th>
                  <th className="text-right py-3 px-4 font-bold text-blue-600">30-Year Equity</th>
                  <th className="text-right py-3 px-4 font-bold text-purple-600">50-Year Equity</th>
                  <th className="text-right py-3 px-4 font-bold text-orange-600">30-Year Advantage</th>
                </tr>
              </thead>
              <tbody>
                {generateTermComparisonData().map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.year}</td>
                    <td className="text-right py-3 px-4 text-blue-700 font-semibold">
                      {row.equity30Display}
                    </td>
                    <td className="text-right py-3 px-4 text-purple-700 font-semibold">
                      {row.equity50Display}
                    </td>
                    <td className="text-right py-3 px-4 text-orange-600 font-bold">
                      {row.advantageDisplay}
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

