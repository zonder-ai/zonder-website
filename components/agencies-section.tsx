"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = [
  "Deploy to any client in one click",
  "Monitor all agents from one dashboard",
  "Set your own pricing and margins",
  "Scale from 3 to 300+ clients",
  "White-label ready",
  "Usage analytics per client",
];

export function AgenciesSection() {
  return (
    <section id="for-agencies" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              {/* Agency dashboard mockup */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Agency Overview</div>
                  <div className="text-2xl font-bold">$12,450</div>
                  <div className="text-sm text-muted-foreground">Monthly revenue</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-chart-5 font-medium">+23%</div>
                  <div className="text-xs text-muted-foreground">vs last month</div>
                </div>
              </div>

              {/* Client list */}
              <div className="space-y-3">
                {[
                  { name: "TechCorp", agents: 4, mrr: "$2,400" },
                  { name: "GrowthCo", agents: 7, mrr: "$4,200" },
                  { name: "StartupXYZ", agents: 2, mrr: "$980" },
                ].map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-ring/10 flex items-center justify-center text-sm font-bold text-ring">
                        {client.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{client.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {client.agents} agents
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{client.mrr}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active clients</span>
                  <span className="font-medium">24</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-ring/5" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-ring mb-3">For agencies</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Your clients.
              <br />
              Your margins.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Build agents once, deploy them to every client. Track usage, set pricing,
              and keep full control.
            </p>

            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-ring/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-ring" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
