"use client";

import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatsCards from "@/components/ChartCard";
import RightSidebar from "@/components/ui/RightSidebar";

const data = [
  { name: "Mar 1 - 7", amount: 50000 },
  { name: "Mar 8 - 14", amount: 120000 },
  { name: "Mar 15 - 21", amount: 120000 },
  { name: "Mar 22 - 28", amount: 120000 },
  { name: "Final wk", amount: 190000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* MAIN DASHBOARD AREA */}
      <main className="flex-1 bg-white flex flex-col p-6">
        <div className="w-full max-w-3xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold text-amber-500">👋 Hey Martins!</h2>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">
              You earned <span className="text-black">NGN 3,000,000</span> this month.
            </h1>
          </div>

          {/* Date filter */}
          <div className="flex items-center mb-4">
            <p className="text-sm text-gray-500 pr-2">Last 30 days</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center px-2 py-1 rounded bg-purple-200 cursor-pointer">
                  <ChevronDown className="h-4 w-4 text-purple-900" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>This week</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Chart */}
          <Card className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" stroke="#999" fontSize={12} />
                  <YAxis stroke="#999" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#e9d5ff" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <StatsCards />
      </main>

      {/* RIGHT SIDEBAR */}
      <RightSidebar />
    </div>
  );
}
