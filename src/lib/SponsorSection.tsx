import fs from 'fs';
import path from 'path';

export default function SponsorSection() {
  const tiers = ['platinum', 'gold', 'silver', 'bronze'];
  const publicDir = path.join(process.cwd(), 'public/sponsors');

  const inKindMentions = [
    "Chatham-Kent Municipal Council",
    "Local 804 IBEW",
    "Sydenham Current",
    "TekSavvy Solutions"
  ];

  return (
    <section id="sponsors" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black uppercase italic text-white tracking-tighter">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
        </div>

        <div className="space-y-32">
          {tiers.map((tier) => {
            const tierPath = path.join(publicDir, tier);
            if (!fs.existsSync(tierPath)) return null;

            const files = fs.readdirSync(tierPath);
            if (files.length === 0) return null;

            return (
              <div key={tier} className="group">
                <div className="flex items-center gap-6 mb-16">
                  <h3 className="text-blue-500 font-black uppercase tracking-[0.6em] text-[11px] whitespace-nowrap italic">
                    {tier} Level
                  </h3>
                  <div className="h-px w-full bg-linear-to-r from-slate-800 to-transparent" />
                </div>
                
                {/* Unified Grid with items-stretch to ensure even rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                  {files.map((file) => {
                    const isImage = /\.(png|jpe?g|svg|webp)$/i.test(file);
                    const cleanName = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

                    return (
                      <div key={file} className="flex flex-col group/logo w-full">
                        {/* BASE CONTAINER: h-40 ensures all plates are the same height.
                           Using flex-col and justify-center keeps content centered.
                        */}
                        <div className="h-40 w-full flex flex-col items-center justify-center p-8 rounded-2xl 
                                      bg-white/10 border border-white/5 
                                      group-hover/logo:bg-white/15 group-hover/logo:border-blue-500/40 
                                      transition-all duration-500 shadow-2xl relative overflow-hidden">
                          
                          {isImage ? (
                            <img
                              src={`/sponsors/${tier}/${file}`}
                              alt={cleanName}
                              className="max-h-full max-w-full object-contain brightness-105 contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                            />
                          ) : (
                            /* Individual Text Sponsors now live in the same h-40 container */
                            <div className="text-center">
                               <p className="text-white font-black text-sm md:text-base uppercase tracking-tight italic leading-tight mb-2">
                                {cleanName}
                              </p>
                              <div className="h-0.5 w-8 bg-blue-600/50 mx-auto" />
                            </div>
                          )}
                        </div>
                        
                        {/* Subtitle remains below the fixed-height plate */}
                        <span className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover/logo:text-blue-400 transition-colors text-center">
                          {isImage ? cleanName : "Individual Partner"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
