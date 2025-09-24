"use client";

import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export default function ToggleSwitch3() {
  const [activeItem, setActiveItem] = useState("case-studies");

  return (
    <div className="relative w-[263px] h-[48px] border border-[#E8E8ED] rounded-full p-1">
      
      <div
        className={cn(
          "absolute inset-y-1 w-1/2 h-10 rounded-full transition-all duration-300 ease-in-out",
          activeItem === "case-studies" ? "left-1 bg-[#E8E8ED]" : "left-[calc(50%-4px)] bg-[#E8E8ED]"
        )}
      />
      
      <ToggleGroup
        type="single"
        defaultValue="case-studies"
        className="w-full h-full"
        onValueChange={setActiveItem}
      >
        <ToggleGroupItem 
          value="case-studies" 
          aria-label="Toggle case studies" 
          className="flex-1 z-10 hover:bg-transparent data-[state=on]:bg-transparent text-[#666668] hover:text-[#666668] font-bold text-base font-helvetic"
        >
          Case Studies
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="projects" 
          aria-label="Toggle projects" 
          className="flex-1 z-10 hover:bg-transparent data-[state=on]:bg-transparent  text-[#666668] hover:text-[#666668] font-bold text-base font-helvetic"
        >
          Projects
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}