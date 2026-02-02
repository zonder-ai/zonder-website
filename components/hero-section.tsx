"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ethereal shadow background */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <EtheralShadow
            color="var(--ring)"
            animation={{ scale: 60, speed: 95 }}
            noise={{ opacity: 0.8, scale: 1 }}
            sizing="fill"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ring/10 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-ring animate-pulse" />
                Now in beta
              </div>

              <h1 className="text-[2.75rem] sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Deploy AI agents
                <br />
                <span className="text-gradient">to your clients</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                The platform agencies use to build, deploy, and manage AI agents.
                No code. No complexity. Your clients see results.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <Button size="lg" className="h-12 px-6" asChild>
                  <Link href="/contact">
                    Start free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6 group" asChild>
                  <Link href="#demo">
                    <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Watch demo
                  </Link>
                </Button>
              </div>

              {/* Metrics */}
              <div className="flex gap-10">
                {[
                  { value: "500+", label: "Agencies" },
                  { value: "12k", label: "Agents live" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="h-6 rounded bg-muted/50 max-w-xs" />
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Welcome back</div>
                      <div className="font-semibold">Acme Agency</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-ring/10 text-ring text-xs font-medium">
                        Pro Plan
                      </div>
                    </div>
                  </div>

                  {/* Agent list */}
                  <div className="space-y-3">
                    {[
                      { name: "Lead Qualifier", client: "TechCorp", status: "active", runs: "2.4k" },
                      { name: "Support Bot", client: "RetailPro", status: "active", runs: "890" },
                      { name: "Data Sync", client: "FinanceHub", status: "paused", runs: "—" },
                    ].map((agent, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            agent.status === "active" ? "bg-chart-5" : "bg-muted-foreground"
                          )} />
                          <div>
                            <div className="font-medium text-sm">{agent.name}</div>
                            <div className="text-xs text-muted-foreground">{agent.client}</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {agent.runs} runs
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                    {[
                      { value: "4,230", label: "Total runs", color: "text-chart-1" },
                      { value: "98.2%", label: "Success", color: "text-chart-2" },
                      { value: "$1.2k", label: "Saved", color: "text-chart-3" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={cn("text-lg font-bold", stat.color)}>{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card border border-border shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-chart-5/15 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-chart-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Lead qualified</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

const menuItems = [
  { name: "Product", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "/contact" },
];

const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
            scrolled && "bg-card/80 backdrop-blur-md border border-border shadow-lg"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              Z
            </div>
            <span className="text-xl font-bold">Zonder</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Get started</Link>
              </Button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl bg-card border border-border p-5 shadow-lg"
          >
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#login">Log in</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
