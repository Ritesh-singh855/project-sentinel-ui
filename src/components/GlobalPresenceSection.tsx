import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "New Delhi, India", region: "Headquarters", x: "68%", y: "38%" },
  { name: "Dubai, UAE", region: "Middle East", x: "58%", y: "40%" },
  { name: "Singapore", region: "Southeast Asia", x: "74%", y: "55%" },
  { name: "London, UK", region: "Europe", x: "47%", y: "25%" },
  { name: "Houston, USA", region: "Americas", x: "22%", y: "38%" },
];

const GlobalPresenceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy opacity-60" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Worldwide</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Global Presence
          </h2>
        </motion.div>

        {/* Map */}
        <div className="relative max-w-5xl mx-auto aspect-[2/1] rounded-lg border border-border bg-card/30 overflow-hidden">
          {/* Simple world map outline using SVG */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20" fill="none" stroke="hsl(195 100% 47%)" strokeWidth="0.5">
            {/* Simplified continents */}
            <path d="M150,120 Q200,100 250,110 Q300,90 350,120 Q320,180 280,200 Q240,220 200,210 Q160,190 150,150 Z" />
            <path d="M120,220 Q160,200 200,220 Q230,280 210,340 Q180,380 150,360 Q120,320 110,280 Z" />
            <path d="M420,100 Q500,80 580,90 Q620,100 640,130 Q660,180 620,220 Q580,240 520,230 Q460,210 440,170 Q420,140 420,100 Z" />
            <path d="M430,240 Q480,220 530,240 Q560,300 540,360 Q500,400 460,370 Q430,320 430,240 Z" />
            <path d="M600,100 Q700,80 800,100 Q850,140 830,200 Q800,240 750,230 Q700,250 660,220 Q620,180 600,140 Z" />
            <path d="M720,260 Q780,240 830,260 Q860,320 840,380 Q800,420 760,400 Q730,360 720,310 Z" />
          </svg>

          {/* Location markers */}
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4, type: "spring" }}
              className="absolute group"
              style={{ left: loc.x, top: loc.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <div className="absolute -inset-2 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-card border border-border rounded px-3 py-2 whitespace-nowrap z-10">
                <p className="text-xs font-semibold text-foreground">{loc.name}</p>
                <p className="text-xs text-primary">{loc.region}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location cards below */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 p-3 rounded border border-border bg-card/30"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">{loc.name}</p>
                <p className="text-xs text-muted-foreground">{loc.region}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
