import { ZoneCard } from "@/components/ui/ZoneCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 font-mono">
      <h1 className="text-xl">In The Zone</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <ZoneCard city="New York" time="02:57 AM" color="#CCFF77" />
        <ZoneCard city="Denver" time="12:57 AM" color="#A3D4FF" />
        <ZoneCard city="Istanbul" time="09:57 AM" color="#D3CFB3" />
      </div>

      <Button variant="outline" className="border-dashed border rounded-full text-sm px-4 py-2">
        + Add
      </Button>

      <Button disabled variant="ghost" className="opacity-40 rounded-xl px-6 py-2">
        Schedule meeting
      </Button>
    </div>
  );
}