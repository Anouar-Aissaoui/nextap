import Link from "next/link";
import { Home, Compass, Package, Search, Sparkles } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex justify-around items-center h-full">
          <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Sparkles className="h-6 w-6" />
            <span className="text-xs font-medium">Today</span>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Compass className="h-6 w-6" />
            <span className="text-xs font-medium">Games</span>
          </Link>
          <Link href="/app" className="flex flex-col items-center justify-center text-primary font-semibold">
            <Package className="h-6 w-6" />
            <span className="text-xs">Apps</span>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Arcade</span>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Search className="h-6 w-6" />
            <span className="text-xs font-medium">Search</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
