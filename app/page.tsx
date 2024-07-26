import { HeroSection } from "@/components/component/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10  bg-gradient-to-r from-rose-100 to-teal-100">
      <HeroSection />
    </main>
  );
}
