// src/app/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ComingSoon() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mojovppk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFullName('');
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Error sending request. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBFE] via-[#F7EFF4] to-[#FFFBFE] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-5xl">
        
        {/* Top Badge - Material 3 Style */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3E5F5] rounded-full border border-[#E1BEE7]">
            <span className="w-2 h-2 bg-[#6750A4] rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#49454E]">Coming Soon</span>
          </div>
        </div>

        {/* Main Headline - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-[#1C1B1F] mb-6 sm:mb-8 leading-tight sm:leading-tight lg:leading-tight tracking-tight">
            Deep-Tech Architect,<br className="sm:hidden" /> Researcher <span className="text-[#6750A4]">&</span> Mentor
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#49454E] leading-relaxed sm:leading-relaxed max-w-3xl mx-auto font-medium px-2 sm:px-0">
            Advancing autonomous systems, edge AI, and knowledge economics in India's innovation ecosystem.
          </p>
        </div>

        {/* Newsletter Form - Material 3 Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20 border border-[#E7E0EC]">
          <div className="max-w-lg mx-auto">
            <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-[#1C1B1F] mb-8">
              Get Notified
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-[#49454E] mb-2 sm:mb-3">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-[#E7E0EC] rounded-lg sm:rounded-xl focus:outline-none focus:ring-0 focus:border-[#6750A4] text-[#1C1B1F] placeholder-[#79747E] text-sm sm:text-base transition-all bg-[#FFFBFE]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#49454E] mb-2 sm:mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-[#E7E0EC] rounded-lg sm:rounded-xl focus:outline-none focus:ring-0 focus:border-[#6750A4] text-[#1C1B1F] placeholder-[#79747E] text-sm sm:text-base transition-all bg-[#FFFBFE]"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex gap-3 p-3 sm:p-4 bg-[#FFF8F7] border border-[#FFD8D0] rounded-lg sm:rounded-2xl">
                  <svg className="w-5 h-5 text-[#B3261E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  <p className="text-[#B3261E] text-xs sm:text-sm font-medium">
                    {error}
                  </p>
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="flex gap-3 p-3 sm:p-4 bg-[#F1F8F4] border border-[#C8E6D7] rounded-lg sm:rounded-2xl">
                  <svg className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <p className="text-[#2E7D32] text-xs sm:text-sm font-medium">
                    ✓ Thank you! Check your email for updates.
                  </p>
                </div>
              )}

              {/* Submit Button - Material 3 Style */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6750A4] text-white font-semibold rounded-lg sm:rounded-2xl hover:bg-[#5A4794] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base mt-6 sm:mt-8 shadow-md hover:shadow-lg active:shadow-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span className="hidden sm:inline">Sending...</span>
                    <span className="sm:hidden">Sending</span>
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-center text-xs text-[#79747E] mt-4 sm:mt-6">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#49454E] font-semibold mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            Connect with me
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/vineethkaniyotkolarath/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3E5F5] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>

            {/* X */}
            <Link
              href="https://x.com/vineethkolarath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3E5F5] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="X"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/vineeth.kolarath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3E5F5] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.002-2.881 1.44 1.44 0 01-.002 2.88z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/VineethKaniyotKolarath/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3E5F5] text-[#6750A4] hover:bg-[#6750A4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer - Material 3 Style */}
        <div className="text-center pt-8 border-t border-[#E7E0EC]">
          <p className="text-[#1C1B1F] font-semibold mb-2 text-sm sm:text-base">
            Vineeth K Kolarath
          </p>
          <p className="text-[#49454E] text-xs sm:text-sm font-medium">
            Deep-Tech Architect | Researcher | Mentor
          </p>
          <p className="text-[#79747E] text-xs sm:text-sm mt-3">
            Koodali, Kannur District, Kerala, India
          </p>
        </div>
      </div>
    </div>
  );
}