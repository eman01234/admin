import React from "react";
import { ChevronLeft, ChevronRight, Copy, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

type Props = {};

const OrderDetail = (props: Props) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col bg-muted/50">
        <CardTitle className="text-lg flex items-center gap-2">
          Order Detail
          <Button size="icon" variant="outline" className="ml-auto">
            <Copy className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>Date: November 23, 2023</CardDescription>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <ul className="grid gap-3">
          <li className="flex justify-between">
            <span>Glimmer Lamps x2</span>
            <span>$250.00</span>
          </li>
          <li className="flex justify-between">
            <span>Aqua Filters x1</span>
            <span>$49.00</span>
          </li>
        </ul>
        <Separator className="my-4" />
        <ul className="grid gap-3">
          <li className="flex justify-between">
            <span>Subtotal</span>
            <span>$299.00</span>
          </li>

          <li className="flex justify-between">
            <span>Tax</span>
            <span>$25.00</span>
          </li>
          <li className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$329.00</span>
          </li>
        </ul>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-semibold">Delivery Information</div>
            <address className="not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <br />
              <span>1234 Main St.</span>
              <br />
              <span>Anytown, CA 12345</span>
            </address>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Payment Information</div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
            </span>
            <span></span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated November 23, 2023
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderDetail;
