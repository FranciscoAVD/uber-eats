"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import cartImage from "../../../../public/shopping-cart.webp"
export default function Cart() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size={"icon"} variant={"ghost"} onClick={()=>setOpen(true)}>
          <ShoppingCartIcon className="size-4" />
      </Button>
      <AnimatePresence>
      {open && 
        <motion.div
          initial={{
            top: "20%",
            opacity: 0
          }}
          animate={{
            top: 0,
            opacity: 1
          }}
          exit={{
            top: "20%",
            opacity: 0
          }}
          className="absolute bg-white inset-0 h-[calc(100%-5rem)]  p-4 text-center"
        >
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setOpen(false)}
            className="absolute top-2 left-2"
          ><ArrowLeftIcon className="size-6" /></Button>
          <header><h1>Cart</h1></header>
          <div className="flex flex-col justify-center gap-y-8 h-full">
            <Image src={cartImage} alt="" className="w-[75%] aspect-square mx-auto rounded-xl" />
            <div className="space-y-1">
              <h2 className="font-semibold">Add items to start a cart</h2>
              <p className="text-sm">
                Once you add items from a restaurant or store, your cart will appear here.
              </p>
            </div>

            <Button onClick={() => setOpen(false)}>Start shopping</Button>
          </div>

        </motion.div>
      }
      </AnimatePresence>
      
    </>
  )
}
