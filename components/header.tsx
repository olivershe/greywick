"use client"

import { motion } from "framer-motion"
import { Nav } from "./nav"

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="w-full md:w-auto flex justify-center md:block">
                <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Greywick
                </motion.h1>
            </div>
            <Nav />
        </header>
    )
}
