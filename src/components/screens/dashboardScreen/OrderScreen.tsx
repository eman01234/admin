import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderDetail from "@/components/modules/orders/OrderDetail";

const OrderScreen = () => {
  return (
    <main className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-3xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
              <Progress value={25} aria-label="25% increase" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-3xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
              <Progress value={12} aria-label="12% increase" />
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ListFilter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Fulfilled</DropdownMenuItem>
                  <DropdownMenuItem>Declined</DropdownMenuItem>
                  <DropdownMenuItem>Refunded</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline">
                <File className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <TabsContent value="week">
            <Card>
              <CardHeader className="px-6 py-4">
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  Recent orders from your store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Liam Johnson</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Fulfilled</Badge>
                      </TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Olivia Smith</TableCell>
                      <TableCell>
                        <Badge variant="outline">Declined</Badge>
                      </TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Noah Williams</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Fulfilled</Badge>
                      </TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Emma Brown</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Fulfilled</Badge>
                      </TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* order detail */}
      <OrderDetail />
    </main>
  );
};

export default OrderScreen;
