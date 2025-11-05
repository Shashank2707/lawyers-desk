import React, { useState, useEffect } from "react";
import { Scale } from "lucide-react";

const testimonials = [
  {
    text: `"The team at Lawyers Desk handled my complex commercial dispute with exceptional professionalism and strategic thinking. Their clarity and commitment turned a stressful situation into a successful resolution. Highly recommend for any real estate matters."`,
    author: "Yogesh Bindal",
    title: "Director at NexGen Footwear Limited",
  },
  {
    text: `"Your expertise, strategic approach, and constant guidance have brought justice in my favour, and I am deeply grateful that the Hon’ble High Court has granted me bail. Your hard work and commitment have not only protected my rights but also restored my faith in justice."`,
    author: "Vikas Pawar",
    title: "",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white transition-all duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
          Client Confidence
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our Clients Say
        </p>

        {/* Animated Slide */}
        <div className="relative mt-12">
          <div
            key={currentIndex}
            className="bg-gray-50 p-8 rounded-xl shadow-xl border-l-4 border-emerald-500 transition-all duration-700 ease-in-out transform"
          >
            <p className="text-xl italic text-gray-700">{current.text}</p>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-900">
                - {current.author}{" "}
                {current.title && <span className="text-gray-600 text-base">, {current.title}</span>}
              </p>
              <Scale className="text-emerald-500 w-8 h-8 opacity-75" />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-emerald-500" : "bg-gray-300"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
