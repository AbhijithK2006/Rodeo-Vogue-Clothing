import { motion } from "framer-motion";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import hero from "@/assets/hero.jpg";

const chapters = [
  {
    n: "01",
    title: "Origin",
    text:
      "Rodeo Vogue was founded on a single conviction — that what we wear should outlast the season that birthed it. Every piece begins as a question of necessity.",
  },
  {
    n: "02",
    title: "Material",
    text:
      "We source virgin wool from Biella, cashmere from the highlands of Mongolia, and sand-washed silk from the looms of Como. Material is the first design decision.",
  },
  {
    n: "03",
    title: "Hand",
    text:
      "Our garments are made by ateliers that have practiced the same craft for three generations. There are no shortcuts. There is only the hand.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden bg-ink">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/80" />
        <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[11px] uppercase tracking-[0.4em] text-bone/80"
          >
            The Maison
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-5 font-serif text-bone text-5xl md:text-7xl lg:text-8xl max-w-3xl leading-[0.95]"
          >
            A study in restraint.
          </motion.h1>
        </div>
      </section>

      <section className="container-luxe py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 font-serif text-3xl md:text-4xl leading-[1.2]"
          >
            "We are interested in the things that endure — fabric, line, light, intention."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Rodeo Vogue is a maison of considered design, founded in MMXXIV between Florence and Antwerp. We make a small
              number of garments each season, chosen with intent and made to last.
            </p>
            <p>
              Our approach is quiet. We believe in the discipline of the line, the patience of the cut, and the dignity of
              materials chosen well.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-bone">
        <div className="container-luxe py-32 space-y-32">
          {chapters.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={[about1, about2, hero][i]}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover hover:scale-[1.04] transition-transform duration-[1600ms] ease-silk"
                />
              </div>
              <div>
                <p className="font-serif text-7xl text-camel/40">{c.n}</p>
                <h2 className="mt-4 font-serif text-5xl md:text-6xl">{c.title}</h2>
                <p className="mt-8 text-muted-foreground leading-relaxed max-w-md text-lg">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto leading-[1.1]"
        >
          Made for those who choose less, and choose well.
        </motion.h2>
      </section>
    </>
  );
}
