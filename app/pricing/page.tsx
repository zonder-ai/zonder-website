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
      monthly: 0,
      yearly: 0,
    },
    description: "Perfect for trying things out",
    features: [
      "2 active agents",
      "100 actions/month",
      "3 clients max",
      "Community support",
      "Basic analytics",
    ],
    cta: "Start",
  },
  {
    name: "Pro",
    price: {
      monthly: 49,
      yearly: 39,
    },
    description: "For growing agencies",
    features: [
      "10 active agents",
      "5,000 actions/month",
      "25 clients",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
    ],
    cta: "Start",
    popular: true,
  },
  {
    name: "Business",
    price: {
      monthly: 149,
      yearly: 119,
    },
    description: "For scaling agencies",
    features: [
      "50 active agents",
      "25,000 actions/month",
      "Unlimited clients",
      "Dedicated support",
      "White-label option",
      "API access",
      "Custom integrations",
    ],
    cta: "Start",
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large organizations",
    features: [
      "Unlimited agents",
      "Unlimited actions",
      "Unlimited clients",
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
    category: "Agents & Actions",
    features: [
      { name: "Active agents", starter: "2", pro: "10", business: "50", enterprise: "Unlimited" },
      { name: "Actions per month", starter: "100", pro: "5,000", business: "25,000", enterprise: "Unlimited" },
      { name: "Clients", starter: "3", pro: "25", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Agent templates", starter: true, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Features",
    features: [
      { name: "Client dashboard", starter: true, pro: true, business: true, enterprise: true },
      { name: "Basic analytics", starter: true, pro: true, business: true, enterprise: true },
      { name: "Advanced analytics", starter: false, pro: true, business: true, enterprise: true },
      { name: "Custom branding", starter: false, pro: true, business: true, enterprise: true },
      { name: "White-label", starter: false, pro: false, business: true, enterprise: true },
      { name: "API access", starter: false, pro: false, business: true, enterprise: true },
      { name: "Custom integrations", starter: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", starter: true, pro: false, business: false, enterprise: false },
      { name: "Priority support", starter: false, pro: true, business: false, enterprise: false },
      { name: "Dedicated support", starter: false, pro: false, business: true, enterprise: false },
      { name: "24/7 support", starter: false, pro: false, business: false, enterprise: true },
      { name: "SLA guarantee", starter: false, pro: false, business: false, enterprise: true },
      { name: "Account manager", starter: false, pro: false, business: false, enterprise: true },
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
                Pay per action
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start free. Scale as you grow. Only pay for what you use.
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
                  <th className="text-center py-4 px-4 font-medium">Pro</th>
                  <th className="text-center py-4 px-4 font-medium">Business</th>
                  <th className="text-center py-4 px-4 font-medium bg-primary/5">Enterprise</th>
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
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.pro}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.business}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center bg-primary/5">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-ring mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.enterprise}</span>
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
