'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function MeetingDialog() {
  const [city, setCity] = useState("New York")
  const [time, setTime] = useState("12:00")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-xl px-6 py-2">
          Schedule meeting
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule a new meeting</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <select
            className="border px-3 py-2 rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option>New York</option>
            <option>Denver</option>
            <option>Istanbul</option>
          </select>

          <input
            type="time"
            className="border px-3 py-2 rounded-md"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <div className="text-sm text-muted-foreground">
            Meeting set for <strong>{city}</strong> at <strong>{time}</strong>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
