import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {bid_items} from '@/data/data'
import Link from "next/link";

type BidCardProps = {
  bid: Bid;
};

export type Bid = {
  bid_id: number;
  type: string;
  code: string | null;
  bid_item: number;
}

export type BidItem = {
  item_id: number;
    name: string;
    image: string;
    features: string;
    price: number;
}

const BidCard = ({ bid }: BidCardProps) => {

  const bid_item = bid_items.find(item => item.item_id === bid.bid_item);

  if(!bid_item) return <div>Something went wrong!</div>

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-video">
          <Image
            fill
            className="object-cover"
            src={bid_item.image}
            alt="Image"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 mt-4 w-full">
        <CardTitle>{bid_item.name}</CardTitle>
        {/* <CardDescription>
          {bid_item.features}
        </CardDescription> */}
        <p>₹{bid_item.price}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between items-center">
          <p>₹{bid_item.price+(bid_item.price*0.3)}</p>
          <Button asChild>
            <Link href={'/market/explore/'+bid.bid_id}>
              View Bid
            </Link>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BidCard;
