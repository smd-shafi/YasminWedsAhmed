import { useState } from "react";
import OpeningAnimation from "@/components/OpeningAnimation";
import CoupleSection from "@/components/CoupleSection";
import CountdownTimer from "@/components/CountdownTimer";
import WeddingDetails from "@/components/WeddingDetails";
import VenueMap from "@/components/VenueMap";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingPetals";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  // Wedding date: April 12, 2026
  const weddingDate = new Date("2026-04-12T15:00:00");

  return (
    <>
      {/* Floating Elements (Moon & Star themed) - Positioned above all content */}
      {showContent && <FloatingElements />}

      <div className="min-h-screen bg-background overflow-hidden">
        {/* Opening Curtain Animation */}
        <OpeningAnimation onComplete={() => setShowContent(true)} />

        {/* Main Content */}
        {showContent && (
          <main>
            <CoupleSection />
            <CountdownTimer targetDate={weddingDate} />
            <WeddingDetails />
            <VenueMap />
            <Footer />
          </main>
        )}
      </div>
    </>
  );
};

export default Index;

