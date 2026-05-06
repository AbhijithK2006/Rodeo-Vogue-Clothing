import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <h3 className="font-transcity text-3xl tracking-[0.2em]">RODEO VOGUE</h3>
          <p className="mt-6 text-sm text-bone/60 leading-relaxed">
            A maison of considered design. Crafted in limited series, made to outlast seasons.
          </p>
          <form className="mt-8 flex border-b border-bone/30 focus-within:border-bone transition-colors">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-bone/40 outline-none"
            />
            <button className="text-[11px] uppercase tracking-[0.25em] hover:text-camel transition-colors">
              Subscribe →
            </button>
          </form>
        </div>

        <div>
          <p className="eyebrow text-bone/50">Maison</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="link-underline text-bone/80">Our Story</Link></li>
            <li><Link to="/collections" className="link-underline text-bone/80">Collections</Link></li>
            <li><Link to="/contact" className="link-underline text-bone/80">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bone/50">Follow</p>
          <div className="mt-5 flex gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-camel transition-colors"><Instagram size={18} strokeWidth={1.25} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-camel transition-colors"><Twitter size={18} strokeWidth={1.25} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-camel transition-colors"><Youtube size={18} strokeWidth={1.25} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-bone/40">
          <p>© {new Date().getFullYear()} Rodeo Vogue Maison</p>
          <p>Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}
