"use client";

import { motion } from "framer-motion";
import { Eye, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "See everything",
    description: "Real-time view of every agent, every run, every result.",
  },
  {
    icon: Shield,
    title: "Own your data",
    description: "Connect accounts securely. Credentials stay private.",
  },
  {
    icon: Sparkles,
    title: "Zero learning curve",
    description: "No training. No docs. It just works.",
  },
];

export function ClientsSection() {
  return (
    <section id="for-clients" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <p className="text-sm font-medium text-ring mb-3">For your clients</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              They see results.
              <br />
              Not complexity.
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Your clients get their own dashboard. They see exactly what&apos;s happening.
              No black boxes.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ring/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-ring" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {feature.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 relative"
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {/* Client dashboard mockup */}
              <div className="p-6 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold">
                    T
                  </div>
                  <div>
                    <div className="font-medium">TechCorp Dashboard</div>
                    <div className="text-xs text-muted-foreground">4 agents active</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Activity feed */}
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Recent activity
                </div>
                <div className="space-y-4">
                  {[
                    { action: "Lead qualified", agent: "Lead Qualifier", time: "2m ago", color: "bg-chart-5" },
                    { action: "Email sent", agent: "Follow-up Bot", time: "5m ago", color: "bg-chart-2" },
                    { action: "Data synced", agent: "CRM Sync", time: "12m ago", color: "bg-chart-3" },
                    { action: "Report generated", agent: "Analytics Bot", time: "1h ago", color: "bg-chart-4" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <div className="flex-1">
                        <span className="text-sm font-medium">{item.action}</span>
                        <span className="text-sm text-muted-foreground"> by {item.agent}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-ring/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
