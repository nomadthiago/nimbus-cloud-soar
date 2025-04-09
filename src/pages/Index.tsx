
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCarousel from '@/components/ServiceCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-[Inter]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
