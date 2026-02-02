"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

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
                Pay per action
              </h2>
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
      </div>
    </section>
  )
}
