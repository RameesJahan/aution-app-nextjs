import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {};

const Header = (props: Props) => {
  const user = {};
  return (
    <Card className="flex w-full max-w-screen-sm justify-between items-center p-4 sticky top-2 z-50">
      <Link href="/">
        <h4 className="font-extrabold">Auction Hub</h4>
      </Link>
      {user ? (
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback className="relative">
                  <Image fill src="/avatar.png" alt="Avatar" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-2">
                <div className="*:w-full gap-2 flex">
                  <Button variant="outline" asChild>
                    <Link href="/">Create Bid</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/">Join Bid</Link>
                  </Button>
                </div>
                <Button variant="destructive">Log Out</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button className="hidden sm:block" variant="outline" asChild>
            <Link href="/auth/register">Create Account</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login">Log In</Link>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Header;