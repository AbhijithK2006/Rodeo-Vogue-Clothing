import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { getProduct, related } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const sizes = ["XS", "S", "M", "L", "XL"];

export default function Product() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const [size, setSize] = useState<string | null>(null);
  const [zoom, setZoom] = useState({ x: 50, y: 50, active: false });
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/collections" replace />;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  };

  const handleAdd = () => {
    if (!size) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <section className="pt-28 container-luxe">
        <nav className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
          <Link to="/" className="link-underline">Home</Link>
          <span className="mx-3">/</span>
          <Link to="/collections" className="link-underline">Collections</Link>
          <span className="mx-3">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden bg-sand cursor-zoom-in"
            onMouseMove={onMove}
            onMouseLeave={() => setZoom((z) => ({ ...z, active: false }))}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-silk"
              style={{
                transform: zoom.active ? "scale(1.8)" : "scale(1)",
                transformOrigin: `${zoom.x}% ${zoom.y}%`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:py-8"
          >
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-4 text-2xl tabular-nums">${product.price.toLocaleString()}</p>

            <p className="mt-8 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Size</p>
                <button className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground link-underline">
                  Size guide
                </button>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 border text-sm transition-all duration-300 ${
                      size === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAdd}
                disabled={!size}
                className="flex-1 bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-camel transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {added ? "Added ✓" : !size ? "Select a size" : "Add to Cart"}
              </button>
              <button
                onClick={() => setWished((v) => !v)}
                aria-label="Wishlist"
                className="border border-border w-14 flex items-center justify-center hover:border-foreground transition-colors"
              >
                <Heart size={18} strokeWidth={1.25} fill={wished ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 py-6 border-y border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <div className="flex flex-col items-center text-center gap-2"><Truck size={18} strokeWidth={1.25}/>Free shipping</div>
              <div className="flex flex-col items-center text-center gap-2"><RefreshCw size={18} strokeWidth={1.25}/>30-day returns</div>
              <div className="flex flex-col items-center text-center gap-2"><ShieldCheck size={18} strokeWidth={1.25}/>Lifetime care</div>
            </div>

            <div className="mt-10">
              <p className="eyebrow mb-4">Details</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-3"><span className="text-camel">—</span>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-luxe pt-32">
        <div className="mb-12">
          <p className="eyebrow">You may also like</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">Related Pieces</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related(product.id).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
