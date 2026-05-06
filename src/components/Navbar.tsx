import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = onHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk",
        scrolled ? "bg-background/85 backdrop-blur-xl md:border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="container-luxe flex h-20 items-center justify-between">
        <button
          className={cn("md:hidden -ml-2 p-2 transition-colors", dark ? "text-bone" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[12px] uppercase tracking-[0.25em] link-underline transition-colors",
                  dark ? "text-bone/85 hover:text-bone" : "text-foreground/70 hover:text-foreground",
                  isActive && (dark ? "text-bone" : "text-foreground")
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-700 ease-silk flex items-center justify-center z-10",
            dark
              ? "bg-ink px-10 py-3 rounded-b-[2rem] shadow-2xl min-w-[260px]"
              : "bg-transparent py-6"
          )}
        >
          <Link
            to="/"
            className={cn(
              "font-transcity tracking-[0.35em] transition-all duration-700",
              dark ? "text-bone text-base md:text-lg" : "text-foreground text-2xl md:text-[28px]"
            )}
          >
            RODEO VOGUE
          </Link>
        </div>



        <div className={cn("flex items-center gap-5", dark ? "text-bone" : "text-foreground")}>
          <button aria-label="Search" className="hidden sm:block hover:opacity-70 transition-opacity">
            <Search size={18} strokeWidth={1.25} />
          </button>
          <button aria-label="Cart" className="relative hover:opacity-70 transition-opacity">
            <ShoppingBag size={18} strokeWidth={1.25} />
            <span className="absolute -top-1 -right-2 text-[10px]">0</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-background transition-all duration-500 ease-silk",
          open ? "max-h-96 border-b border-border" : "max-h-0 border-none"
        )}
      >
        <div className="container-luxe flex flex-col py-6 gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className="text-[13px] uppercase tracking-[0.25em] text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
