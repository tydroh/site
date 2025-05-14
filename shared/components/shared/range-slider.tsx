'use client';

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from "@/shared/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step?: number;
  formatLabel?: (value: number) => string;
  value?: number[];
  onValueChange?: (values: number[]) => void;
};

export const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      min,
      max,
      step = 100,
      formatLabel,
      value = [min, max],
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [localValues, setLocalValues] = React.useState<number[]>(value);

    React.useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [value, min, max]);

    const handleChange = (newValue: number[]) => {
      setLocalValues(newValue);
      onValueChange?.(newValue);
    };

    return (
      <div className={cn("w-full", className)}>
        <SliderPrimitive.Root
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={localValues}
          onValueChange={handleChange}
          className="relative flex w-full touch-none select-none items-center"
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-300">
            <SliderPrimitive.Range className="absolute h-full bg-primary rounded-full" />
          </SliderPrimitive.Track>

          {localValues.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              className="block h-4 w-4 rounded-full bg-primary shadow-lg border border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            />
          ))}
        </SliderPrimitive.Root>

        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>{formatLabel ? formatLabel(localValues[0]) : localValues[0]}</span>
          <span>{formatLabel ? formatLabel(localValues[1]) : localValues[1]}</span>
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
