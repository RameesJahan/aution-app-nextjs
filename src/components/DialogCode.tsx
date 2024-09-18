"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"


type DialogCodeProps = {
  onSubmit(c: string): void;
}
 
export function DialogCode({ onSubmit }: DialogCodeProps) {
  const [ code, setCode ] = useState<string>("")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Enter Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Code</DialogTitle>
          <DialogDescription>
            Enter your private code here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="code">
              Code
            </Label>
            <Input id="code" value={code} onChange={(e) => setCode(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => onSubmit(code)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}