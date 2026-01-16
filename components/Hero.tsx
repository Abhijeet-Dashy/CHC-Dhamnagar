import React from 'react';
import { PhoneCall, Clock, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="scroll-mt-24 relative pt-24 pb-16 md:pt-32 md:mt-10 md:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-medical-100 dark:bg-medical-900/30 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-100 dark:bg-blue-900/30 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-medical-50 dark:bg-medical-900/50 text-medical-700 dark:text-medical-300 text-sm font-semibold mb-6 border border-medical-100 dark:border-medical-800">
              <span className="flex h-2 w-2 rounded-full bg-medical-600 mr-2 animate-pulse"></span>
              Open 24/7 for the Community
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Community Health Center</span>{' '}
              <span className="block text-medical-600 dark:text-medical-500 xl:inline">Dhamnagar</span>
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Providing government health services open 24/7. High-quality medical care, dedicated professionals, and completely free of cost for all citizens.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-medical-600 hover:bg-medical-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="#departments"
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 md:py-4 md:text-lg md:px-10 shadow-sm transition-all"
                >
                  View Departments
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row gap-6 text-sm text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-medical-500 mr-2" />
                24/7 Emergency
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-medical-500 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-medical-500 mr-2" />
                Expert Doctors
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-xl overflow-hidden transform hover:scale-[1.001] transition-transform duration-500">
               <img
                className="w-full h-full object-cover"
                src="https://ik.imagekit.io/Adutta1908/CHC_DHAMNAGAR_PHOTOS/ncv.jpeg"
                alt="CHC Dhamnagar Building"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-semibold text-lg">Serving Dhamnagar</p>
                  <p className="text-sm opacity-90">Bhadrak, Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};