import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real deployment this would POST to an API
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-hero pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Whether you're interested in our products, need compatibility guidance, or want to discuss a project — we're here to help.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          {submitted ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center">
                <Send className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                Thank you for your enquiry
              </h2>
              <p className="text-muted-foreground">
                We will review your message and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company / Organisation
                </label>
                <input
                  id="company"
                  name="company"
                  maxLength={150}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Acme Properties Ltd"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project or enquiry..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-semibold text-lg shadow-glow hover:brightness-110 transition-all w-full justify-center"
              >
                Send Enquiry
                <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Or email us directly at{" "}
                <a
                  href="mailto:contact@google.cm.com"
                  className="text-primary hover:underline"
                >
                  contact@google.cm.com
                </a>
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
