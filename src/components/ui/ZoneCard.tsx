// src/components/ZoneCard.tsx
'use client'
import React from "react"
import { motion } from "framer-motion"

export function ZoneCard({ city, time, color }: { city: string; time: string; color: string }) {
  return (
    <motion.div
    className="rounded-3xl p-6 w-[240px] flex flex-col gap-2"
    style={{ backgroundColor: color }}
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
      <div className="bg-opacity-60 bg-white rounded-xl px-4 py-1 text-center">{city}</div>
      <div className="bg-opacity-60 bg-white rounded-xl px-4 py-1 text-center">{time}</div>
    </motion.div>
  )
}
