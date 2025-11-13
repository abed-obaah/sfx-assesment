"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const messages = [
  {
    id: 1,
    name: "Peter Japhet",
    message: "I need some maintenance...",
    time: "Jan 2, 12:31pm",
    color: "bg-teal-400",
  },
  {
    id: 2,
    name: "Leo Arome",
    message: "I got your email ad and ...",
    time: "Wed, 06:00pm",
    color: "bg-purple-700",
  },
  {
    id: 3,
    name: "James Robinson",
    message: "I need some maintenance...",
    time: "Jan 2, 12:31pm",
    color: "bg-teal-400",
  },
  {
    id: 4,
    name: "Lupita Jonah",
    message: "Thank you so much for ...",
    time: "Feb 13, 06:15pm",
    color: "bg-amber-400",
  },
  // Additional messages for scrolling
 
  { id: 10, name: "Tom Brown", message: "Thanks for your feedback!", time: "Mar 7, 10:00am", color: "bg-purple-600" },
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-96 border-l bg-[#F9F9F9] overflow-y-auto fixed right-0 top-30 rounded-tl-[75px] pt-6">
      {/* Tabs */}
      <div className="flex items-center justify-around p-6">
        <button className="text-gray-400 text-lg font-semibold">Stats</button>
        <button className="text-black text-lg font-semibold">Messages</button>
      </div>

      <Separator />

      {/* Messages list with scroll */}
      <div className="p-6 space-y-4 flex-1 overflow-y-auto pr-4" style={{ height: 'calc(100vh - 100px)', paddingBottom: '60px' }}>
        {messages.map((msg) => (
          <Card
            key={msg.id}
            className="flex items-center justify-between p-4 rounded-2xl hover:shadow-md transition"
          >
            <CardContent className="flex flex-col w-full p-0 justify-between h-full">
              {/* Top row: Avatar and time/arrow */}
              <div className="flex items-center justify-between w-full px-4">
                <div
                  className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center text-white font-semibold",
                    msg.color
                  )}
                >
                  {msg.name.charAt(0)}
                </div>

                <div className="flex items-center gap-1 text-gray-400">
                  <p className="text-xs">{msg.time}</p>
                  <ChevronRight className="h-4 w-4 text-gray-700" />
                </div>
              </div>

              {/* Bottom-left: Name and message */}
              <div className="flex flex-col items-start text-left px-4 mt-4">
                <p className="text-sm font-semibold text-gray-900">{msg.name}</p>
                <p className="text-sm text-gray-400 truncate max-w-xs">{msg.message}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </aside>
  );
}
