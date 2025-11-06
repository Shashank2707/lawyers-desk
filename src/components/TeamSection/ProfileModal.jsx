import React from 'react';
import { X, Mail, Phone } from 'lucide-react';

const ProfileModal = ({ member, onClose }) => {
    if (!member) return null;

    // Helper to get initials for the fallback avatar
    const getInitials = (name) => name.split(' ').map(n => n[0]).join('');

    return (
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[100] flex items-start md:items-center justify-center p-2 sm:p-4 transition-opacity duration-300 overflow-y-auto"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-2xl mx-auto my-4 sm:my-8 shadow-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Close button positioned absolutely to ensure it's always accessible */}
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 z-10 bg-white shadow-md"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="flex justify-between items-start mb-4 sm:mb-6 border-b pb-4 pr-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">{member.name}</h2>
                </div>

                <div className="md:flex md:space-x-8">
                    {/* Profile Picture / Avatar - Fixed */}
                    <div className="flex-shrink-0 mb-4 sm:mb-6 md:mb-0">
                        <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center border-4 border-white shadow-lg mx-auto md:mx-0 relative">
                            {member.image ? (
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                    style={{ objectPosition: 'center 20%' }}
                                    onError={(e) => {
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
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600">
                                    {getInitials(member.name)}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Profile Details */}
                    <div className="flex-grow">
                        <p className="text-lg sm:text-xl font-semibold text-emerald-600 mb-1">{member.title}</p>
                        <p className="text-sm sm:text-md text-gray-500 mb-4 italic">Specializes in: {member.specialty}</p>

                        <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{member.bio}</p>
                        
                        {/* <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-gray-800 border-t pt-3">Contact Direct</h4>
                            <div className="flex items-center text-gray-600">
                                <Mail className="w-5 h-5 mr-3 text-emerald-500" />
                                <a href={`mailto:${member.name.toLowerCase().replace(/, esq\./g, '').replace(/\s/g, '.')}@aequitas.law`} className="hover:text-emerald-600 transition">
                                    {member.name.toLowerCase().split(' ')[0]}.{member.name.toLowerCase().split(' ')[1]}@aequitas.law
                                </a>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Phone className="w-5 h-5 mr-3 text-emerald-500" />
                                <a href="tel:555-123-4567" className="hover:text-emerald-600 transition">
                                    (555) 123-4567 (Ext 101)
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 sm:mt-8 w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-md font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300 shadow-md"
                >
                    Close Profile
                </button>
            </div>
        </div>
    );
};

export default ProfileModal;