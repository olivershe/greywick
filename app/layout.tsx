import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Greywick – Industrial-Grade AI for the Enterprise",
  description:
    "We engineer high-performance AI workflows with the precision of a financial audit. Production-ready RAG pipelines, custom agent systems, and precision workflow automation.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/greywick-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/greywick-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/greywick-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
