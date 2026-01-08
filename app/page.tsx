import CTA from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { HowWorks } from "@/components/landing/how-works";
import Pricing from "@/components/landing/pricing";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Features />
      <HowWorks />

      <SignedIn>
        <div className="fixed top-4 right-4">
          <UserButton />
        </div>
      </SignedIn>

      <Pricing />
      <CTA />
    </main>
  );
}
