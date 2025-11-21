import React from 'react';
import { BarChart3, Zap, Shield, Globe, Layers, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Operating System for Scale</h2>
          <p className="text-slate-400 text-lg">
            We don't just offer advice. We deploy a complete ecosystem of tools, strategies, and automated workflows designed to compound your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Feature 1: Large Span */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:bg-slate-900/80 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-teal-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Predictive Revenue Modeling</h3>
              <p className="text-slate-400 max-w-md">Use historical data and market benchmarks to forecast revenue with 94% accuracy. Stop guessing, start planning.</p>
            </div>
            <div className="relative h-24 mt-6">
               {/* Decorative chart bars */}
               <div className="flex items-end gap-2 h-full w-full opacity-50">
                 {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                   <div key={i} className="flex-1 bg-slate-700 rounded-t-sm transition-all duration-700 group-hover:bg-teal-600" style={{ height: `${h}%` }}></div>
                 ))}
               </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col group hover:bg-slate-900/80 transition-colors duration-300 border-t-4 border-t-blue-500">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
              <Zap className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Workflow Automation</h3>
            <p className="text-slate-400 text-sm">Eliminate 40% of manual tasks. Our custom pipelines handle the grunt work.</p>
          </div>

           {/* Feature 3 */}
           <div className="glass-panel rounded-3xl p-8 flex flex-col group hover:bg-slate-900/80 transition-colors duration-300 border-t-4 border-t-purple-500">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
              <Cpu className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI-Driven Decisions</h3>
            <p className="text-slate-400 text-sm">Real-time insights powered by Gemini 2.5 to pivot faster than the market.</p>
          </div>

          {/* Feature 4: Large Span */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:bg-slate-900/80 transition-colors duration-300 relative overflow-hidden">
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16 group-hover:bg-blue-500/20 transition-all"></div>
            <div className="relative z-10 flex flex-row-reverse justify-between items-start">
               <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:rotate-12 transition-transform">
                <Globe className="text-indigo-400 w-6 h-6" />
              </div>
              <div className="max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2">Global Expansion Frameworks</h3>
                <p className="text-slate-400">Legal, logistical, and cultural localization strategies pre-packaged for 50+ markets. Go global in weeks, not years.</p>
              </div>
            </div>
            {/* Abstract Map Dots */}
            <div className="grid grid-cols-12 gap-2 mt-8 opacity-30">
                {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className={`h-1.5 w-1.5 rounded-full ${Math.random() > 0.7 ? 'bg-white' : 'bg-slate-600'}`}></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;