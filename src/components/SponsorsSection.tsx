import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Medal, Award, Users } from 'lucide-react';

const sponsorTiers = [
  {
    title: 'Title Sponsor',
    icon: Crown,
    color: 'from-yellow-500 to-amber-600',
    borderColor: 'border-yellow-500/50',
    bgColor: 'bg-yellow-500/10',
    sponsors: [{ name: 'Title Sponsor Placeholder', logo: null }],
  },
  {
    title: 'Gold Sponsors',
    icon: Medal,
    color: 'from-amber-400 to-yellow-500',
    borderColor: 'border-amber-400/50',
    bgColor: 'bg-amber-400/10',
    sponsors: [
      { name: 'Gold Sponsor 1', logo: null },
      { name: 'Gold Sponsor 2', logo: null },
    ],
  },
  {
    title: 'Silver Sponsors',
    icon: Award,
    color: 'from-gray-300 to-gray-400',
    borderColor: 'border-gray-400/50',
    bgColor: 'bg-gray-400/10',
    sponsors: [
      { name: 'Silver Sponsor 1', logo: null },
      { name: 'Silver Sponsor 2', logo: null },
      { name: 'Silver Sponsor 3', logo: null },
    ],
  },
  {
    title: 'Community Partners',
    icon: Users,
    color: 'from-primary to-accent',
    borderColor: 'border-primary/50',
    bgColor: 'bg-primary/10',
    sponsors: [
      { name: 'Community Partner 1', logo: null },
      { name: 'Community Partner 2', logo: null },
      { name: 'Community Partner 3', logo: null },
      { name: 'Community Partner 4', logo: null },
    ],
  },
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsors" className="relative py-24">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            <span className="gradient-text">Sponsors & Partners</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-rajdhani text-lg text-foreground/70 max-w-2xl mx-auto">
            Partnering with industry leaders to bring you the best cybersecurity experience
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + tierIndex * 0.1 }}
            >
              {/* Tier Header */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${tier.bgColor} border ${tier.borderColor}`}>
                  <tier.icon className={`w-5 h-5 bg-gradient-to-r ${tier.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                </div>
                <h3 className={`font-orbitron text-xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.title}
                </h3>
              </div>

              {/* Sponsors Grid */}
              <div className={`grid gap-4 md:gap-6 ${
                tier.sponsors.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                tier.sponsors.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                tier.sponsors.length === 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto' :
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + tierIndex * 0.1 + index * 0.05 }}
                    className={`cyber-card rounded-xl p-6 flex items-center justify-center border ${tier.borderColor} hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group min-h-[120px] card-3d`}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-lg bg-muted/30 flex items-center justify-center border border-dashed border-muted-foreground/30 group-hover:border-primary/50 transition-colors">
                        <span className="font-mono-tech text-xs text-muted-foreground">LOGO</span>
                      </div>
                      <p className="font-rajdhani text-sm text-foreground/60">{sponsor.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="cyber-card rounded-2xl p-8 max-w-2xl mx-auto neon-border">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-primary">
              Become a Sponsor
            </h3>
            <p className="font-rajdhani text-foreground/70 mb-6">
              Interested in partnering with CyberFest 2K26? Reach out to us for sponsorship opportunities.
            </p>
            <a
              href="mailto:ddc@cbit.ac.in"
              className="inline-block font-mono-tech text-primary hover:text-secondary transition-colors"
            >
              ddc@cbit.ac.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
