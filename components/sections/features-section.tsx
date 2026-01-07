"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function DeploymentIndicator() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const steps = ["Design", "Build", "Deploy"]

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex gap-2">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full ${i === step ? "bg-accent" : "bg-foreground/20"}`}
            animate={{ scale: i === step ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <motion.span
        key={step}
        className="font-serif text-2xl md:text-3xl text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {steps[step]}
      </motion.span>
    </div>
  )
}

function ArchitectureAnimation() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const architectures = ["RAG Pipelines", "Custom Models", "Agent Systems", "Data Integration"]

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <div className="flex flex-col gap-2 w-full max-w-[160px]">
        {architectures.map((f, i) => (
          <motion.div
            key={i}
            className={`px-3 py-2 rounded-md text-xs font-medium ${i === active
                ? "bg-accent text-accent-foreground"
                : "bg-foreground/10 text-foreground/60"
              }`}
            animate={{ scale: i === active ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {f}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ROIIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">5x</span>
      <span className="text-sm text-muted-foreground text-center">Higher ROI with<br />Precision Engineering</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Greywick Method
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deployment Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <DeploymentIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">End-to-End Deployment</h3>
              <p className="text-muted-foreground text-sm mt-1">We don&apos;t just advise—we design, build, and deploy production-ready AI systems.</p>
            </div>
          </motion.div>

          {/* Architecture Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ArchitectureAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Custom Architecture</h3>
              <p className="text-muted-foreground text-sm mt-1">Bespoke RAG pipelines and agent systems engineered for your specific workflows.</p>
            </div>
          </motion.div>

          {/* ROI Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ROIIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Measurable ROI</h3>
              <p className="text-muted-foreground text-sm mt-1">Mathematically modeled returns before we build. Commercial rigor from day one.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
