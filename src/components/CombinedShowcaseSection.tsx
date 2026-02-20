import sharedBg from "@/assets/shared-bg-street.jpg";
import SpaceFinderSection from "@/components/SpaceFinderSection";
import ProductShowcase from "@/components/ProductShowcase";

const CombinedShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Single shared background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${sharedBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-deep/70" />

      <div className="relative z-10">
        <SpaceFinderSection />
        <ProductShowcase />
      </div>
    </section>
  );
};

export default CombinedShowcaseSection;
