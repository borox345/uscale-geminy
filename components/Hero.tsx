import React from 'react';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
         <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-[128px] animate-pulse-slow" />
         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8 hover:border-teal-500/50 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-xs font-medium text-teal-300 tracking-wide uppercase">New: AI Strategy Engine 2.0</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Scale Revenue, <br />
              <span className="gradient-text">Not Complexity.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              uScale replaces guesswork with data. We build the operational infrastructure high-growth companies need to bypass the messy middle and reach market dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#audit" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-teal-500 text-white font-bold text-lg hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300 group">
                Generate Growth Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                <PlayCircle className="mr-2 w-5 h-5 text-slate-400" />
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
              <span>Trusted by 500+ founders</span>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/40/${40+i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-slate-950" />
                ))}
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-white">+2k</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block lg:col-span-5 mt-16 lg:mt-0 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-600/20 rounded-3xl rotate-6 blur-xl"></div>
              <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Pseudo-Dashboard UI */}
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-end gap-4 h-32">
                     <div className="w-1/5 bg-slate-800 rounded-t-lg h-[40%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
                     </div>
                     <div className="w-1/5 bg-slate-800 rounded-t-lg h-[55%]"></div>
                     <div className="w-1/5 bg-slate-800 rounded-t-lg h-[45%]"></div>
                     <div className="w-1/5 bg-slate-800 rounded-t-lg h-[70%]"></div>
                     <div className="w-1/5 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg h-[90%] shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs">AI</div>
                      <span className="text-sm text-white font-medium">Opportunity Detected</span>
                    </div>
                    <p className="text-xs text-slate-400">Optimization of logistics chain could yield +15% margin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;