"use client";

import * as React from "react";
import { PricingCard } from "@/components/ui/pricing-card";
import { Tab } from "@/components/ui/pricing-tab";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AGENT_RESERVATION_RATES,
  PAYMENT_FREQUENCIES,
  PLAN_FEATURE_COMPARISON,
  PRICING_TIERS,
} from "@/lib/pricing";

function renderFeatureValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-ring mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground mx-auto" />
    );
  }

  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingPage() {
  const [selectedFrequency, setSelectedFrequency] = React.useState<string>(PAYMENT_FREQUENCIES[0]);

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
                Reservation + usage pricing
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every deployed agent includes reserved capacity, with execution billed by usage.
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
        </div>

        {/* Features Comparison Table */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center mb-4">Detailed plan comparison</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Plans include baseline reservation coverage. Execution and burst usage are metered on
            top, with lower overage rates at higher tiers.
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Features</TableHead>
                <TableHead className="text-center">Starter</TableHead>
                <TableHead className="text-center">Growth</TableHead>
                <TableHead className="text-center">Business</TableHead>
                <TableHead className="text-center bg-primary/5">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PLAN_FEATURE_COMPARISON.map((category) => (
                <React.Fragment key={category.category}>
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={5} className="font-semibold text-sm bg-muted/30">
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.features.map((feature) => (
                    <TableRow key={feature.name}>
                      <TableCell className="text-sm">{feature.name}</TableCell>
                      <TableCell className="text-center">{renderFeatureValue(feature.starter)}</TableCell>
                      <TableCell className="text-center">{renderFeatureValue(feature.growth)}</TableCell>
                      <TableCell className="text-center">{renderFeatureValue(feature.business)}</TableCell>
                      <TableCell className="text-center bg-primary/5">
                        {renderFeatureValue(feature.enterprise)}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center mb-4">Agent reservation rate card</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Reservation pricing is charged while agents are active, even when idle. Pause agents to
            stop reservation billing.
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent Size</TableHead>
                <TableHead>Allocated Resources</TableHead>
                <TableHead>Reservation Rate</TableHead>
                <TableHead>Approx Monthly Equivalent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AGENT_RESERVATION_RATES.map((rate) => (
                <TableRow key={rate.size}>
                  <TableCell className="font-medium">{rate.size}</TableCell>
                  <TableCell>{rate.resources}</TableCell>
                  <TableCell>{rate.hourly}</TableCell>
                  <TableCell>{rate.monthly}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
