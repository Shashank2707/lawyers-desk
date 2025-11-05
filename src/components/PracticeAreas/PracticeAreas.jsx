import React from 'react';
import { practiceAreas } from '../../data/constants';

const PracticeAreas = () => (
  <section id="practice-areas" className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Specialties</h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Areas of Expert Legal Practice
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          We combine deep legal knowledge with a clear understanding of our clients' commercial objectives.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {practiceAreas.map((area) => (
          <div key={area.title} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <area.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
            <p className="text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;