'use client';

import { useState, useEffect } from 'react';

interface CalculationResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principalAmount: number;
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
  const [loanTerm, setLoanTerm] = useState<number>(50);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [amortization, setAmortization] = useState<AmortizationRow[]>([]);
  const [showFullTable, setShowFullTable] = useState(false);

  const calculateMortgage = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = loanTerm;

    if (price <= 0 || rate <= 0 || years <= 0) return;

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    // Calculate monthly payment using mortgage formula
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
      principalAmount: principal,
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
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanTerm]);

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

            {/* Loan Term */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan Term
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setLoanTerm(30)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    loanTerm === 30
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  30 Years
                </button>
                <button
                  onClick={() => setLoanTerm(50)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    loanTerm === 50
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  50 Years
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Monthly Payment</h2>

          {result && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl font-bold mb-2">
                  {formatCurrency(result.monthlyPayment)}
                </div>
                <div className="text-blue-100 text-sm">per month</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Principal</div>
                  <div className="text-xl font-bold">{formatCurrency(result.principalAmount)}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-1">Total Interest</div>
                  <div className="text-xl font-bold">{formatCurrency(result.totalInterest)}</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-sm text-blue-100 mb-1">Total Payment</div>
                <div className="text-2xl font-bold">{formatCurrency(result.totalPayment)}</div>
                <div className="text-xs text-blue-100 mt-1">over {loanTerm} years</div>
              </div>

              {/* Payment Breakdown Chart */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-sm text-blue-100 mb-3">Payment Breakdown</div>
                <div className="flex h-8 rounded-lg overflow-hidden">
                  <div
                    className="bg-blue-400 flex items-center justify-center text-xs font-semibold"
                    style={{
                      width: `${(result.principalAmount / result.totalPayment) * 100}%`,
                    }}
                  >
                    {((result.principalAmount / result.totalPayment) * 100).toFixed(0)}%
                  </div>
                  <div
                    className="bg-orange-400 flex items-center justify-center text-xs font-semibold"
                    style={{
                      width: `${(result.totalInterest / result.totalPayment) * 100}%`,
                    }}
                  >
                    {((result.totalInterest / result.totalPayment) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-blue-400 rounded"></span>
                    Principal
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-400 rounded"></span>
                    Interest
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Amortization Table */}
      {amortization.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Amortization Schedule</h2>

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
