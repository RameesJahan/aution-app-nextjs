"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type PriceControlProps = {
  className?: string;
  min?: number;
  step?: number;
  max?: number;
  onChange?: (price: number) => void;
};

const PriceControl = ({ className, min, step, max, onChange }: PriceControlProps) => {
  const [price, setPrice] = useState<number>(min || 100);

  function increase() {
    setPrice(price + (step || 50));
  }

  function decrease() {
    setPrice(price - (step || 50));
  }

  useEffect(() => {
    onChange?.(price);
  }, [price]);

  return (
    <div className={cn("flex items-center",className)}>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={decrease}
        disabled={price <= (min || 100)}
      >
        <MinusIcon />
      </Button>
      <span className="mx-2">₹ {price}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={increase}
        disabled={price >= (max || 500)}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default PriceControl;
