"use client";

import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList
} from "recharts";

export default function StatsCards() {
  const successData = [
    { name: "Successful", value: 150 },
    { name: "Unsuccessful", value: 100 },
  ];

  
  const COLORS = ["#A6D997", "#DFEEDB"];

  const paymentIssues = [
    { name: "a", value: 1, color: "#facc15" },
    { name: "x", value: 5, color: "#fde68a" },
    { name: "o", value: 3, color: "#fca5a5" },
    { name: "n", value: 10, color: "#67e8f9" },
  ];

  const totalErrors = paymentIssues.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <main className=" bg-white flex items-center py-8">
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Success Rate Card */}
        <Card className="p-6 pb-2 space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">Success rate</h2>

          <div className="flex flex-col items-center justify-between h-full">
            {/* Pie Chart */}
            <div className="w-48 h-48 relative">
              <ResponsiveContainer>
                <PieChart>
  <Pie
        data={successData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
      >
        {successData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            cornerRadius={entry.name === "Successful" ? 40 : 0}
          />
        ))}
      </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-green-600">
                  98%
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-10 text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-4 h-4 rounded bg-[#DFEEDB]"></div>
                  <span className="font-montserrat font-semibold text-[32px] leading-[100%] tracking-[0] text-gray-700">
                    1
                  </span>
                </div>
                <span className="text-gray-500">Unsuccessful</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-4 h-4 rounded bg-[#A6D997]"></div>
                  <span className="font-montserrat font-semibold text-[32px] leading-[100%] tracking-[0] text-gray-700">
                    150
                  </span>
                </div>
                <span className="text-gray-500">Successful</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Issues Card */}
        <Card className="p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">
            Payment issues
          </h2>

          <div className="w-full h-40">
            <ResponsiveContainer>
  <BarChart data={paymentIssues}>
    <XAxis dataKey="name" axisLine={false} tickLine={false} />
    <YAxis hide />
    <Tooltip />
    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
      {paymentIssues.map((entry, index) => (
        <Cell key={`bar-${index}`} fill={entry.color} />
      ))}
      <LabelList dataKey="value" position="top" fill="black" />
    </Bar>
  </BarChart>
</ResponsiveContainer>

          </div>

          <p className="text-orange-500 font-semibold text-sm px-2">
            Total number of errors:{" "}
            <span className="text-orange-600 text-base">{totalErrors}</span>
          </p>

          <div className="space-y-2 text-sm px-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[8] flex items-center justify-center bg-yellow-400 text-white text-xs font-bold">
                a
              </div>
              <span>Customer errors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[8] flex items-center justify-center bg-yellow-200 text-gray-800 text-xs font-bold">
                x
              </div>
              <span>Fraud blocks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[8] flex items-center justify-center bg-red-300 text-white text-xs font-bold">
                o
              </div>
              <span>Bank errors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[8] flex items-center justify-center bg-cyan-300 text-white text-xs font-bold">
                n
              </div>
              <span>System errors</span>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
