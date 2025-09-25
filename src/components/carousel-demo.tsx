"use client";

import React, { useEffect, useState } from "react";
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update count and current when api changes or items change
  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    
    updateState();

    
    api.on("select", updateState);

    return () => {
      api.off("select", updateState);
    };
  }, [api]);

  
  useEffect(() => {
    if (api && items.length > 0) {
      api.scrollTo(0);
    }
  }, [api, items]);

  
  useEffect(() => {
    setCount(items.length);
    setCurrent(1);
  }, [items]);

  const handlePrev = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{ align: "start", loop: false }}
      >
        <CarouselContent className="md:-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 flex-none w-full sm:w-1/2 md:w-1/3">
              <Card className="w-full h-[317px]">
                <CardContent className="flex flex-col items-start p-4 h-full">
                  <div className="w-full h-48 rounded-md overflow-hidden mb-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="object-fill w-full h-full" 
                    />
                  </div>
                  <span className="text-left text-2xl font-bold font-HelveticaNeueBlack">
                    {item.title}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      
      <div className="flex items-center justify-between mt-4 px-2">
        
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
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 bg-transparent rounded-full" 
            onClick={handlePrev} 
            disabled={current === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 bg-transparent rounded-full" 
            onClick={handleNext} 
            disabled={current === count}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}