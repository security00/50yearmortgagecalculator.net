'use client';

import { useState, useEffect } from 'react';

export default function DismissibleNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage for dismissal preference
    const isDismissed = localStorage.getItem('importantNotice_dismissed');
    setIsVisible(!isDismissed);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('importantNotice_dismissed', 'true');
  };

  const handleReset = () => {
    localStorage.removeItem('importantNotice_dismissed');
    setIsVisible(true);
  };

  // Don't render on server side to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Dismissible Notice Banner */}
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-50 border-b-4 border-yellow-400 shadow-lg animate-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-4 items-start">
              {/* Warning Icon */}
              <div className="flex-shrink-0 mt-0.5">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-900 mb-1">Important Notice</h3>
                <p className="text-yellow-800">
                  <strong>50-year mortgages are currently NOT available</strong> in the U.S. market. This calculator helps you understand the Trump administration's proposal, which requires Congressional approval and changes to federal lending regulations (Dodd-Frank Act) to implement. Use this tool to evaluate the theoretical financial impact and compare it with actual 30-year mortgage options available today.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close notice"
                className="flex-shrink-0 mt-0.5 p-1 rounded-lg hover:bg-yellow-200 transition-colors text-yellow-600 hover:text-yellow-900"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer when banner is visible (to prevent content overlap) */}
      {isVisible && <div className="h-32 sm:h-28 md:h-24"></div>}

      {/* Show button when dismissed (optional - allows user to re-show notice) */}
      {!isVisible && isMounted && (
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={handleReset}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition-colors"
            aria-label="Show important notice"
          >
            Show Notice
          </button>
        </div>
      )}
    </>
  );
}
