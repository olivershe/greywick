"use client"

import { motion } from "framer-motion"

const services = [
  "Strategic AI Roadmapping",
  "Precision Workflow Automation",
  "Custom RAG Architecture",
  "Agent System Development",
  "Executive AI Enablement",
  "Production Deployment",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...services, ...services]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Industrial-grade AI for the enterprise.
        </motion.h2>
        <motion.p
          className="text-primary-foreground/70 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We engineer high-performance AI workflows with the precision of a financial audit.
          Systems that function with the reliability of a financial ledger.
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {items.map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-8 py-6"
              data-clickable
            >
              <span className="text-primary-foreground font-medium text-lg whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
