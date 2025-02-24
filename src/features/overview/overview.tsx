import EmpowerSection from "@/components/overview/empower-section";
import Hero from "@/components/overview/hero";
import KnowledgeSection from "@/components/overview/knowledge-section";
import LearningSection from "@/components/overview/learning-section";
import Reviews from "@/components/overview/reviews";

export const Overview = () => {
  return (
    <main>
      <Hero />
      <LearningSection />
      <EmpowerSection />
      <KnowledgeSection />
      <Reviews />
    </main>
  );
};
