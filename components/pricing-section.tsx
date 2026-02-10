"use client"

import * as React from "react"
import Link from "next/link"
import { PricingCard } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"
import { Button } from "@/components/ui/button"
import { PAYMENT_FREQUENCIES, PRICING_TIERS } from "@/lib/pricing"

export function PricingSection() {
  const [selectedFrequency, setSelectedFrequency] = React.useState<string>(PAYMENT_FREQUENCIES[0])

  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-7 text-center">
            <div className="space-y-4">
              <p className="text-sm font-medium text-ring">Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Reservation + usage pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Always-on agents include reserved capacity and usage-based execution.
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
            {PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                paymentFrequency={selectedFrequency}
              />
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Need the full feature matrix and reservation rate card?
            </p>
            <Button variant="outline" asChild>
              <Link href="/pricing">View full pricing breakdown</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
