import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import marineSim from "@/assets/marine-sim.jpg";
import offshoreSim from "@/assets/offshore-sim.jpg";
import craneSim from "@/assets/crane-sim.jpg";
import navalDefense from "@/assets/naval-defense.jpg";
import engineeringSim from "@/assets/engineering-sim.jpg";

const solutions = [
  { title: "Marine Simulation", desc: "Full mission ship bridge simulators with real-time physics and environmental modeling.", image: marineSim },
  { title: "Offshore Simulation", desc: "Dynamic positioning, anchor handling and offshore operations training systems.", image: offshoreSim },
  { title: "Crane Simulation", desc: "High-fidelity crane operation simulators for port and offshore environments.", image: craneSim },
  { title: "Naval Defense Training", desc: "Combat management and warfare training systems for naval forces.", image: navalDefense },
  { title: "Engineering Simulation", desc: "Engine room, cargo handling and plant process simulation platforms.", image: engineeringSim },
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-lg overflow-hidden border border-border bg-card shadow-card cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {solution.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
        <div className="mt-3 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Simulation Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.title} solution={sol} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
