"use client";

import { useState } from "react";
import ToggleSwitch3 from "./toggleswitch";
import { CarouselDemo } from "./carousel-demo";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
}

interface ExpProps {
  caseStudies: Item[];
  projects: Item[];
}

export default function Exp({ caseStudies, projects }: ExpProps) {
  const [active, setActive] = useState<"case-studies" | "projects">(
    "case-studies"
  );

  
  const items = active === "case-studies" ? caseStudies : projects;

  return (
    <div className="w-full">
      <div className="flex justify-between p-10">
        <div className="flex-wrap font-bold text-5xl w-[30%] font-helveticDisplay">
          Case Insights & Key Projects
        </div>
        <div className="">
          <ToggleSwitch3 active={active} setActive={setActive} />
        </div>
      </div>
      <CarouselDemo items={items} />
    </div>
  );
}