import Image from "next/image";
import React from "react";
import { StarIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import BidHistoryItem from "./BidHistoryItem";

type BidItemViewProps = {
  image: string;
  name: string;
  price: number;
};

const BidItemView = ({ image, name, price }: BidItemViewProps) => {
  return (
    <>
      <div className="w-full aspect-[16/8] relative flex gap-2">
        <div className="w-1/2 aspect-square relative">
          <div className="absolute right-6 top-6 z-10">
            <Button size="icon" className="h-10 w-10" variant="outline">
              <StarIcon className="h-6 w-6" />
            </Button>
          </div>
          <Image fill className="object-cover" src={image} alt={name} />
        </div>
        <div className="grow relative">
          <div className="h-full w-full overflow-auto no-scrollbar">
            <h2 className="text-xl sticky top-0 bg-background pb-1">Bid History</h2>
            <div className="flex flex-col gap-2 mt-2">
              <BidHistoryItem price={price + 2500} />
              <BidHistoryItem price={price + 1000} />
              <BidHistoryItem price={price + 2500} />
              <BidHistoryItem price={price + 1000} />
              <BidHistoryItem price={price + 2500} />
              <BidHistoryItem price={price + 1000} />
              <BidHistoryItem price={price + 2500} />
              <BidHistoryItem price={price + 1000} />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl">{name}</h1>
        <p className="font-semibold">Base Price: ₹{price}</p>
        <p className="text-sm text-muted-foreground">Bid Ends: 10:30 PM</p>
      </div>
    </>
  );
};

export default BidItemView;
