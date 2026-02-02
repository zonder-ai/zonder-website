"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Build your agent",
    description: "Use our templates or create custom agents. No code required.",
  },
  {
    step: "02",
    title: "Invite clients",
    description: "Send them a link. They get their own dashboard instantly.",
  },
  {
    step: "03",
    title: "Deploy & scale",
    description: "One click to deploy. Scale to hundreds of clients.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-ring mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Live in under an hour
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 text-sm font-mono text-muted-foreground">
                  {item.step}
                </div>
                <div className="pt-2">
                  <div className="font-medium text-lg mb-1">{item.title}</div>
                  <div className="text-muted-foreground">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
