import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received. We will be in touch shortly.");
    }, 900);
  };

  return (
    <section className="pt-36 pb-32 container-luxe">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[1]">Say hello.</h1>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
            For press, partnerships, or private appointments at the atelier — write to us directly. We reply within
            two working days.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <Mail size={18} strokeWidth={1.25} className="mt-1 text-camel" />
              <div>
                <p className="eyebrow">Email</p>
                <a href="mailto:hello@veloura.com" className="mt-1 block link-underline">hello@veloura.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.25} className="mt-1 text-camel" />
              <div>
                <p className="eyebrow">Atelier</p>
                <p className="mt-1">Via della Spada 14<br />50123 Firenze, Italia</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow">Follow</p>
            <div className="mt-4 flex gap-5">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-camel transition-colors" aria-label="social">
                  <Icon size={20} strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="space-y-8 lg:pt-12"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id} className="relative">
              <label htmlFor={f.id} className="eyebrow">{f.label}</label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="mt-2 w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="eyebrow">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-camel transition-colors duration-500 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
