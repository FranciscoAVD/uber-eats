"use client";
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button'
import { CheckIcon, ChevronDownIcon, CoffeeIcon, ShoppingBasketIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const deliveryOptions = [
    { label: "Delivery", icon: CoffeeIcon, default: true },
    { label: "Pickup", icon: ShoppingBasketIcon, default: false },
]
export default function DeliverOptions() {
    const [options, setOptions] = useState(deliveryOptions)
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button variant={"secondary"} className='gap-x-2 text-xs h-fit px-3 py-1.5 font-semibold rounded-full' onClick={() => setOpen(true)}>
                Delivery <ChevronDownIcon className='size-4' />
            </Button>

            {open &&
                <AnimatePresence mode='wait'>
                    <motion.div className="absolute inset-0 bg-neutral-900/50" onClick={() => setOpen(false)}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                bottom: 0,
                            }}
                            animate={{
                                opacity: 1,
                                bottom: "5rem",
                            }}
                            exit={{
                                opacity: 0,
                                bottom: "-100%",
                            }}
                            className='absolute flex flex-col w-full rounded-tl-3xl pt-2 pb-4 rounded-tr-3xl bg-white'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <header className="flex justify-center border-b px-4 pb-2">
                                <h1>Dining options</h1>
                            </header>
                            <ul className='text-sm'>
                                {options.map((opt, idx) => (
                                    <li key={opt.label} className="">
                                        <Button 
                                        variant={"ghost"} 
                                        className='gap-x-4 w-full h-fit py-4 border-b'
                                        onClick={() => {
                                            const change = [...options]
                                            for(let i = 0; i < change.length; i++) {
                                                if(i === idx) change[i].default = true;
                                                else change[i].default = false
                                            }
                                            setOptions(change)
                                        }}
                                        >
                                            <opt.icon className='size-5' />
                                            <span>{opt.label}</span>
                                            <CheckIcon className={`text-green-600 ml-auto ${!opt.default ? "invisible" : null}`} />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <Button 
                            className='w-[calc(100%-2rem)] mt-8 mx-auto' 
                            onClick={() => setOpen(false)}
                            >
                                Confirm
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            }
        </>
    )
}
