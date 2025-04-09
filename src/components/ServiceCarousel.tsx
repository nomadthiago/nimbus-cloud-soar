
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Code, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceSlide {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceSlides: ServiceSlide[] = [
  {
    id: 1,
    title: "Salesforce Implementation",
    description: "Launch your Salesforce journey with Flying Nimbus's seamless setup and configuration.",
    icon: <Cloud className="h-12 w-12 text-nimbus-salesforce" />,
  },
  {
    id: 2,
    title: "Custom Development",
    description: "Reach new heights with tailored Salesforce apps and automation from Flying Nimbus.",
    icon: <Code className="h-12 w-12 text-nimbus-salesforce" />,
  },
  {
    id: 3,
    title: "Training & Support",
    description: "Empower your team to soar with Flying Nimbus's expert training and ongoing support.",
    icon: <Users className="h-12 w-12 text-nimbus-salesforce" />,
  },
  {
    id: 4,
    title: "Client Success Story",
    description: "Helped a retailer climb 30% in sales with Flying Nimbus's Salesforce expertise.",
    icon: <TrendingUp className="h-12 w-12 text-nimbus-salesforce" />,
  },
];

const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === serviceSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? serviceSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Salesforce Services
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {serviceSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full px-4 py-8"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="bg-blue-50 rounded-full p-5 inline-block">
                        {slide.icon}
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{slide.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{slide.description}</p>
                      <Button variant="link" className="text-nimbus-salesforce hover:text-nimbus-blue">
                        Discover More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8">
            {serviceSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 mx-1 rounded-full",
                  currentSlide === index
                    ? "bg-nimbus-salesforce"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
