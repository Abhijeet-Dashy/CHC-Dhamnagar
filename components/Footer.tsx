import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-slate-900 dark:bg-black text-slate-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CHC Dhamnagar</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A government initiative providing comprehensive healthcare services to the people of Dhamnagar and surrounding areas. Committed to quality, accessibility, and care.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-medical-500 mr-3 mt-1 shrink-0" />
                <span>
                  Dhamnagar, Bhadrak<br />
                  Odisha, India - 756117
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-medical-500 mr-3 shrink-0" />
                <span>+91 9337451057</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-medical-500 mr-3 shrink-0" />
                <span>info@chcdhamnagar.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Map Placeholder */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Emergency</h3>
            <div className="bg-slate-800 dark:bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-2">For Ambulance Service</p>
              <p className="text-2xl font-bold text-white">Dial 108</p>
              <div className="h-px bg-slate-700 my-3"></div>
              <p className="text-sm text-slate-400 mb-2">For Police Assistance</p>
              <p className="text-2xl font-bold text-white">Dial 100</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Community Health Center, Dhamnagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};