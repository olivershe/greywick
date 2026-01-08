"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "AI Consulting Services", href: "#" },
    { name: "AI Training Courses", href: "#" },
    { name: "Client Case Studies", href: "#" },
    { name: "AI Articles", href: "#" },
    { name: "About", href: "#" },
    { name: "AI Tool Finder", href: "#" },
]

export function Nav() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <nav className="relative flex items-center justify-center py-4">
            <div
                className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-[2px] rounded-full border border-white/10 shadow-2xl"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {navItems.map((item, index) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            hoveredIndex === index ? "text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                        onMouseEnter={() => setHoveredIndex(index)}
                    >
                        {hoveredIndex === index && (
                            <motion.div
                                layoutId="nav-bubble"
                                className="absolute inset-0 bg-white/80 rounded-full -z-10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6
                                }}
                            />
                        )}
                        <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    )
}
