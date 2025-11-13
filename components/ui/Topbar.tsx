'use client'

import { useState } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { BellIcon, } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Topbar() {
  const [language, setLanguage] = useState('English')
  const [isLive, setIsLive] = useState(true)

  return (
    <div className="sticky top-0 z-40 py-10 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Search */}
      <form action="#" method="GET" className="relative flex-1">
  <MagnifyingGlassIcon
    aria-hidden="true"
    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
  />
  <input
    name="search"
    placeholder="Search"
    aria-label="Search"
    className="w-[440px] h-[56px] mt-[6px] rounded-[50px] bg-gray-50 pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-indigo-100"
  />
</form>


      {/* Live toggle */}
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setIsLive(!isLive)}
          className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
            isLive ? 'bg-green-400' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isLive ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
        <span className="text-sm text-gray-700">Live</span>
      </div>

      {/* Language selector */}
      <div className="flex items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-full border border-gray-200 bg-[#BDBDBD33] px-6 py-3 text-sm text-gray-700 outline:none"
        >
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>

      {/* Notification Bell */}
   <div className="relative">
        <button
            type="button"
            className="relative rounded-[10px] bg-[#E0E0E0] p-2 text-gray-400 hover:text-gray-600"
        >
            <BellIcon className="h-5 w-5" />
            <span className="absolute -top-[3px] -right-[3px] h-2.5 w-2.5 rounded-full bg-purple-400 border-2 border-white"></span>
        </button>
        </div>


      {/* User info */}
     <div className="flex items-center rounded-[10px] border border-gray-100 bg-gray-50 cursor-pointer h-12">
  <div className="h-full w-12">
    <Image
      src="/pimage.png"
      alt="User"
     width={48}
     height={48}
      className="object-cover"
    />
  </div>
  <div className="ml-2 hidden sm:block">
    <p className="text-sm font-semibold text-gray-900 mb-2">Martins Chidume</p>
    <p className="text-xs text-gray-400">ID: 1234567</p>
  </div>
  <ChevronDownIcon className="ml-2 pt-2 h-6 w-6 text-gray-400" />
</div>

    </div>
  )
}
