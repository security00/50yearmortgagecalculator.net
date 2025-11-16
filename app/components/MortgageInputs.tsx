'use client';

import type { PresetScenario } from './mortgageTypes';

interface MortgageInputsProps {
  homePrice: string;
  downPayment: string;
  interestRate: string;
  propertyTaxRate: string;
  homeInsuranceAnnual: string;
  hoaMonthly: string;
  pmiRate: string;
  closingCosts: string;
  downPaymentPercent: string;
  showAdvanced: boolean;
  presetScenarios: PresetScenario[];
  onHomePriceChange: (value: string) => void;
  onDownPaymentChange: (value: string) => void;
  onInterestRateChange: (value: string) => void;
  onPropertyTaxRateChange: (value: string) => void;
  onHomeInsuranceAnnualChange: (value: string) => void;
  onHoaMonthlyChange: (value: string) => void;
  onPmiRateChange: (value: string) => void;
  onClosingCostsChange: (value: string) => void;
  onToggleAdvanced: () => void;
  onApplyPreset: (scenario: PresetScenario) => void;
}

export function MortgageInputs({
  homePrice,
  downPayment,
  interestRate,
  propertyTaxRate,
  homeInsuranceAnnual,
  hoaMonthly,
  pmiRate,
  closingCosts,
  downPaymentPercent,
  showAdvanced,
  presetScenarios,
  onHomePriceChange,
  onDownPaymentChange,
  onInterestRateChange,
  onPropertyTaxRateChange,
  onHomeInsuranceAnnualChange,
  onHoaMonthlyChange,
  onPmiRateChange,
  onClosingCostsChange,
  onToggleAdvanced,
  onApplyPreset,
}: MortgageInputsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>

      {/* Preset Scenarios */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Or start with a common scenario:</p>
        <div className="flex flex-wrap gap-3">
          {presetScenarios.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => onApplyPreset(scenario)}
              className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-800 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
            >
              {scenario.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* Home Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Home Price</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => onHomePriceChange(e.target.value)}
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
              onChange={(e) => onDownPaymentChange(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
              placeholder="60000"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => onInterestRateChange(e.target.value)}
              className="w-full pl-4 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
              placeholder="6.5"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
          </div>
        </div>

        {/* Loan Term - Informational only */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term</label>
          <div className="py-3 px-4 rounded-xl font-semibold bg-purple-100 text-purple-800 text-center">
            50-Year Fixed Mortgage (600 months)
          </div>
          <p className="text-xs text-gray-600 mt-2">
            This calculator assumes a 50-year fixed-rate mortgage term.
          </p>
        </div>
      </div>

      {/* Advanced cost inputs toggle */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Advanced cost inputs</p>
            <p className="text-xs text-gray-500 mt-1">
              Optional: property tax, insurance, HOA fees, PMI, and closing costs. Defaults assume 1.2% annual tax
              and $1,200/year insurance.
            </p>
          </div>
          <button
            type="button"
            onClick={onToggleAdvanced}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {showAdvanced ? 'Hide advanced' : 'Show advanced'}
          </button>
        </div>

        {showAdvanced && (
          <div className="mt-4 space-y-6">
            {/* Property Tax (%/yr) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Property Tax Rate (annual)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  value={propertyTaxRate}
                  onChange={(e) => onPropertyTaxRateChange(e.target.value)}
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
                  onChange={(e) => onHomeInsuranceAnnualChange(e.target.value)}
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
                  onChange={(e) => onHoaMonthlyChange(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="0"
                />
              </div>
            </div>

            {/* PMI (%/yr) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                PMI Rate (annual, applied when down payment &lt; 20%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  value={pmiRate}
                  onChange={(e) => onPmiRateChange(e.target.value)}
                  className="w-full pl-4 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="0.5"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
              </div>
            </div>

            {/* Closing costs ($ one-time) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Closing Costs (one-time, not rolled into loan)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="number"
                  value={closingCosts}
                  onChange={(e) => onClosingCostsChange(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
