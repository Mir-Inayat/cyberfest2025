import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users } from 'lucide-react';

type RoleBlock = {
  title: string;
  people: Array<{ name: string; detail: string }>;
};

const committee: RoleBlock[] = [
  {
    title: 'Chief Patron',
    people: [{ name: 'Sri. N. Subash', detail: 'President, CBIT(A)' }],
  },
  {
    title: 'Patron',
    people: [{ name: 'Prof. C. V. Narasimhulu', detail: 'Principal, CBIT(A)' }],
  },
  {
    title: 'Advisory Committee',
    people: [
      { name: 'Prof. K. Krishna Veni', detail: 'Vice Principal-Acad., CBIT' },
      { name: 'Prof. P. V. R. Ravindra Reddy', detail: 'Vice Principal-Admin.' },
      { name: 'Prof. P. Ravinder Reddy', detail: 'Head-R&E, CBIT' },
      { name: 'Prof. D. Krishna Reddy', detail: 'Director-R&D, CBIT' },
      { name: 'Prof. Umakanta Choudhary', detail: 'Advisor-I&I, CBIT' },
      { name: 'Prof. Suresh Pabboju', detail: 'Director-AEC, CBIT' },
      { name: 'Prof. N. V. Koteswararao', detail: 'Director-IQAC, CBIT' },
      { name: 'Prof. P. Prabhakar Reddy', detail: 'Director-Acad., CBIT' },
      { name: 'Prof. B. Linga Reddy', detail: 'Director-SAP, CBIT' },
      { name: 'Prof. N. L. N. Reddy', detail: 'Advisor-CDC, CBIT' },
      { name: 'Prof. A. D. Sarma', detail: 'Advisor, R&D CBIT(A)' },
      { name: 'Prof. K Jagannadha Rao', detail: 'Head - Civil Engg.' },
    ],
  },
];

const CommitteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="committee" className="relative py-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold">
              <span className="gradient-text">Committee</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          {committee.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className="cyber-card rounded-2xl px-5 py-4"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="font-orbitron text-sm md:text-base font-bold text-primary">
                  {block.title}
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {block.people.map((p) => (
                  <li key={`${block.title}-${p.name}`} className="min-w-0">
                    <div className="font-rajdhani text-sm md:text-base font-semibold text-foreground leading-tight">
                      {p.name}
                    </div>
                    <div className="font-rajdhani text-xs md:text-sm text-foreground/70 leading-tight">
                      {p.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
