import { HeroSection } from "@/components/hero-section";
import { ComparisonSection } from "@/components/comparison-section";
import { AgenciesSection } from "@/components/agencies-section";
import { ClientsSection } from "@/components/clients-section";
import { SecuritySection } from "@/components/security-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <AgenciesSection />
      <ClientsSection />
      <SecuritySection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
