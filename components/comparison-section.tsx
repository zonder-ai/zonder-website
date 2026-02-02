"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow, Users, Lock, Zap } from "lucide-react";

const problems = [
  {
    before: "Copy workflows for each client",
    after: "Deploy once, scale to thousands",
    icon: Workflow,
  },
  {
    before: "Clients can't see results",
    after: "Every client gets their dashboard",
    icon: Users,
  },
  {
    before: "API keys scattered everywhere",
    after: "Secure credential management",
    icon: Lock,
  },
  {
    before: "Manual setup per client",
    after: "One-click deployment",
    icon: Zap,
  },
];

export function ComparisonSection() {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-ring mb-3"
          >
            Why Zonder
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Built for agencies.
            <br />
            Not for tinkerers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Workflow tools weren't designed for client delivery. Zonder is.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-ring/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ring/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ring/20 transition-colors">
                    <Icon className="w-5 h-5 text-ring" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-muted-foreground line-through text-sm">
                        {item.before}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-ring flex-shrink-0" />
                      <span className="font-medium">{item.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
