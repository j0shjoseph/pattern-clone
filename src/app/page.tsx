import { ZoneCard } from "@/components/ui/ZoneCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MeetingDialog } from "@/components/ui/MeetingDialog"


export default function Home() {
  const zones = [
    { city: "New York", time: "02:57 AM", color: "#CCFF77" },
    { city: "Denver", time: "12:57 AM", color: "#A3D4FF" },
    { city: "Istanbul", time: "09:57 AM", color: "#D3CFB3" },
  ];

return (
  <>
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 font-mono">
      <h1 className="text-xl">In The Zone</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {zones.map((z, i) => (
          <ZoneCard key={i} city={z.city} time={z.time} color={z.color} />
        ))}
      </div>

      <Button variant="outline" className="border-dashed border rounded-full text-sm px-4 py-2">
        + Add
      </Button>
      <MeetingDialog />
    </div>
  </>
);
}