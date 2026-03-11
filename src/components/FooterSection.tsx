import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded border border-primary/40 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary">A</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">ARI SIMULATION</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global leader in sophisticated simulation and virtual reality training solutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {["Marine Simulation", "Offshore Simulation", "Crane Simulation", "Naval Defense", "Engineering"].map((s) => (
                <li key={s}>
                  <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {["Maritime", "Oil & Gas", "Defense", "Ports", "Training Institutes"].map((s) => (
                <li key={s}>
                  <a href="#industries" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 11 41326882
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@arisimulation.com
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ARI Simulation — Applied Research International Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
