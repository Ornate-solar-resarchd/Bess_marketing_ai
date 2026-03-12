import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsGrid from "@/components/home/ProductsGrid";
import FeaturesSection from "@/components/home/FeaturesSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CertificationsSection from "@/components/home/CertificationsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsGrid />
      <FeaturesSection />
      <ApplicationsSection />
      <CertificationsSection />
    </main>
  );
}
