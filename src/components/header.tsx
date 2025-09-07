
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Compass, Home, Package, Search, Sparkles } from "lucide-react";
import SiteLogo from "./site-logo";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/today", icon: Sparkles, label: "Today" },
    { href: "/games", icon: Compass, label: "Games" },
    { href: "/app", icon: Package, label: "Apps" },
    { href: "/arcade", icon: Home, label: "Arcade" },
    { href: "/search", icon: Search, label: "Search" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
            <div className="container flex h-16 items-center">
                <div className="mr-8 flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <SiteLogo className="h-6 w-6" />
                        <span className="font-bold text-lg">AppsGU</span>
                    </Link>
                </div>
                <nav className="flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
