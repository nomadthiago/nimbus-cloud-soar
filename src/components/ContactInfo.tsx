
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
            <div>
              <h4 className="font-medium text-lg">Address</h4>
              <address className="not-italic text-gray-600 mt-1">
                7901 4th St N<br />
                St. Petersburg, FL 33702
              </address>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
            <div>
              <h4 className="font-medium text-lg">Phone</h4>
              <a href="tel:+14073357588" className="text-gray-600 hover:text-nimbus-salesforce transition-colors mt-1 block">
                (407) 335-7588
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-nimbus-salesforce mr-4 mt-1" />
            <div>
              <h4 className="font-medium text-lg">Email</h4>
              <a 
                href="mailto:info@theflyingnimbus.com" 
                className="text-gray-600 hover:text-nimbus-salesforce transition-colors mt-1 block"
              >
                info@theflyingnimbus.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
