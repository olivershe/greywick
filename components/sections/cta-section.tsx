"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="bg-background px-6 py-24">
            <div className="max-w-3xl mx-auto text-center">
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Whether optimising processes or finding new opportunities, we provide practical AI advice that is tailored to your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent text-foreground font-medium text-lg rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                        data-clickable
                    >
                        BOOK A NO OBLIGATION CHAT
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
