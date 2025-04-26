
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-[Inter]">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue bg-clip-text text-transparent mb-8">
                Contact Us
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
