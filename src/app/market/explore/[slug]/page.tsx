import React from "react";
import { bids, bid_items } from "@/data/data";
import Image from "next/image";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ExploreBidProps = {
  params: { slug: string };
};

const ExploreBid = ({ params }: ExploreBidProps) => {
  const bidId = Number(params.slug);
  const bid = bids.find((bid) => bid.bid_id === bidId);
  if (!bid) {
    return <div className="w-full h-full text-center">Bid not found</div>;
  }
  const bidItem = bid_items.find((item) => item.item_id === bid.bid_item);
  if (!bidItem) {
    return <div>Somthing Went Wrong!</div>;
  }

  return (
    <div className="w-full max-w-screen-sm p-4 relative space-y-4">
      <div className="absolute right-6 top-6 z-10">
        <Button size="icon" className="h-10 w-10" variant="outline">
          <StarIcon className="h-6 w-6" />
        </Button>
      </div>
      <div className="w-full aspect-video relative">
        <Image
          fill
          className="object-cover"
          src={bidItem.image}
          alt={bidItem.name}
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl">{bidItem.name}</h1>
        <p className="font-semibold">Base Price: ₹{bidItem.price}</p>
        <p className="text-sm text-muted-foreground">Bid Ends: 10:30 PM</p>
      </div>
      <Card className="sticky bottom-1 p-6">
        <div className="w-full h-full flex justify-between items-center text-sm">
          <div>
            <p className="text-xs text-muted-foreground">Ends in: 06:34:36</p>
            <p className="text-green-500">
              Current Bid: ₹<span>{bidItem.price + 2500}</span>
            </p>
          </div>
          <div>
            <Button asChild>
              <Link href="">Join Bid</Link>
            </Button>
          </div>
        </div>
      </Card>
      <div>
        <h2 className="text-xl">Description</h2>
        <p className="text-sm text-muted-foreground">{bidItem.features}</p>
      </div>
      <div>
        <h2 className="text-xl">Bid History</h2>
        <div className="flex flex-col gap-2 max-h-48 overflow-auto mt-2">
          <Card>
            <div className="w-full flex justify-between items-center p-4 text-sm">
              <p>John</p>
              <div>
                <p className="text-xs text-muted-foreground">7:30 PM</p>
                <p className="text-green-500">₹{bidItem.price + 2500}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="w-full flex justify-between items-center p-4 text-sm">
              <p>John</p>
              <div>
                <p className="text-xs text-muted-foreground">7:30 PM</p>
                <p className="text-green-500">₹{bidItem.price + 1000}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="text-xl">Seller</h2>
        <Card className="p-4 mt-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="w-full flex justify-between items-center p-4 text-sm">
                  <p>Bidder One</p>
                  <div className="flex items-center gap-1">
                    <p>4.5</p>
                    <StarIcon className="h-4 w-4" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4">
                  <h3 className="text-xl">About</h3>
                  <p>Et pariatur sit labore ad fugiat. Ea sint nisi laborum sunt tempor aliquip excepteur minim consequat laborum. Mollit do culpa tempor cupidatat ea non id excepteur est ullamco dolore amet. Velit dolore eu reprehenderit magna ipsum minim laborum magna. Ut elit pariatur veniam adipisicing. Laboris occaecat aute officia enim duis sunt.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default ExploreBid;
