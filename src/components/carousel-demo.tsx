"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
}

interface CarouselDemoProps {
  items: Item[];
}

export function CarouselDemo({ items }: CarouselDemoProps) {
  // keep API in a ref so handlers always use the current API
  const apiRef = useRef<CarouselApi | undefined>(undefined);
  // we still keep a piece of state to trigger re-render when API is set
  const [, setApiState] = useState<CarouselApi | undefined>(undefined);

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // called by the Carousel component to hand us the API
  const handleSetApi = (api: CarouselApi) => {
    apiRef.current = api;
    setApiState(api); // cause a re-render so UI (dots / counters) can update
  };

  // wire up select listener and compute count/current
  useEffect(() => {
    const api = apiRef.current;
    if (!api) return;

    const update = () => {
      try {
        setCurrent(api.selectedScrollSnap() + 1);
      } catch {
        // defensive
      }
    };

    setCount(api.scrollSnapList().length || items.length);
    update();

    api.on("select", update);
    // also update when window resizes (optional)
    const onResize = () => {
      setCount(api.scrollSnapList().length || items.length);
      update();
    };
    window.addEventListener("resize", onResize);

    return () => {
      // cleanup handlers
      try {
        api.off("select", update);
      } catch {
        // defensive
      }
      window.removeEventListener("resize", onResize);
    };
    // re-run effect when items array changes (recalculate snaps)
  }, [items]);

  // navigation helpers (use ref)
  const handlePrev = () => {
    const api = apiRef.current;
    if (!api) return;
    api.scrollPrev();
  };

  const handleNext = () => {
    const api = apiRef.current;
    if (!api) return;
    api.scrollNext();
  };

  // optional: click a dot
  const handleDotClick = (index: number) => {
    const api = apiRef.current;
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel setApi={handleSetApi} className="w-full" opts={{ align: "start", loop: false }}>
        <CarouselContent className=" md:-ml-4">
          {items.map((item) => (
            // flex-none + explicit width classes so Embla calculates correctly
            <CarouselItem key={item.id} className="pl-2 md:pl-4 flex-none w-full sm:w-1/2 md:w-1/3">
              <Card className="w-full h-[317px]">
                <CardContent className="flex flex-col items-start p-4 h-full">
                  <div className="w-full h-48 rounded-md overflow-hidden mb-4">
                    <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-left text-2xl font-bold font-HelveticaNeueBlack">{item.title}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 px-2">
        {/* Dots + counter */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">
            {current} of {count}
          </span>
        </div>

        {/* Prev / Next */}
        <div className="flex gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent rounded-full" onClick={handlePrev} disabled={current === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent rounded-full " onClick={handleNext} disabled={current === count}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
