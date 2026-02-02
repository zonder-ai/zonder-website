"use client";

import { motion } from "framer-motion";
import { Lock, Shield, FileCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-ring mb-3">Security</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Enterprise-grade by default
            </h2>
            <p className="text-lg text-muted-foreground">
              Your clients trust you with their data. We help you keep that trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Isolated data",
                description: "Each client's data lives in its own secure container.",
              },
              {
                icon: Shield,
                title: "Encrypted everywhere",
                description: "AES-256 encryption at rest. TLS 1.3 in transit.",
              },
              {
                icon: FileCheck,
                title: "Audit ready",
                description: "Complete logs of every action. SOC 2 compliant.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="font-medium mb-2">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
