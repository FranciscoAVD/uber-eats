"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GridIcon, UserIcon, TicketIcon } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
const nav = [
    { label: "Home", href:"/", icon: HomeIcon },
    { label: "Services", href:"/services", icon: GridIcon },
    { label: "Activity", href:"/activity", icon: TicketIcon },
    { label: "Account", href:"/account", icon: UserIcon },
]
export default function Footer({ className }: { className?: string }) {
    const active = usePathname();
    return (
        <footer className={cn(`flex items-center justify-evenly pt-4 pb-6 border-t-2  ${className}`)}>
            {nav.map(n => (
                <Button
                size={"icon"}
                variant={"ghost"} 
                className={`flex-col h-fit text-xs ${active===n.href ? "text-neutral-900" : "text-neutral-500"}`}
                asChild>
                    <Link href={n.href}>
                        <n.icon className="size-5" />
                        <span>{n.label}</span>
                    </Link>
                    
                </Button>
            ))}
        </footer>
    )
}
