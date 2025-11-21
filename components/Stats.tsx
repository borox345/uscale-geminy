import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', current: 100, projected: 100 },
  { month: 'Feb', current: 120, projected: 130 },
  { month: 'Mar', current: 135, projected: 170 },
  { month: 'Apr', current: 140, projected: 220 },
  { month: 'May', current: 155, projected: 290 },
  { month: 'Jun', current: 160, projected: 380 },
  { month: 'Jul', current: 175, projected: 490 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <div className="text-teal-500 font-semibold tracking-wide uppercase mb-3">Proven Results</div>
             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
               The <span className="text-teal-400">uScale</span> Effect
             </h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
               Our clients typically see a separation from their historical growth baseline within 90 days of implementation. By optimizing the core constraints, we unlock exponential rather than linear growth.
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 '3.5x Average ROI in first 12 months',
                 '60% Reduction in operational overhead',
                 '24/7 Operational uptime with automated systems'
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-slate-300">
                   <div className="w-6 h-6 rounded-full bg-teal-900/50 text-teal-400 flex items-center justify-center mr-3 text-xs">✓</div>
                   {item}
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 shadow-lg z-10">
              <span className="text-xs text-slate-400 block">Projected Growth</span>
              <span className="text-xl font-bold text-teal-400">+245%</span>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="projected" stroke="#2dd4bf" strokeWidth={3} fillOpacity={1} fill="url(#colorProjected)" />
                  <Area type="monotone" dataKey="current" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorCurrent)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;