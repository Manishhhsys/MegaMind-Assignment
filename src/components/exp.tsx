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
      <div className="flex lg:justify-between lg:p-10 flex-col justify-center items-center p-2 gap-5 lg:flex lg:flex-row">
        <div className="flex-wrap font-bold lg:text-5xl lg:w-[30%] font-helveticDisplay text-3xl">
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