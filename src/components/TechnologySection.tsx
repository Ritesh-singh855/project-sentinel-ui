import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  {
    key: "vr",
    label: "VR Simulation",
    title: "Immersive Virtual Reality",
    desc: "State-of-the-art VR simulation environments that replicate real-world scenarios with photorealistic fidelity. Our VR systems deliver full 360° immersion for training operators in safety-critical environments.",
    features: ["360° immersive environments", "Haptic feedback integration", "Multi-user VR sessions", "Real-time scenario generation"],
  },
  {
    key: "ai",
    label: "AI Training",
    title: "AI-Powered Training Systems",
    desc: "Artificial intelligence driven assessment and adaptive training systems that personalize the learning experience based on trainee performance and behavior patterns.",
    features: ["Adaptive difficulty scaling", "Performance analytics", "Automated assessment", "Predictive skill modeling"],
  },
  {
    key: "physics",
    label: "Physics Engine",
    title: "Real-time Physics Engine",
    desc: "Proprietary physics engine delivering real-time hydrodynamic, aerodynamic and mechanical simulation with unmatched accuracy for mission-critical training applications.",
    features: ["Hydrodynamic modeling", "Environmental forces", "Collision dynamics", "Sub-second response time"],
  },
  {
    key: "3d",
    label: "3D Visualization",
    title: "Advanced 3D Visualization",
    desc: "Ultra-high-definition 3D rendering engine capable of generating photorealistic maritime, offshore and industrial environments with dynamic weather and lighting.",
    features: ["Photorealistic rendering", "Dynamic weather systems", "Real-time terrain generation", "Multi-channel display support"],
  },
  {
    key: "twin",
    label: "Digital Twin",
    title: "Digital Twin Technology",
    desc: "Create precise digital replicas of physical assets, vessels and installations for simulation, monitoring and predictive maintenance applications.",
    features: ["Asset replication", "Real-time synchronization", "Predictive maintenance", "Lifecycle management"],
  },
];

const TechnologySection = () => {
  const [active, setActive] = useState("vr");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="technology" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Innovation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Core Technologies
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 rounded font-display text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                active === tab.key
                  ? "gradient-accent text-accent-foreground shadow-neon"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-lg border border-border bg-card/50 p-8 md:p-12">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                {activeTab.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{activeTab.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTab.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                    <span className="text-sm text-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnologySection;
