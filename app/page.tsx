import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinks } from "@/components/home/QuickLinks";
import { LatestJobs } from "@/components/home/LatestJobs";
import { LatestResults } from "@/components/home/LatestResults";
import { LatestUpdates } from "@/components/home/LatestUpdates";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <LatestJobs />
      <LatestResults />
      <LatestUpdates />
    </>
  );
}
