'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DropDown from './dropdown'

const navigation = [
    { name: 'Home', href: '#' },
    { name: <DropDown colour="text-[#EFF0E2]" background="bg-[#8A2BE2]" />, href: '#' },
    { name: 'Booking', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Gallery', href: '#' }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#8A2BE2] text-[#EFF0E2] absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 justify-center">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="/logo-cream.svg"
                            className="h-10 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            {typeof item.name === "string" ? (
                                <a href={item.href} className="text-base font-semibold">
                                    {item.name}
                                </a>
                            ) : (
                                item.name
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#8A2BE2] text-[#EFF0E2] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="/logo-cream.svg"
                                className="h-10 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-10 py-10">
                                {navigation.map((item, idx) => (
                                    <div key={idx} className="flex items-center">
                                        {typeof item.name === "string" ? (
                                            <a href={item.href} className="text-base font-semibold">
                                                {item.name}
                                            </a>
                                        ) : (
                                            item.name
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}