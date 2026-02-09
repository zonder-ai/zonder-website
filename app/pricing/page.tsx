"use client";

import * as React from "react";
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card";
import { Tab } from "@/components/ui/pricing-tab";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: {
      monthly: 60,
      yearly: 50,
    },
    description: "For solo operators",
    features: [
      "10-day free trial",
      "2 active agents",
      "No auto-scaling",
      "Basic analytics",
      "Community support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: {
      monthly: 150,
      yearly: 125,
    },
    description: "For growing teams",
    features: [
      "6 active agents",
      "Auto-scale up to 2x",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Agency",
    price: {
      monthly: 300,
      yearly: 250,
    },
    description: "For agencies at scale",
    features: [
      "20 active agents",
      "Auto-scale up to 6x",
      "Per-agent client billing",
      "White-label option",
      "API access",
      "Dedicated support",
    ],
    cta: "Get started",
  },
  {
    name: "Custom",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large organizations",
    features: [
      "Unlimited agents",
      "Custom scaling",
      "24/7 support",
      "SLA guarantee",
      "Custom deployment",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    highlighted: true,
  },
];

const FEATURE_COMPARISON = [
  {
    category: "Agents & Scaling",
    features: [
      { name: "Active agents", starter: "2", growth: "6", agency: "20", custom: "Unlimited" },
      { name: "Auto-scaling", starter: false, growth: "2x", agency: "6x", custom: "Custom" },
      { name: "10-day free trial", starter: true, growth: false, agency: false, custom: false },
      { name: "Agent templates", starter: true, growth: true, agency: true, custom: true },
    ],
  },
  {
    category: "Features",
    features: [
      { name: "Client dashboard", starter: true, growth: true, agency: true, custom: true },
      { name: "Basic analytics", starter: true, growth: true, agency: true, custom: true },
      { name: "Advanced analytics", starter: false, growth: true, agency: true, custom: true },
      { name: "Custom branding", starter: false, growth: true, agency: true, custom: true },
      { name: "Per-agent client billing", starter: false, growth: false, agency: true, custom: true },
      { name: "White-label", starter: false, growth: false, agency: true, custom: true },
      { name: "API access", starter: false, growth: false, agency: true, custom: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", starter: true, growth: false, agency: false, custom: false },
      { name: "Priority support", starter: false, growth: true, agency: false, custom: false },
      { name: "Dedicated support", starter: false, growth: false, agency: true, custom: false },
      { name: "24/7 support", starter: false, growth: false, agency: false, custom: true },
      { name: "SLA guarantee", starter: false, growth: false, agency: false, custom: true },
      { name: "Account manager", starter: false, growth: false, agency: false, custom: true },
    ],
  },
];

export default function PricingPage() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(PAYMENT_FREQUENCIES[0]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-wide">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="flex flex-col items-center gap-10 mb-16">
          <div className="space-y-7 text-center">
            <div className="space-y-4">
              <p className="text-sm font-medium text-ring">Pricing</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start with a 10-day trial. Scale your agents as you grow.
              </p>
            </div>
            <div className="mx-auto flex w-fit rounded-full bg-muted p-1">
              {PAYMENT_FREQUENCIES.map((freq) => (
                <Tab
                  key={freq}
                  text={freq}
                  selected={selectedFrequency === freq}
                  setSelected={setSelectedFrequency}
                  discount={freq === "yearly"}
                />
              ))}
            </div>
          </div>

          <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((tier) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                paymentFrequency={selectedFrequency}
              />
            ))}
          </div>
        </div>

        {/* Features Comparison Table */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center mb-12">Compare all features</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium">Features</th>
                  <th className="text-center py-4 px-4 font-medium">Starter</th>
                  <th className="text-center py-4 px-4 font-medium">Growth</th>
                  <th className="text-center py-4 px-4 font-medium">Agency</th>
                  <th className="text-center py-4 px-4 font-medium bg-primary/5">Custom</th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr className="border-b border-border">
                      <td colSpan={5} className="py-4 px-4 font-semibold text-sm bg-muted/30">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border hover:bg-muted/20">
                        <td className="py-4 px-4 text-sm">{feature.name}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.growth === 'boolean' ? (
                            feature.growth ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.growth}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.agency === 'boolean' ? (
                            feature.agency ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.agency}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center bg-primary/5">
                          {typeof feature.custom === 'boolean' ? (
                            feature.custom ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.custom}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
