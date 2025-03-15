"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/katarsiz-logo.jpg')",
          filter: "brightness(0.3)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div
        className={`container mx-auto px-4 text-center relative z-10 text-white transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-animation">
          KATARISI FAMILY
          <span className="block text-primary mt-2">Theatre Club</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 slide-in-left">
          Where passion meets performance, and stories come to life.
        </p>

        <p className="max-w-2xl mx-auto mb-10 text-gray-300 slide-in-right">
          Join our vibrant community of actors, directors, and theatre
          enthusiasts dedicated to the art of storytelling through performance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
          <Link href="/applications">
            <Button size="lg" className="text-lg px-8 py-6">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold"
            >
              Join Events
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection

