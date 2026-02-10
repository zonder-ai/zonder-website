export type PricingTier = {
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  popular?: boolean
}

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"] as const

type FeatureValue = boolean | string

type PlanFeatureRow = {
  name: string
  starter: FeatureValue
  growth: FeatureValue
  business: FeatureValue
  enterprise: FeatureValue
}

export type PlanFeatureCategory = {
  category: string
  features: PlanFeatureRow[]
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: {
      monthly: 49,
      yearly: 39,
    },
    description: "For solo operators",
    features: [
      "1 Small agent reservation included",
      "500 compute minutes / month",
      "Usage overage from $0.12 per minute",
      "Basic usage analytics",
      "Community support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: {
      monthly: 199,
      yearly: 159,
    },
    description: "For growing teams",
    features: [
      "3 Small agents or 1 Medium included",
      "2,000 compute minutes / month",
      "Usage overage from $0.09 per minute",
      "Priority scheduling and analytics",
      "Priority support",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Business",
    price: {
      monthly: 799,
      yearly: 639,
    },
    description: "For high-volume operations",
    features: [
      "10 Small or 5 Medium reservations included",
      "10,000 compute minutes / month",
      "Usage overage from $0.07 per minute",
      "Marketplace billing controls",
      "Dedicated support",
    ],
    cta: "Talk to sales",
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large organizations",
    features: [
      "Custom reservation pools by size",
      "Contracted compute and burst rates",
      "SLA and deployment controls",
      "Dedicated account management",
      "24/7 support",
    ],
    cta: "Contact sales",
    highlighted: true,
  },
]

export const PLAN_FEATURE_COMPARISON: PlanFeatureCategory[] = [
  {
    category: "Included Capacity",
    features: [
      {
        name: "Included Small agent reservations",
        starter: "1",
        growth: "3",
        business: "10",
        enterprise: "Custom",
      },
      {
        name: "Included Medium agent reservations",
        starter: "0",
        growth: "Up to 1",
        business: "Up to 5",
        enterprise: "Custom",
      },
      {
        name: "Included compute minutes / month",
        starter: "500",
        growth: "2,000",
        business: "10,000",
        enterprise: "Custom",
      },
      {
        name: "Hard cap active agents",
        starter: "2",
        growth: "6",
        business: "20",
        enterprise: "Contracted",
      },
    ],
  },
  {
    category: "Usage and Overage",
    features: [
      {
        name: "Compute minute overage",
        starter: "$0.12 / min",
        growth: "$0.09 / min",
        business: "$0.07 / min",
        enterprise: "Contract",
      },
      {
        name: "Burst / high-priority surcharge",
        starter: "+40%",
        growth: "+35%",
        business: "+25%",
        enterprise: "Contract",
      },
      {
        name: "Parallel execution billing",
        starter: "Per effective core",
        growth: "Per effective core",
        business: "Per effective core",
        enterprise: "Per effective core",
      },
      {
        name: "Additional reservation billing",
        starter: "Published hourly rates",
        growth: "Published hourly rates",
        business: "Published hourly rates",
        enterprise: "Contract",
      },
    ],
  },
  {
    category: "Support and Governance",
    features: [
      {
        name: "Marketplace pricing guardrails",
        starter: true,
        growth: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Priority support",
        starter: false,
        growth: true,
        business: true,
        enterprise: true,
      },
      {
        name: "SLA guarantee",
        starter: false,
        growth: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Dedicated account manager",
        starter: false,
        growth: false,
        business: false,
        enterprise: true,
      },
    ],
  },
]

export const AGENT_RESERVATION_RATES = [
  {
    size: "Nano",
    resources: "0.25 vCPU / 512 MB",
    hourly: "$0.02 - $0.03 / hour",
    monthly: "$15 - $22 / month",
  },
  {
    size: "Small",
    resources: "0.5 vCPU / 1 GB",
    hourly: "$0.05 - $0.07 / hour",
    monthly: "$36 - $50 / month",
  },
  {
    size: "Medium",
    resources: "1 vCPU / 2 GB",
    hourly: "$0.10 - $0.14 / hour",
    monthly: "$73 - $102 / month",
  },
  {
    size: "Large",
    resources: "2 vCPU / 4 GB",
    hourly: "$0.20 - $0.28 / hour",
    monthly: "$146 - $204 / month",
  },
]
