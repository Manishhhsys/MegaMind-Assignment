"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-sm lg:max-w-6xl mx-auto mt-10">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex items-center justify-center p-6"
                    style={{ width: "442px", height: "317px" }}
                  >
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-between mt-4 px-2">
        {/* Left side: Dots with current/total info */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">
            {current} of {count}
          </span>
        </div>

        {/* Right side: Previous and Next buttons */}
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => api?.scrollPrev()}
            disabled={current === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={() => api?.scrollNext()}
            disabled={current === count}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
