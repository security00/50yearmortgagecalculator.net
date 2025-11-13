'use client';

import { useState, useEffect } from 'react';

export default function DismissibleNotice() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage for dismissal preference
    const isDismissed = localStorage.getItem('importantNotice_dismissed');
    setIsExpanded(!isDismissed);
  }, []);

  // Handle scroll behavior - hide banner when scrolling down, show when scrolling up
  useEffect(() => {
    if (!isMounted || !isExpanded) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only hide if user has scrolled down more than 100px
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsScrollingDown(true);
          } else {
            setIsScrollingDown(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isExpanded, isMounted]);

  const handleClose = () => {
    setIsExpanded(false);
    localStorage.setItem('importantNotice_dismissed', 'true');
  };

  const handleReset = () => {
    localStorage.removeItem('importantNotice_dismissed');
    setIsExpanded(true);
    setIsScrollingDown(false);
  };

  // Don't render on server side to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Expanded Notice Banner - Smart hide on scroll down */}
      {isExpanded && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 bg-yellow-50 border-b-4 border-yellow-400 shadow-lg transition-transform duration-300 ease-in-out ${
            isScrollingDown ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
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
                <p className="text-yellow-800 text-sm md:text-base">
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

      {/* Spacer when banner is visible and expanded (to prevent content overlap) */}
      {isExpanded && (
        <div className={`h-28 sm:h-24 transition-all duration-300 ${isScrollingDown ? 'h-0' : 'h-28 sm:h-24'}`}></div>
      )}

      {/* Compact Notice Pill - Shows when dismissed or scrolled down */}
      {(!isExpanded || isScrollingDown) && isMounted && (
        <div className="fixed bottom-6 right-6 z-40 animate-in">
          <button
            onClick={handleReset}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-3 rounded-full shadow-lg text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center gap-2"
            aria-label="Show important notice"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Show Notice</span>
          </button>
        </div>
      )}
    </>
  );
}
