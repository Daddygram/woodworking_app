"use client";

import Image from "next/image";
import { useState } from "react";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event:any) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (event:any) => {
    const rect = event.target.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleTouchStart = (event:any) => {
    handleStart();
    const rect = event.target.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <div className="w-full relative" onTouchEnd={handleTouchEnd}>
      <div
        className="relative w-full max-w-[900px] aspect-[4/3] m-auto overflow-hidden select-none rounded-sm"
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMove}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
      >
        <Image alt="" fill priority src={"/real-kitchen.jpg"} />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[1536px] aspect-[4/3] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image fill priority alt="" src={"/render-kitchen.jpg"} />
        </div>

        {/* Horizontal Arrows */}

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-5 w-5 -left-2 top-[calc(50%-5px)]" />
          <div className="absolute top-[calc(50%+4px)] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-black">&#x2194;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
