import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "Women", "Men", "New Arrivals"] as const;
const sizes = ["XS", "S", "M", "L", "XL"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $700", min: 0, max: 700 },
  { label: "$700 — $1,200", min: 700, max: 1200 },
  { label: "$1,200+", min: 1200, max: Infinity },
];

export default function Collections() {
  const [params, setParams] = useSearchParams();
  const initialCat = (params.get("category") as typeof categories[number]) || "All";
  const [cat, setCat] = useState<typeof categories[number]>(initialCat);
  const [size, setSize] = useState<string>("All");
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx];
    return products.filter(
      (p) => (cat === "All" || p.category === cat) && p.price >= range.min && p.price <= range.max
    );
  }, [cat, priceIdx]);

  const setCategory = (c: typeof categories[number]) => {
    setCat(c);
    if (c === "All") params.delete("category");
    else params.set("category", c);
    setParams(params, { replace: true });
  };

  return (
    <>
      <section className="pt-36 pb-12 container-luxe">
        <p className="eyebrow">Collections</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[1]">The Atelier Edit.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Limited series, made in considered quantities. Each piece is numbered and signed by the maison.
        </p>
      </section>

      {/* Filters */}
      <section className="container-luxe sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-y border-border">
        <div className="py-5 flex flex-wrap gap-x-10 gap-y-4 items-center text-[11px] uppercase tracking-[0.25em]">
          <div className="flex gap-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`transition-colors ${cat === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="hidden md:block h-4 w-px bg-border" />
          <div className="flex gap-3 items-center">
            <span className="text-muted-foreground">Size</span>
            <button
              onClick={() => setSize("All")}
              className={size === "All" ? "text-foreground underline underline-offset-4" : "text-muted-foreground"}
            >
              All
            </button>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={size === s ? "text-foreground underline underline-offset-4" : "text-muted-foreground hover:text-foreground"}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="hidden md:block h-4 w-px bg-border" />
          <div className="flex gap-4 items-center">
            <span className="text-muted-foreground">Price</span>
            {priceRanges.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setPriceIdx(i)}
                className={priceIdx === i ? "text-foreground underline underline-offset-4" : "text-muted-foreground hover:text-foreground"}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-16">
        {filtered.length === 0 ? (
          <p className="text-center py-32 text-muted-foreground">No pieces match your selection.</p>
        ) : (
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        )}
      </section>
    </>
  );
}
