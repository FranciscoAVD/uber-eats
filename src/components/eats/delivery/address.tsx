"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { MapPinIcon, MapPinCheckInsideIcon, PencilIcon, ChevronDownIcon, ArrowLeftIcon, ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const locations = [
    { address: "1302 Calle Mallorca", city: "Carolina", state: "PR", default: true },
    { address: "50 Halsey St", city: "Newark", state: "NJ", default: false },
    { address: "81 calle Mayaguez, 125", city: "San Juan", state: "PR", default: false },
    { address: "44 Paseo St", city: "Gurabo", state: "PR", default: false },
]
export default function Address() {
    const defaultAddress = locations.filter(loc => loc.default === true)
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="flex flex-col text-xs" onClick={() => setOpen(true)}>
                <span className="font-light">Deliver now</span>
                <span className="flex items-center gap-x-2 font-semibold">{defaultAddress[0].address}<ChevronDownIcon className="size-4" /></span>
            </button>
            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={{
                            opacity: 0.7,
                            top: "20%",
                        }}
                        animate={{
                            opacity: 1,
                            top: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                        }}
                        exit={{
                            top: "20%",
                            opacity: 0
                        }}
                        className="absolute inset-0 bg-white z-50"
                    >
                        <button className="absolute top-4 left-4" onClick={() => setOpen(false)}>
                            <span className="sr-only">Back</span>
                            <ArrowLeftIcon className="" />
                        </button>
                        <header className="flex p-4">
                            <h1 className="mx-auto">Addresses</h1>
                        </header>
                        <main>
                            <section>
                                <h2 className="text-lg font-semibold pl-4 pb-2">Saved Addresses</h2>
                                <ul className="">
                                    {locations.map(loc => (
                                        <li key={loc.address} className={cn("flex items-center gap-x-2 px-3 py-2 border-b", {
                                            "bg-neutral-100": loc.default === true
                                        })}>
                                            {loc.default ? <MapPinCheckInsideIcon className="size-5"
                                                fill={"black"}
                                                stroke="white"
                                            /> : <MapPinIcon className="size-4 mr-1" />}
                                            <div className="flex flex-col text-sm">
                                                <span className="font-semibold">{loc.address}</span>
                                                <span className="text-xs">{loc.city}, {loc.state}</span>
                                            </div>
                                            <Button size={"icon"} variant={"ghost"} className="ml-auto">
                                                <PencilIcon className="size-4" />
                                            </Button>
                                        </li>))}
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-lg font-semibold p-4">Time preference</h2>
                                <div className="flex items-center gap-x-4 px-4">
                                    <ClockIcon className="size-5" />
                                    <span className="text-sm font-semibold">Deliver now</span>
                                    <Button variant={"secondary"} className="rounded-full h-fit text-xs p-2 ml-auto font-semibold">Schedule</Button>
                                </div>
                            </section>
                        </main>

                    </motion.div>}
            </AnimatePresence>

        </>
    )
}
