import React from "react";
import { bids, bid_items } from "@/data/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SellerCard from "@/components/SellerCard";
import BidItemView from "@/components/BidItemView";

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
    return <div>Something Went Wrong!</div>;
  }

  return (
    <div className="w-full max-w-screen-sm p-4 relative space-y-4">
      
      <BidItemView image={bidItem.image} name={bidItem.name} price={bidItem.price} />
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
              <Link href={`/market/bid/${bidId}`}>Join Bid</Link>
            </Button>
          </div>
        </div>
      </Card>
      <div>
        <h2 className="text-xl">Description</h2>
        <p className="text-sm text-muted-foreground">{bidItem.features}</p>
      </div>
      
      <div>
        <h2 className="text-xl">Seller</h2>
        <div className="mt-2">
          <SellerCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreBid;
