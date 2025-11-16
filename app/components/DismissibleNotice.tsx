'use client';

import { useState, useEffect } from 'react';

export default function DismissibleNotice() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage for dismissal preference
    const dismissed = localStorage.getItem('importantNotice_dismissed') === 'true';
    setIsDismissed(dismissed);
  }, []);

  const handleClose = () => {
    setIsDismissed(true);
    setShowModal(false);
    localStorage.setItem('importantNotice_dismissed', 'true');
  };

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const handleShowNotice = () => {
    setIsDismissed(false);
    localStorage.removeItem('importantNotice_dismissed');
  };

  // Don't render on server side to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Compact Notice Bar - Between Hero and Calculator (Non-fixed, scrollable) */}
      {!isDismissed && (
        <div className="relative w-full bg-yellow-50 border-b-2 border-yellow-300 px-4 sm:px-6 lg:px-8 py-3 animate-in fade-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto flex gap-3 items-center justify-between">
            {/* Icon and Content */}
            <div className="flex gap-3 items-center flex-1 min-w-0">
              {/* Warning Icon */}
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-yellow-900">
                  <strong>⚠️ Important:</strong> 50-year mortgages are currently <strong>NOT available</strong> in the U.S. market. This is a proposal under review.
                  <button
                    onClick={handleLearnMore}
                    className="ml-2 text-yellow-700 hover:text-yellow-900 underline font-semibold"
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close notice"
              className="flex-shrink-0 p-1 rounded hover:bg-yellow-200 transition-colors text-yellow-600 hover:text-yellow-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill - When notice is dismissed */}
      {isDismissed && isMounted && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={handleShowNotice}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-3 rounded-full shadow-lg text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            aria-label="Show important notice"
          >
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Notice</span>
          </button>
        </div>
      )}

      {/* Full Notice Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 animate-in fade-in"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-yellow-50 border-b-2 border-yellow-300 px-6 py-4 flex items-start justify-between">
                <div className="flex gap-3 items-start flex-1">
                  <svg className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-xl font-bold text-yellow-900">Important Notice</h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 rounded hover:bg-yellow-200 transition-colors text-yellow-600 hover:text-yellow-900 flex-shrink-0"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>50-year mortgages are currently NOT available</strong> in the U.S. market. This calculator and website are dedicated to understanding the Trump administration's proposal for an extended-term mortgage and what it would mean for borrowers.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-blue-900">
                    <strong>Key Point:</strong> The 50-year mortgage proposal requires Congressional approval and significant changes to federal lending regulations (Dodd-Frank Act) before it can be implemented by lenders.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  This tool helps you understand the theoretical financial impact of a 50-year mortgage by showing:
                </p>

                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Estimated monthly payment for a 50-year fixed-rate mortgage</li>
                  <li>Total interest paid over the life of a 50-year loan</li>
                  <li>Complete amortization schedules for a 50-year term</li>
                  <li>Context against typical 30-year mortgage options discussed in our comparison and insights sections</li>
                </ul>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-sm text-orange-900">
                    <strong>Why This Matters:</strong> As housing affordability becomes increasingly challenging, many
                    people worry about taking on debt that could follow them well into retirement or feel like they are
                    “paying the bank forever.” This calculator allows you to evaluate what a 50-year mortgage would mean
                    for your specific situation before such products ever reach the market.
                  </p>
                </div>

                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  For the latest information on mortgage proposals and policies, visit <a href="/updates" className="text-blue-600 hover:text-blue-800 font-semibold">Policy Updates</a> or check the <a href="/faq" className="text-blue-600 hover:text-blue-800 font-semibold">FAQ</a>.
                </p>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-colors"
                >
                  Got it
                </button>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
