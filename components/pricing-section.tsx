"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

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
]

export function PricingSection() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(PAYMENT_FREQUENCIES[0])

  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-7 text-center">
            <div className="space-y-4">
              <p className="text-sm font-medium text-ring">Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Simple, transparent pricing
              </h2>
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
      </div>
    </section>
  )
}
