"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Home,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const SideBar = (props: Props) => {
  const [selectedLink, setSelectedLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Atklt Tera</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/Home"
              onClick={() => handleLinkClick("/Home")}
              className={`flex items-center gap-3 rounded-lg ${
                selectedLink === "/Home" ? "bg-muted" : ""
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/order"
              onClick={() => handleLinkClick("/order")}
              className={`flex items-center gap-3 rounded-lg ${
                selectedLink === "/order" ? "bg-muted" : ""
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="/product"
              onClick={() => handleLinkClick("/product")}
              className={`flex items-center gap-3 rounded-lg ${
                selectedLink === "/product" ? "bg-muted" : ""
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="/customer"
              onClick={() => handleLinkClick("/customer")}
              className={`flex items-center gap-3 rounded-lg ${
                selectedLink === "/customer" ? "bg-muted" : ""
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
