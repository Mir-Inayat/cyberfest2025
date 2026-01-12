const ContinuousBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated grid + hex pattern (moved from HeroSection) */}
      <div className="absolute inset-0 cyber-grid hex-pattern" />

      {/* Glowing orbs (moved from HeroSection) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Subtle vignette to keep content readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30" />
    </div>
  );
};

export default ContinuousBackground;
