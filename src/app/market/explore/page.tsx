import Header from "@/components/Header";
import React from "react";
import { bids } from "@/data/data";
import BidCard from "@/components/BidCard";

type ExploreProps = {};

const Explore = (props: ExploreProps) => {
  return (
      <div className="w-full max-w-screen-sm p-4">
        <h1>Explore</h1>
        <div className="mt-4 flex flex-wrap">
          {bids.map((item) =>
            item.type === "public" ? (
              <div key={item.bid_id} className="p-2 w-full sm:basis-1/2">
                <BidCard bid={item} />
              </div>
            ) : null
          )}
        </div>
      </div>
  );
};

export default Explore;
