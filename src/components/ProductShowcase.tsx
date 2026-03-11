import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import marineSim from "@/assets/marine-sim.jpg";
import offshoreSim from "@/assets/offshore-sim.jpg";
import trainingRoom from "@/assets/training-room.jpg";

const slides = [
  {
    image: marineSim,
    title: "Ship Bridge Simulators",
    desc: "Full mission bridge simulators replicating real vessel operations with 360° visual systems and dynamic ship models.",
  },
  {
    image: offshoreSim,
    title: "Offshore Drilling Simulators",
    desc: "High-fidelity drilling and well control simulators for offshore operations training with real-time process modeling.",
  },
  {
    image: trainingRoom,
    title: "Training Control Rooms",
    desc: "Centralized instructor stations enabling multi-exercise control, assessment and debriefing for complex training scenarios.",
  },
];

const ProductShowcase = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Product Showcase
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  {slides[current].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {slides[current].desc}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-2.5 gradient-accent text-accent-foreground font-display font-semibold tracking-wider uppercase rounded shadow-neon hover:shadow-[0_0_30px_hsl(175_60%_38%/0.4)] transition-all text-sm"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
