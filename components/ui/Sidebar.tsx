'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  UsersIcon,
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  GiftIcon,
  EyeIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [paymentsOpen, setPaymentsOpen] = useState(true)
  const [commerceOpen, setCommerceOpen] = useState(false)

const payments = [
  { name: 'Transactions', img: '/transaction.png' },
  { name: 'Customers', img: '/Customers.png' },
  { name: 'Payouts', img: '/Payouts.png' },
  { name: 'Balances', img: '/Balances.png' },
  { name: 'Subscriptions', img: '/Subscriptions.png' },
  { name: 'Payment plans', img: '/Payment-plans.png' },
]

const commerce = [
  { name: 'Referrals', img: '/referrals.png' },
  { name: 'Audit logs', img: '/Audit-logs.png' },
  { name: 'Settings', img: '/settings.png' },
]


  return (
    <>
      {/* Mobile Sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition-all duration-300 bg-white shadow-xl">
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  ✕
                </button>
              </div>
            </TransitionChild>

            <div className="flex flex-col gap-y-6 overflow-y-auto px-6 pb-6 pt-8">
              <div className="flex h-12 items-center gap-x-2">
                <Image
                  src="/logo.png"
                  alt="SFx"
                  width={30}
                  height={30}
                  className="h-8 w-auto"
                />
                {/* <span className="text-lg font-bold text-[#7C3AED]">SFx</span> */}
              </div>

              <nav className="flex-1 text-sm font-medium text-gray-600">
                {/* Payments Section */}
                <div>
                  <button
                    onClick={() => setPaymentsOpen(!paymentsOpen)}
                    className="flex w-full items-center justify-between text-gray-700 font-semibold"
                  >
                    <span>Payments</span>
                    {paymentsOpen ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </button>
                  {paymentsOpen && (
                    <ul className="mt-3 space-y-3">
                      {payments.map((item) => (
                        <li key={item.name}>
                          <a
                            href="#"
                            className="flex items-center gap-x-3 text-gray-500 hover:text-gray-900"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-200" />

                {/* Commerce Section */}
                <div>
                  <button
                    onClick={() => setCommerceOpen(!commerceOpen)}
                    className="flex w-full items-center justify-between text-gray-700 font-semibold"
                  >
                    <span>Commerce</span>
                    {commerceOpen ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </button>
                  {commerceOpen && (
                    <ul className="mt-3 space-y-3">
                      {commerce.map((item) => (
                        <li key={item.name}>
                          <a
                            href="#"
                            className="flex items-center gap-x-3 text-gray-500 hover:text-gray-900"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r border-gray-200 bg-[#FCFCFC]">
        <div className="flex flex-col flex-grow gap-y-6 overflow-y-auto px-6 pb-6 pt-8">
          <div className="flex h-12 items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="SFx"
              width={30}
              height={30}
              className="h-8 w-auto"
            />
            {/* <span className="text-lg font-bold text-[#7C3AED]">SFx</span> */}
          </div>

          <nav className="flex-1 text-sm font-medium text-gray-600">
            {/* Payments Section */}
            <div>
             <button
  onClick={() => setPaymentsOpen(!paymentsOpen)}
  className="flex w-full items-center justify-between text-gray-700 font-semibold"
>
  <span>Payments</span>
 <Image
  width={4}
    height={3}
    src={paymentsOpen ? "/Polygon1.png" : "/Polygon2.png"} 
    alt={paymentsOpen ? "Up" : "Down"}
    className="h-3 w-4"
  />
</button>

             {paymentsOpen && (
  <ul className="mt-3 space-y-3">
    {payments.map((item) => (
      <li key={item.name}>
        <a
          href="#"
          className="flex items-center gap-x-3 text-gray-500 hover:text-gray-900"
        >
           <Image width={4}
    height={3}
     src={item.img} alt={item.name} className="h-5 w-5" />
          {item.name}
        </a>
      </li>
    ))}
  </ul>
)}

            </div>

            <div className="my-4 border-t border-gray-200" />

            {/* Commerce Section */}
           <div>
  <button
    onClick={() => setCommerceOpen(!commerceOpen)}
    className="flex w-full items-center justify-between text-gray-700 font-semibold"
  >
    <span>Commerce</span>
    <Image
  width={4}
    height={3}
    src={commerceOpen ? "/Polygon1.png" : "/Polygon2.png"} 
    alt={commerceOpen ? "Up" : "Down"}
    className="h-3 w-4"
  />
  </button>
  {commerceOpen && (
    <ul className="mt-3 space-y-3">
      {commerce.map((item) => (
        <li key={item.name}>
          <a
            href="#"
            className="flex items-center gap-x-3 text-gray-500 hover:text-gray-900"
          >
               <Image width={4}
    height={3} src={item.img} alt={item.name} className="h-5 w-5" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

          </nav>
        </div>
      </div>
    </>
  )
}
