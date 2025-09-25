"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface ToggleSwitch3Props {
  active: "case-studies" | "projects";
  setActive: (val: "case-studies" | "projects") => void;
}

export default function ToggleSwitch3({ active, setActive }: ToggleSwitch3Props) {
  return (
    <div className="relative w-[263px] h-[48px] border border-[#E8E8ED] rounded-full p-1">
  <div
    className={cn(
      "absolute inset-y-1 w-1/2 h-10 rounded-full transition-all duration-300 ease-in-out",
      active === "case-studies"
        ? "left-1 bg-[#E8E8ED]"
        : "left-[calc(50%-4px)] bg-[#E8E8ED]"
    )}
  />

  <ToggleGroup
    type="single"
    value={active}
    className="w-full h-full"
    onValueChange={(val) => setActive(val as "case-studies" | "projects")}
  >
    <ToggleGroupItem
      value="case-studies"
      aria-label="Toggle case studies"
      className="relative  flex-1 hover:bg-transparent data-[state=on]:bg-transparent text-[#666668] font-semibold text-base font-HelveticaNeueBlack"
    >
      Case Studies
    </ToggleGroupItem>
    <ToggleGroupItem
      value="projects"
      aria-label="Toggle projects"
      className="relative  flex-1 hover:bg-transparent data-[state=on]:bg-transparent text-[#666668] font-bold text-base font-HelveticaNeueBlack"
    >
      Projects
    </ToggleGroupItem>
  </ToggleGroup>
</div>

  );
}
