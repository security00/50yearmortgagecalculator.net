'use client';

import type { CalculationResult } from './mortgageTypes';

interface MortgageResultsProps {
  result30: CalculationResult | null;
  result50: CalculationResult | null;
  formatCurrency: (value: number) => string;
  formatCurrencyDetailed: (value: number) => string;
}

export function MortgageResults({
  result30,
  result50,
  formatCurrency,
  formatCurrencyDetailed,
}: MortgageResultsProps) {
  if (!result30 || !result50) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comparison: 30-Year vs 50-Year Mortgage
        </h2>
        <p className="text-gray-600 text-sm">
          Enter your loan details to see how a traditional 30-year mortgage compares to a 50-year option.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Comparison: 30-Year vs 50-Year Mortgage
      </h2>

      <div className="space-y-8">
        {/* Key Metrics Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 30-Year Column */}
          <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50">
            <h3 className="text-lg font-bold text-blue-900 mb-6">30-Year Mortgage</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Monthly Payment (P&I)</div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(result30.monthlyPayment)}
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Monthly (PITI Estimate)</div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(result30.pitiMonthly)}
                </div>
              </div>

              {result30.pmiMonthly > 0 && (
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Monthly PMI (estimated)</div>
                  <div className="text-xl font-bold text-gray-900">
                    {formatCurrencyDetailed(result30.pmiMonthly)}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatCurrency(result30.totalInterest)}
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">
                  Total Amount Paid (excluding closing costs)
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {formatCurrency(result30.totalPayment)}
                </div>
              </div>

              {result30.closingCosts > 0 && (
                <>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Closing Costs (upfront)</div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatCurrency(result30.closingCosts)}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Total Cost incl. Closing</div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatCurrency(result30.totalCostWithClosing)}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 50-Year Column */}
          <div className="border-2 border-purple-200 rounded-2xl p-6 bg-purple-50">
            <h3 className="text-lg font-bold text-purple-900 mb-6">50-Year Mortgage (Proposal)</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Monthly Payment (P&I)</div>
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

        {/* Savings vs Extra Cost Analysis */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-6">50-Year vs 30-Year Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-blue-100 mb-2">Monthly Savings</div>
              <div className="text-3xl font-bold">
                {formatCurrency(result30.monthlyPayment - result50.monthlyPayment)}
              </div>
              <div className="text-xs text-blue-100 mt-1">per month</div>
            </div>
            <div>
              <div className="text-sm text-blue-100 mb-2">Extra Interest Cost</div>
              <div className="text-3xl font-bold text-orange-300">
                {formatCurrency(result50.totalInterest - result30.totalInterest)}
              </div>
              <div className="text-xs text-blue-100 mt-1">over loan lifetime</div>
            </div>
            <div>
              <div className="text-sm text-blue-100 mb-2">Breakeven Analysis</div>
              <div className="text-3xl font-bold">
                {Math.round(
                  (result50.totalInterest - result30.totalInterest) /
                    (result30.monthlyPayment - result50.monthlyPayment),
                )}
              </div>
              <div className="text-xs text-blue-100 mt-1">months to break even</div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
          <p className="text-gray-800 text-center font-semibold">
            💡 <strong>Key Insight:</strong> You'll save{' '}
            <span className="text-blue-600">
              {(result30.monthlyPayment - result50.monthlyPayment).toFixed(0)} / month
            </span>{' '}
            with a 50-year mortgage, but pay an additional{' '}
            <span className="text-orange-600">
              $
              {(
                result50.totalInterest - result30.totalInterest
              ).toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>{' '}
            in interest. Is that trade-off worth it for your situation?
          </p>
        </div>
      </div>
    </div>
  );
}

