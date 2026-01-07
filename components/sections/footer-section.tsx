"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const footerLinks = [
  { label: "Services", href: "#" },
  { label: "Method", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
]

export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob - Greywick colors */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#008081]/30 via-[#2A9D8F]/20 to-[#002B49]/30 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Greywick
            </motion.h2>

            <motion.p
              className="text-muted-foreground mt-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We engineer high-performance AI workflows with the precision of a financial audit.
            </motion.p>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Email signup */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-4">Subscribe for engineering insights and AI implementation strategies.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-foreground text-background p-3 rounded-lg hover:bg-foreground/90 transition-colors"
                data-clickable
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Greywick Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
