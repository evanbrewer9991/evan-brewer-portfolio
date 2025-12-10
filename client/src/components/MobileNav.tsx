import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Film, User, Camera, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Portfolio", icon: Film, code: "01" },
    { href: "/about", label: "Director", icon: User, code: "02" },
    { href: "/projects", label: "Production", icon: Camera, code: "03" },
    { href: "/contact", label: "Contact", icon: Mail, code: "04" },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
      <div className="font-oswald text-xl font-bold tracking-tighter text-primary">
        EB<span className="text-foreground">.FILM</span>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background border-l border-border p-0">
          <div className="flex flex-col h-full py-8">
            <div className="px-6 mb-8">
              <div className="font-oswald text-2xl font-bold tracking-tighter text-primary mb-2">
                MENU
              </div>
              <div className="h-1 w-12 bg-primary"></div>
            </div>

            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                    <div
                      className={cn(
                        "group flex items-center gap-4 px-4 py-4 cursor-pointer transition-all duration-300 border-l-2",
                        isActive
                          ? "border-primary bg-sidebar-accent text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <span className="font-mono text-xs opacity-50 group-hover:text-primary transition-colors">
                        {item.code}
                      </span>
                      <span className={cn("font-oswald uppercase tracking-wide text-lg", isActive && "font-bold")}>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
