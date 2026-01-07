"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const services = [
  {
    name: "Strategic AI Roadmap",
    price: "Bespoke",
    period: "",
    description: "Identify high-value automation opportunities with modeled ROI",
    features: [
      "Opportunity identification & prioritization",
      "Mathematical ROI modeling",
      "Technical feasibility assessment",
      "Executive presentation & roadmap",
    ],
  },
  {
    name: "Precision Workflow Automation",
    price: "Bespoke",
    period: "",
    description: "End-to-end implementation of production-ready AI systems",
    features: [
      "Custom RAG pipeline architecture",
      "Agent system development",
      "Full integration & deployment",
      "Performance optimization",
      "Ongoing support & monitoring",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Engagement Models</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            From strategic roadmapping to full-scale implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${service.popular ? "ring-2 ring-accent" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Requested
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{service.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-serif text-foreground">{service.price}</span>
                  <span className="text-muted-foreground">{service.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${service.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/20"
                  }`}
              >
                Start a Conversation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
