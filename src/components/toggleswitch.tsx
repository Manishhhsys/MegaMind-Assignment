"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ToggleSwitch3Props {
  active: "case-studies" | "projects";
  setActive: (value: "case-studies" | "projects") => void;
}

export default function ToggleSwitch3({ active, setActive }: ToggleSwitch3Props) {
  return (
    <div className="relative inline-flex bg-muted rounded-full p-1">
      {/* Background slider */}
      <div
        className={`absolute top-1 h-8 bg-background rounded-full shadow-sm transition-all duration-300 ease-in-out border z-0 ${
          active === "case-studies" ? "left-1 w-28" : "left-32 w-20"
        }`}
      />
      
      {/* Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setActive("case-studies")}
        className={`relative z-1 text-sm font-helveticDisplay  font-bold  rounded-full transition-colors duration-300 h-8 ${
          active === "case-studies" 
            ? "text-foreground px-6" 
            : "text-muted-foreground px-4"
        }`}
      >
        Case Studies
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setActive("projects")}
        className={`relative z-1 text-base font-helveticDisplay rounded-full transition-colors duration-300 h-8 ${
          active === "projects" 
            ? "text-foreground px-6" 
            : "text-muted-foreground px-6"
        }`}
      >
        Projects
      </Button>
    </div>
  );
}