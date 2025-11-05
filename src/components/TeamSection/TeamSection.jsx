import React from 'react';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '../../data/constants';

const TeamSection = ({ onViewProfile }) => (
  <section id="team" className="py-20 sm:py-28 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Attorneys</h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Meet the Dedicated Legal Team
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
            {/* Fixed Team Member Image */}
            <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-md relative">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                  onError={(e) => {
                    // Fallback to initials
                    e.target.style.display = 'none';
                    const fallback = e.target.parentNode.querySelector('.image-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback element */}
              <div 
                className={`image-fallback h-full w-full bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center ${
                  member.image ? 'hidden' : 'flex'
                }`}
              >
                <span className="text-2xl font-bold text-emerald-600">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-emerald-600 font-medium">{member.title}</p>
            <p className="mt-2 text-gray-500 text-sm">{member.specialty}</p>
            <button 
              onClick={() => onViewProfile(member)}
              className="mt-4 text-sm font-semibold text-emerald-600 flex items-center hover:text-emerald-700 transition duration-150 group"
            >
              View Profile <ArrowRight className="ml-1 w-4 h-4 transition duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;