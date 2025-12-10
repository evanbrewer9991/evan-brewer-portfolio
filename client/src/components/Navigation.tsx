import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Film, User, Briefcase, Mail, Camera } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Portfolio", icon: Film, code: "01" },
    { href: "/about", label: "Director", icon: User, code: "02" },
    { href: "/projects", label: "Production", icon: Camera, code: "03" },
    { href: "/contact", label: "Contact", icon: Mail, code: "04" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 bg-sidebar border-r border-sidebar-border z-50 hidden md:flex flex-col justify-between py-8">
      <div className="px-6">
        <div className="font-oswald text-2xl font-bold tracking-tighter text-primary mb-2">
          EB<span className="text-foreground">.FILM</span>
        </div>
        <div className="font-mono text-xs text-muted-foreground opacity-50">
          PROD. ID: 2025-EB
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "group flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-300 border-l-2",
                  isActive
                    ? "border-primary bg-sidebar-accent text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <span className="font-mono text-xs opacity-50 group-hover:text-primary transition-colors">
                  {item.code}
                </span>
                <span className={cn("font-oswald uppercase tracking-wide text-sm hidden md:block", isActive && "font-bold")}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="px-6">
        <div className="border-t border-sidebar-border pt-6">
          <div className="font-mono text-[10px] text-muted-foreground uppercase leading-relaxed">
            Status: Active<br />
            Loc: Savannah, GA<br />
            Role: Dir/Prod
          </div>
        </div>
      </div>
    </nav>
  );
}
