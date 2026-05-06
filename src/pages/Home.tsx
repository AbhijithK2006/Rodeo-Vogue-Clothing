import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import womenImg from "@/assets/collection-women.jpg";
import menImg from "@/assets/collection-men.jpg";
import newImg from "@/assets/collection-new.jpg";
import about2 from "@/assets/about-2.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ExpandableGallery } from "@/components/ui/gallery-animation";
import DemoOne from "@/components/ui/demo";

const galleryImages = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop",
];

const collections = [
  { name: "Women", image: womenImg, href: "/collections?category=Women" },
  { name: "Men", image: menImg, href: "/collections?category=Men" },
  { name: "New Arrivals", image: newImg, href: "/collections?category=New%20Arrivals" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <ExpandableGallery images={galleryImages} className="h-full w-full" containerClassName="h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70 pointer-events-none z-10" />

        <div className="relative z-20 container-luxe h-full flex flex-col justify-end pb-24 md:pb-32 pointer-events-none">
          <div className="pointer-events-auto w-fit">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[11px] uppercase tracking-[0.4em] text-bone/80"
          >
            Autumn / Winter — MMXXVI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-bone text-5xl md:text-7xl lg:text-[96px] leading-[0.95] max-w-4xl"
          >
            Redefining<br />Modern Elegance.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-camel hover:text-bone transition-all duration-500 ease-silk"
            >
              Shop Now
              <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="link-underline text-bone text-[11px] uppercase tracking-[0.3em]">
              The Maison
            </Link>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/60 text-[10px] uppercase tracking-[0.4em] z-20 pointer-events-none"
        >
          Scroll
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border py-6 bg-bone">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 pr-16 font-serif text-3xl md:text-5xl text-ink/80">
              <span>Crafted in Italy</span><span>·</span>
              <span>Limited Series</span><span>·</span>
              <span>Considered Design</span><span>·</span>
              <span>Since MMXXIV</span><span>·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="container-luxe py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16"
        >
          <div>
            <p className="eyebrow">The Edit</p>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl">Featured Collections</h2>
          </div>
          <Link to="/collections" className="link-underline text-[11px] uppercase tracking-[0.3em]">
            View all →
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={c.href} className="group block relative overflow-hidden bg-sand aspect-[3/4]">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-bone text-3xl md:text-4xl">{c.name}</h3>
                  <p className="mt-3 text-bone/80 text-[11px] uppercase tracking-[0.3em] inline-flex items-center gap-2">
                    Explore <ArrowRight size={12} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="bg-bone">
        <div className="container-luxe py-32 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] overflow-hidden bg-sand"
          >
            <img src={about2} alt="Atelier" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <p className="eyebrow">The Maison</p>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[1.05]">
              Quiet luxury,<br />uncompromising craft.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              Each Rodeo Vogue piece begins as raw material chosen with intent — virgin wool, Mongolian cashmere, sand-washed silk —
              and is shaped by ateliers that have worked the same craft for generations.
            </p>
            <Link to="/about" className="mt-10 inline-block link-underline text-[11px] uppercase tracking-[0.3em]">
              Read our story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Image Reveal Gallery */}
      <section className="bg-bone/50 border-y border-border">
        <div className="container-luxe py-24">
          <div className="text-center mb-16">
            <p className="eyebrow">Curated</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The Visual Lookbook</h2>
          </div>
          <DemoOne />
        </div>
      </section>


      {/* Featured products */}
      <section className="container-luxe py-32">
        <div className="mb-16">
          <p className="eyebrow">Selected</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">The Season</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
