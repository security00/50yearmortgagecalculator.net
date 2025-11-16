'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { AmortizationRow } from './mortgageTypes';

interface MortgageAmortizationProps {
  amortization: AmortizationRow[];
  homePrice: string;
  formatCurrency: (value: number) => string;
  formatCurrencyDetailed: (value: number) => string;
}

export function MortgageAmortization({
  amortization,
  homePrice,
  formatCurrency,
  formatCurrencyDetailed,
}: MortgageAmortizationProps) {
  const [showFullTable, setShowFullTable] = useState(false);

  if (amortization.length === 0) {
    return null;
  }

  const generateYearSummary = () => {
    const summary = [];
    const totalYears =
      amortization.length > 0 ? Math.ceil(amortization[amortization.length - 1].month / 12) : 0;
    for (let year = 1; year <= totalYears; year++) {
      const monthStart = (year - 1) * 12 + 1;
      const monthEnd = year * 12;
      const yearData = amortization.slice(monthStart - 1, monthEnd);

      if (yearData.length > 0) {
        const yearPrincipal = yearData.reduce((sum, row) => sum + row.principal, 0);
        const yearInterest = yearData.reduce((sum, row) => sum + row.interest, 0);
        const endBalance = yearData[yearData.length - 1]?.balance || 0;

        summary.push({
          year,
          principal: Math.round(yearPrincipal),
          interest: Math.round(yearInterest),
          balance: Math.round(endBalance),
          principalDisplay: formatCurrency(yearPrincipal),
          interestDisplay: formatCurrency(yearInterest),
          balanceDisplay: formatCurrency(endBalance),
        });
      }
    }
    return summary;
  };

  const generateChartData = () => {
    return amortization
      .filter((row) => row.month % 6 === 0)
      .map((row) => ({
        month: row.month,
        monthLabel: `Month ${row.month}`,
        year: Math.ceil(row.month / 12),
        balance: Math.round(row.balance),
        principal: Math.round(row.principal),
        interest: Math.round(row.interest),
      }));
  };

  const generateCumulativeData = () => {
    let cumulativePrincipal = 0;
    let cumulativeInterest = 0;

    return amortization
      .filter((row) => row.month % 12 === 0)
      .map((row) => {
        cumulativePrincipal += row.principal;
        cumulativeInterest += row.interest;
        return {
          month: row.month,
          year: row.month / 12,
          cumulativePrincipal: Math.round(cumulativePrincipal),
          cumulativeInterest: Math.round(cumulativeInterest),
          balance: Math.round(row.balance),
        };
      });
  };

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Shareable link copied!');
    } catch {
      // ignore clipboard errors
    }
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
    a.download = `amortization_50yr_${homePrice}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const displayedRows = showFullTable ? amortization : amortization.slice(0, 12);

  return (
    <div className="mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Amortization Schedule (50-Year)</h2>
              <p className="text-sm text-gray-600">Visual breakdown of your mortgage payments over time</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={copyShareLink}
                className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 border border-blue-200 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Share
              </button>
              <button
                onClick={exportCSV}
                className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 border border-gray-200 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CSV
              </button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Loan Balance Over Time */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Loan Balance Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={generateChartData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottomRight', offset: -5 }}
                    stroke="#6b7280"
                  />
                  <YAxis
                    label={{ value: 'Balance ($)', angle: -90, position: 'insideLeft' }}
                    stroke="#6b7280"
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-600 mt-3">Shows remaining loan balance at 6-month intervals</p>
            </div>

            {/* Principal vs Interest Cumulative */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cumulative Principal & Interest</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={generateCumulativeData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="year"
                    label={{ value: 'Year', position: 'insideBottomRight', offset: -5 }}
                    stroke="#6b7280"
                  />
                  <YAxis
                    label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                    stroke="#6b7280"
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Legend verticalAlign="top" height={36} wrapperStyle={{ paddingBottom: '10px' }} />
                  <Area
                    type="monotone"
                    dataKey="cumulativePrincipal"
                    stackId="1"
                    stroke="#10b981"
                    fill="#d1fae5"
                    name="Principal Paid"
                    isAnimationActive={true}
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulativeInterest"
                    stackId="1"
                    stroke="#f97316"
                    fill="#fed7aa"
                    name="Interest Paid"
                    isAnimationActive={true}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-600 mt-3">Shows cumulative principal and interest payments by year</p>
            </div>
          </div>

          {/* Year-by-Year Summary Table */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Year-by-Year Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Year</th>
                    <th className="text-right py-3 px-4 font-bold text-green-700">Principal Paid</th>
                    <th className="text-right py-3 px-4 font-bold text-orange-700">Interest Paid</th>
                    <th className="text-right py-3 px-4 font-bold text-blue-700">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {generateYearSummary().map((yearData, index) => (
                    <tr
                      key={yearData.year}
                      className={`border-b border-gray-100 hover:bg-purple-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="py-3 px-4 font-semibold text-gray-900">Year {yearData.year}</td>
                      <td className="text-right py-3 px-4">
                        <span className="text-green-700 font-semibold">{yearData.principalDisplay}</span>
                      </td>
                      <td className="text-right py-3 px-4">
                        <span className="text-orange-700 font-semibold">{yearData.interestDisplay}</span>
                      </td>
                      <td className="text-right py-3 px-4">
                        <span className="text-blue-700 font-bold">{yearData.balanceDisplay}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly schedule */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Payment Breakdown</h3>
            <p className="text-sm text-gray-600 mb-4">
              Detailed month-by-month payment schedule (showing first 12 months)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900 rounded-tl-lg">Month</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Payment</th>
                    <th className="text-right py-4 px-4 font-bold text-green-700">
                      <div className="flex items-center justify-end gap-1">
                        <span>Principal</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-right py-4 px-4 font-bold text-orange-700">
                      <div className="flex items-center justify-end gap-1">
                        <span>Interest</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900 rounded-tr-lg">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedRows.map((row) => {
                    const principalPercent = (row.principal / row.payment) * 100;
                    const interestPercent = (row.interest / row.payment) * 100;
                    const isYearEnd = row.month % 12 === 0;

                    return (
                      <tr
                        key={row.month}
                        className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                          isYearEnd ? 'bg-blue-50/50 font-semibold' : ''
                        }`}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`${
                                isYearEnd ? 'text-blue-700 font-bold' : 'text-gray-900 font-medium'
                              }`}
                            >
                              {row.month}
                            </span>
                            {isYearEnd && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                                Year {row.month / 12}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right text-gray-900 font-medium">
                          {formatCurrencyDetailed(row.payment)}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-green-700 font-semibold">
                              {formatCurrencyDetailed(row.principal)}
                            </span>
                            <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-1.5">
                              <div
                                className="bg-green-500 h-1.5 rounded-full transition-all"
                                style={{ width: `${principalPercent}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-orange-700 font-semibold">
                              {formatCurrencyDetailed(row.interest)}
                            </span>
                            <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-1.5">
                              <div
                                className="bg-orange-500 h-1.5 rounded-full transition-all"
                                style={{ width: `${interestPercent}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-gray-900 font-bold">{formatCurrency(row.balance)}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong className="text-green-700">Principal:</strong> Reduces loan balance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong className="text-orange-700">Interest:</strong> Cost of borrowing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong className="text-blue-700">Year markers:</strong> Annual milestones
                  </span>
                </div>
              </div>
            </div>

            {!showFullTable && amortization.length > 12 && (
              <button
                onClick={() => setShowFullTable(true)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-bold rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all border-2 border-blue-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Show Full Schedule ({amortization.length} months / {amortization.length / 12} years)
              </button>
            )}

            {showFullTable && (
              <button
                onClick={() => setShowFullTable(false)}
                className="mt-6 w-full py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Show Less
              </button>
            )}
          </div>
        </div>
    </div>
  );
}
