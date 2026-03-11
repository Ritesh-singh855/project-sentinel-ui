import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Droplets, Shield, Container, GraduationCap } from "lucide-react";

const industries = [
  { icon: Anchor, name: "Maritime", desc: "Ship navigation, port operations and marine training" },
  { icon: Droplets, name: "Oil & Gas", desc: "Offshore drilling, well control and process training" },
  { icon: Shield, name: "Defense", desc: "Naval combat, tactical systems and warfare training" },
  { icon: Container, name: "Ports", desc: "Terminal operations, crane handling and logistics" },
  { icon: GraduationCap, name: "Training Institutes", desc: "Academic simulation labs and certification programs" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 gradient-navy opacity-50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Sectors</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Industries We Serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card/50 hover:border-primary/40 hover:shadow-neon transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{ind.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
