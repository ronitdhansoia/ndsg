import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { CultureSection } from "@/components/sections/culture";
import { AdvancedTechSection } from "@/components/sections/advanced-tech";
import { ServiceDetailsSection } from "@/components/sections/service-details";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CultureSection />
      <AdvancedTechSection />
      <ServiceDetailsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
