import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Artisan Marketplace - Handcrafted with Love",
  description:
    "Discover unique, handmade treasures from talented artisans around the world. Every piece tells a story, every purchase supports a dream.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${crimsonText.variable}`}>
      <body className="font-crimson">{children}</body>
    </html>
  )
}
