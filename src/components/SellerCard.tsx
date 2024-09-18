import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { StarIcon } from "@radix-ui/react-icons";
import React from "react";
import { Card } from "./ui/card";

type SellerCardProps = {};

const SellerCard = (props: SellerCardProps) => {
  return (
    <Card className="p-4">
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
              <p>
                Et pariatur sit labore ad fugiat. Ea sint nisi laborum sunt
                tempor aliquip excepteur minim consequat laborum. Mollit do
                culpa tempor cupidatat ea non id excepteur est ullamco dolore
                amet. Velit dolore eu reprehenderit magna ipsum minim laborum
                magna. Ut elit pariatur veniam adipisicing. Laboris occaecat
                aute officia enim duis sunt.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default SellerCard;
