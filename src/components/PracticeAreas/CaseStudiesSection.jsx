import react from 'react';
import { CheckCircle } from 'lucide-react';
import { caseStudies } from '../../data/constants';

const CaseStudiesSection = () => (
    <section id="case-studies" className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Proven Expertise</h2>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Our Successfully Delivered Cases
                </p>
                <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
                    We deliver clear, strategic outcomes across our core practice areas. Here are a few examples of our recent successes.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {caseStudies.map((caseStudy) => (
                    <div 
                        key={caseStudy.id} 
                        className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-emerald-500 flex flex-col h-full hover:shadow-2xl transition duration-300"
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            {caseStudy.domain}
                        </span>
                        <h3 className="mt-3 text-xl font-bold text-gray-900 leading-snug">{caseStudy.title}</h3>
                        <p className="mt-2 text-gray-600 flex-grow">{caseStudy.summary}</p>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm font-semibold text-emerald-600 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Outcome: {caseStudy.outcome}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CaseStudiesSection;