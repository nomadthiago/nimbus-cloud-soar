
import React from 'react';
import { Button } from '@/components/ui/button';
import { CloudIcon } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 144, 255, 0.2), rgba(248, 249, 250, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CloudIcon className="h-20 w-20 text-nimbus-salesforce animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-nimbus-blue bg-clip-text text-transparent">
            Soar to Success with Flying Nimbus Salesforce Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Elevate your business with expert Salesforce consulting—streamlined operations, boosted sales, and limitless growth.
          </p>
          
          <Button className="bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue text-white text-lg py-6 px-8 rounded-full hover:shadow-lg transition-all">
            Start Your Journey
          </Button>
          
          <div className="mt-12 flex justify-center items-center">
            <img 
              src="https://www.salesforce.com/content/dam/web/en_us/www/images/home/logo-salesforce.svg" 
              alt="Salesforce Partner" 
              className="h-8 grayscale opacity-75"
            />
            <span className="mx-4 text-gray-400">|</span>
            <span className="text-sm text-gray-500">Trusted Salesforce Implementation Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
