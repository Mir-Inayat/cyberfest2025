import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Link, Search, Lock, Code } from 'lucide-react';

const focusAreas = [
  {
    icon: Brain,
    title: 'AI-based Threat Detection',
    description: 'Build intelligent systems that identify and neutralize cyber threats using machine learning.',
  },
  {
    icon: Search,
    title: 'Malware & Intrusion Detection',
    description: 'Develop advanced detection systems for malware analysis and intrusion prevention.',
  },
  {
    icon: Link,
    title: 'Blockchain Security',
    description: 'Create secure blockchain solutions and smart contract auditing tools.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection Systems',
    description: 'Design AI-powered systems to detect and prevent financial fraud.',
  },
  {
    icon: Code,
    title: 'Secure dApps',
    description: 'Build secure decentralized applications with robust security protocols.',
  },
  {
    icon: Lock,
    title: 'Smart Contracts',
    description: 'Develop and audit secure smart contracts for blockchain platforms.',
  },
];

const HackathonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hackathon" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="font-mono-tech text-sm text-primary uppercase tracking-wider">Track 1</span>
          </div>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            <span className="gradient-text">Hackathon</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
        </motion.div>

        {/* Theme Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cyber-card rounded-2xl p-8 mb-12 text-center max-w-3xl mx-auto neon-border"
        >
          <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-2 text-foreground">
            Theme
          </h3>
          <p className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold gradient-text px-2">
            AI in Cybersecurity & Blockchain Security
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="cyber-card rounded-xl p-6 group hover:neon-border transition-all duration-500 card-3d"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary icon-hover transition-transform" />
                </div>
                <div>
                  <h4 className="font-orbitron text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h4>
                  <p className="font-rajdhani text-foreground/70">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
