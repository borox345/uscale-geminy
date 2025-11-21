import React, { useState, useRef } from 'react';
import { generateBusinessAudit } from '../services/geminiService';
import { AuditRequest, AuditResponse, LoadingState } from '../types';
import { Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const industries = [
  'SaaS / Software',
  'E-commerce / D2C',
  'Fintech',
  'Healthcare / MedTech',
  'Logistics / Supply Chain',
  'Professional Services',
  'Manufacturing'
];

const revenueRanges = [
  '$0 - $500k (Validation)',
  '$500k - $2M (Traction)',
  '$2M - $10M (Scaling)',
  '$10M - $50M (Expansion)',
  '$50M+ (Enterprise)'
];

const AIAudit: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AuditRequest>({
    industry: '',
    revenueRange: '',
    primaryChallenge: ''
  });
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<AuditResponse | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!formData.industry || !formData.revenueRange || !formData.primaryChallenge) return;
    
    setStatus(LoadingState.LOADING);
    try {
      const response = await generateBusinessAudit(formData);
      setResult(response);
      setStatus(LoadingState.SUCCESS);
      setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (e) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="audit" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Gemini 2.5</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Instant Strategic Audit</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get a preliminary roadmap customized to your business stage and sector in seconds. No email required for the preview.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          {status === LoadingState.IDLE || status === LoadingState.LOADING || status === LoadingState.ERROR ? (
            <div className="space-y-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                      step >= s ? 'bg-teal-500 text-white' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <div className="min-h-[300px]">
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <label className="block text-slate-300 text-lg font-medium mb-4">What is your primary industry?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industries.map((ind) => (
                        <button
                          key={ind}
                          onClick={() => {
                            setFormData({ ...formData, industry: ind });
                            setStep(2);
                          }}
                          className={`p-4 rounded-xl border text-left transition-all hover:border-teal-500 hover:bg-slate-800 ${
                            formData.industry === ind 
                            ? 'border-teal-500 bg-slate-800 text-white' 
                            : 'border-slate-700 bg-slate-800/50 text-slate-400'
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <label className="block text-slate-300 text-lg font-medium mb-4">What is your annual revenue range?</label>
                    <div className="grid grid-cols-1 gap-3">
                      {revenueRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setFormData({ ...formData, revenueRange: range });
                            setStep(3);
                          }}
                          className={`p-4 rounded-xl border text-left transition-all hover:border-teal-500 hover:bg-slate-800 ${
                            formData.revenueRange === range 
                            ? 'border-teal-500 bg-slate-800 text-white' 
                            : 'border-slate-700 bg-slate-800/50 text-slate-400'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(1)} className="mt-6 text-slate-500 hover:text-slate-300 text-sm">← Back</button>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <label className="block text-slate-300 text-lg font-medium mb-4">What is your biggest growth bottleneck?</label>
                    <textarea
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none h-32 resize-none"
                      placeholder="e.g., High churn rate, difficulty hiring senior engineers, cost of acquisition too high..."
                      value={formData.primaryChallenge}
                      onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    />
                    <div className="flex justify-between items-center mt-8">
                       <button onClick={() => setStep(2)} className="text-slate-500 hover:text-slate-300 text-sm">← Back</button>
                       <button
                        onClick={handleGenerate}
                        disabled={!formData.primaryChallenge || status === LoadingState.LOADING}
                        className="px-8 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-bold shadow-lg shadow-teal-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {status === LoadingState.LOADING ? (
                          <>
                            <Loader2 className="animate-spin mr-2 w-5 h-5" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            Generate Audit
                            <Sparkles className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                    {status === LoadingState.ERROR && (
                      <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Analysis failed. Please try again.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div ref={resultRef} className="animate-in zoom-in-95 duration-500">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                 <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-teal-400 w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Strategic Analysis Ready</h3>
                    <p className="text-slate-400 text-sm">{formData.industry} • {formData.revenueRange}</p>
                 </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-3">Executive Summary</h4>
                <p className="text-slate-200 leading-relaxed bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                  {result?.summary}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                 <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold">Recommended High-Impact Moves</h4>
                 {result?.strategies.map((strategy, idx) => (
                   <div key={idx} className="group p-5 bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700 rounded-xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">{strategy.title}</h5>
                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                          strategy.impact === 'High' ? 'bg-teal-500/20 text-teal-300' : 
                          strategy.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-slate-700 text-slate-300'
                        }`}>
                          {strategy.impact} Impact
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{strategy.description}</p>
                   </div>
                 ))}
              </div>

              <div className="text-center">
                <button 
                  onClick={() => {
                    setStep(1);
                    setStatus(LoadingState.IDLE);
                    setFormData({ industry: '', revenueRange: '', primaryChallenge: ''});
                  }}
                  className="text-slate-400 hover:text-white text-sm underline underline-offset-4"
                >
                  Start New Audit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAudit;