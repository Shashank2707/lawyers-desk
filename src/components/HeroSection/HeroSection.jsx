import React from 'react';

const HeroSection = ({ onConsultationClick }) => (
  <header className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-6 xl:col-span-5 mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Trusted Counsel. <span className="text-emerald-600">Clear Strategy.</span> Real Results.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-lg">
            Lawyers Desk is dedicated to providing meticulous, client-focused representation across complex legal domains.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onConsultationClick}
             className="px-8 py-3 text-lg font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Get Started Today
            </button>
            <a
              href="#practice-areas"
              className="px-8 py-3 text-lg font-semibold rounded-lg text-emerald-600 bg-white border-2 border-emerald-600 hover:bg-emerald-50 transition duration-300 ease-in-out flex justify-center items-center"
            >
              View Our Expertise
            </a>
          
          </div>

        </div>

        {/* Image/Visual */}
        <div className="lg:col-span-6 xl:col-span-7 lg:flex lg:justify-end">
          {/* Placeholder image resembling a professional legal setting or team */}
          <div className="w-full h-80 sm:h-96 lg:h-full aspect-video rounded-xl shadow-2xl overflow-hidden">
            <img 
              src="https://placehold.co/900x600/10B981/ffffff?text=Professional+Legal+Team"
              alt="Lawyers Desk Professional Team"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/900x600/10B981/ffffff?text=Professional+Legal+Team"; }} 
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;