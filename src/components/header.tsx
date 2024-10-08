"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from './ui/button'
import { CarIcon, PizzaIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
export default function Header() {
    const active = usePathname();
    return (
        <header className='sticky top-0 inset-x-0 flex'>
            <Button variant={"ghost"} className="grow gap-x-2 text-base font-semibold rounded-none border-b-4"  asChild>
                <Link href="/"><CarIcon className="size-6"/>Rides</Link>
            </Button>
            <Button variant={"ghost"} className={cn(`grow gap-x-2 text-base font-semibold rounded-none border-b-4 ${active === "/" ? "border-neutral-900" : ""}`)} asChild>
                <Link href="/"><PizzaIcon className="size-6"/>Eats</Link>
            </Button>
        </header>
    )
}
