import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import HackathonSection from '@/components/HackathonSection';
import CTFSection from '@/components/CTFSection';
import ExpertSessionsSection from '@/components/ExpertSessionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import VenueSection from '@/components/VenueSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
// import CyberBackground from '@/components/CyberBackground';
import IntroVideo from '@/components/video/IntroVideo';
import ContinuousBackground from '@/components/ContinuousBackground';

const Index = () => {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setIntroVideoEnded(true);
    }, 1000);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ContinuousBackground />
      {/* Intro Video */}
      {!introVideoEnded && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {/* <IntroVideo
            videoSrc={"/intro-video.mp4"}
            onVideoEnd={handleVideoEnd}
          /> */}
        </div>
      )}

      {/* Navigation */}
      <Navbar  />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <HackathonSection />
        <CTFSection />
        <ExpertSessionsSection />
        <ScheduleSection />
        <VenueSection />
        <SponsorsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
