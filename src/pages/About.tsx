
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CloudIcon, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col font-[Inter]">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-r from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue bg-clip-text text-transparent mb-6">
                    Welcome to Flying Nimbus – Your Salesforce Partner in the Cloud
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      At Flying Nimbus, we're more than just Salesforce consultants—we're your co-pilots on the journey to business success. With years of expertise in Salesforce implementation, customization, and support, we help small to medium-sized businesses rise above challenges and achieve their goals. Our mission is simple: to lift your operations, streamline your processes, and empower your team with tailored Salesforce solutions that soar.
                    </p>
                    <p>
                      Founded by a team of certified Salesforce professionals, Flying Nimbus combines technical mastery with a passion for innovation. We believe every business deserves to harness the full power of Salesforce, no matter its size or industry. From seamless integrations to custom app development, we deliver results that propel you forward—all while keeping your vision at the heart of what we do.
                    </p>
                    <p>
                      Ready to elevate your CRM game? Let Flying Nimbus guide you through the clouds to a brighter, more efficient future.
                    </p>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center p-4 text-center bg-blue-50 rounded-lg">
                          <Award className="h-12 w-12 text-nimbus-salesforce mb-3" />
                          <h3 className="font-semibold text-lg mb-2">Certified Experts</h3>
                          <p className="text-sm text-gray-600">Salesforce certified professionals with years of experience</p>
                        </div>
                        <div className="flex flex-col items-center p-4 text-center bg-blue-50 rounded-lg">
                          <CloudIcon className="h-12 w-12 text-nimbus-salesforce mb-3" />
                          <h3 className="font-semibold text-lg mb-2">Cloud Solutions</h3>
                          <p className="text-sm text-gray-600">Tailored cloud strategies for your business</p>
                        </div>
                        <div className="flex flex-col items-center p-4 text-center bg-blue-50 rounded-lg">
                          <Users className="h-12 w-12 text-nimbus-salesforce mb-3" />
                          <h3 className="font-semibold text-lg mb-2">Team Approach</h3>
                          <p className="text-sm text-gray-600">Collaborative support for your entire organization</p>
                        </div>
                        <div className="flex flex-col items-center p-4 text-center bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue rounded-lg">
                          <CloudIcon className="h-12 w-12 text-white mb-3 cloud-shadow" />
                          <h3 className="font-semibold text-lg mb-2 text-white">Flying Nimbus</h3>
                          <p className="text-sm text-white">Elevating businesses through Salesforce</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-nimbus-light-blue to-nimbus-blue rounded-2xl top-4 left-4 opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
