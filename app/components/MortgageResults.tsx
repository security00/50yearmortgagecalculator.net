'use client';

import type { CalculationResult } from './mortgageTypes';

interface MortgageResultsProps {
  result50: CalculationResult | null;
  formatCurrency: (value: number) => string;
  formatCurrencyDetailed: (value: number) => string;
}

export function MortgageResults({
  result50,
  formatCurrency,
  formatCurrencyDetailed,
}: MortgageResultsProps) {
  if (!result50) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          50-Year Mortgage Results
        </h2>
        <p className="text-gray-600 text-sm">
          Enter your loan details to see your estimated monthly payment and total cost for a 50-year fixed-rate mortgage.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        50-Year Mortgage Payment & Cost
      </h2>

      <div className="space-y-8">
        {/* 50-Year Mortgage Summary */}
        <div className="border-2 border-purple-200 rounded-2xl p-6 bg-purple-50">
          <h3 className="text-lg font-bold text-purple-900 mb-6">50-Year Mortgage (Proposal)</h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Monthly Payment (P&amp;I)</div>
              <div className="text-3xl font-bold text-gray-900">
                {formatCurrency(result50.monthlyPayment)}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Monthly (PITI Estimate)</div>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(result50.pitiMonthly)}
              </div>
            </div>

            {result50.pmiMonthly > 0 && (
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Monthly PMI (estimated)</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatCurrencyDetailed(result50.pmiMonthly)}
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Interest</div>
              <div className="text-xl font-bold text-orange-600">
                {formatCurrency(result50.totalInterest)}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">
                Total Amount Paid (excluding closing costs)
              </div>
              <div className="text-xl font-bold text-gray-900">
                {formatCurrency(result50.totalPayment)}
              </div>
            </div>

            {result50.closingCosts > 0 && (
              <>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Closing Costs (upfront)</div>
                  <div className="text-xl font-bold text-gray-900">
                    {formatCurrency(result50.closingCosts)}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Cost incl. Closing</div>
                  <div className="text-xl font-bold text-gray-900">
                    {formatCurrency(result50.totalCostWithClosing)}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
