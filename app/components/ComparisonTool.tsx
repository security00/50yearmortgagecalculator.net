'use client';

import { useState, useEffect } from 'react';

interface ComparisonResult {
  term: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export default function ComparisonTool() {
  const [homePrice, setHomePrice] = useState<string>('300000');
  const [downPayment, setDownPayment] = useState<string>('60000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [results, setResults] = useState<ComparisonResult[]>([]);

  const calculateComparison = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;

    if (price <= 0 || rate <= 0) return;

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const terms = [15, 20, 30, 40, 50];

    const comparisonResults = terms.map((years) => {
      const numberOfPayments = years * 12;
      const monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      return {
        term: years,
        monthlyPayment,
        totalPayment,
        totalInterest,
      };
    });

    setResults(comparisonResults);
  };

  useEffect(() => {
    calculateComparison();
  }, [homePrice, downPayment, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const result30 = results.find((r) => r.term === 30);
  const result50 = results.find((r) => r.term === 50);

  const monthlySavings = result30 && result50 ? result50.monthlyPayment - result30.monthlyPayment : 0;
  const totalInterestDiff = result30 && result50 ? result50.totalInterest - result30.totalInterest : 0;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison Parameters</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Home Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate</label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full pl-4 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      {result30 && result50 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-sm font-semibold mb-2 text-green-100">Monthly Payment Savings</div>
            <div className="text-4xl font-bold mb-2">{formatCurrency(Math.abs(monthlySavings))}</div>
            <div className="text-sm text-green-100">
              50-year mortgage saves {formatCurrency(Math.abs(monthlySavings))} per month compared to 30-year
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-sm font-semibold mb-2 text-orange-100">Additional Interest Cost</div>
            <div className="text-4xl font-bold mb-2">{formatCurrency(totalInterestDiff)}</div>
            <div className="text-sm text-orange-100">
              50-year mortgage costs {formatCurrency(totalInterestDiff)} more in total interest
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Loan Term</th>
                <th className="text-right py-4 px-6 font-bold text-gray-900">Monthly Payment</th>
                <th className="text-right py-4 px-6 font-bold text-gray-900">Total Interest</th>
                <th className="text-right py-4 px-6 font-bold text-gray-900">Total Payment</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr
                  key={result.term}
                  className={`border-t border-gray-100 ${
                    result.term === 30 || result.term === 50 ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">{result.term} Years</span>
                      {result.term === 30 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                          Traditional
                        </span>
                      )}
                      {result.term === 50 && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                          Trump Proposal
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-lg font-bold text-gray-900">{formatCurrency(result.monthlyPayment)}</div>
                    {index > 0 && (
                      <div className="text-xs text-gray-500">
                        {result.monthlyPayment < results[index - 1].monthlyPayment ? (
                          <span className="text-green-600">
                            ↓ {formatCurrency(results[index - 1].monthlyPayment - result.monthlyPayment)} less
                          </span>
                        ) : (
                          <span className="text-red-600">
                            ↑ {formatCurrency(result.monthlyPayment - results[index - 1].monthlyPayment)} more
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-lg font-bold text-gray-900">{formatCurrency(result.totalInterest)}</div>
                    {index > 0 && (
                      <div className="text-xs text-red-600">
                        ↑ {formatCurrency(result.totalInterest - results[index - 1].totalInterest)} more
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-lg font-bold text-gray-900">{formatCurrency(result.totalPayment)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Comparison */}
      {results.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Payment Comparison</h3>
          <div className="space-y-4">
            {results.map((result) => {
              const maxPayment = Math.max(...results.map((r) => r.monthlyPayment));
              const percentage = (result.monthlyPayment / maxPayment) * 100;

              return (
                <div key={result.term}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{result.term} Years</span>
                    <span className="font-bold text-gray-900">{formatCurrency(result.monthlyPayment)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className={`h-full flex items-center justify-end pr-3 text-white text-sm font-semibold ${
                        result.term === 30
                          ? 'bg-blue-500'
                          : result.term === 50
                          ? 'bg-purple-500'
                          : 'bg-gray-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage.toFixed(0)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
