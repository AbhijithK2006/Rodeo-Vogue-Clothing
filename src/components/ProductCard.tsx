import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden bg-sand aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.06]"
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-silk bg-background/95 backdrop-blur-sm py-3 text-center">
            <span className="text-[11px] uppercase tracking-[0.3em]">Discover</span>
          </div>
        </div>
        <div className="mt-4 md:mt-5 flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4">
          <div>
            <p className="eyebrow text-[9px] md:text-[11px]">{product.category}</p>
            <h3 className="font-serif text-base md:text-xl mt-1">{product.name}</h3>
          </div>
          <p className="text-sm tabular-nums">${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  );
}
