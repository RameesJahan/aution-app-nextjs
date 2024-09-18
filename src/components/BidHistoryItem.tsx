import React from "react";
import { Card } from "./ui/card";

type BidHistoryItemProps = {
  price: number;
  // name: string;
  // time: string;
};

const BidHistoryItem = ({price}: BidHistoryItemProps) => {
  return (
    <Card>
      <div className="w-full flex justify-between items-center p-2 sm:p-4 text-xs sm:text-sm">
        <p>John</p>
        <div>
          <p className="text-xs text-muted-foreground">7:30 PM</p>
          <p className="text-green-500">₹{price}</p>
        </div>
      </div>
    </Card>
  );
};

export default BidHistoryItem;
