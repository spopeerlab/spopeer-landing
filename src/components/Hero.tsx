import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight, CircleArrowRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";
import { useState, useEffect, useRef } from "react";
import { getApiUrl } from "@/utils/api";

const Hero = () => {
  const { openWaitlist } = useWaitlist();
  const [waitlistCount, setWaitlistCount] = useState(2500);
  const [displayCount, setDisplayCount] = useState(2500);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startCountAnimation(2500);

    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(`${getApiUrl()}/api/waitlist/count`);
        if (response.ok) {
          const data = await response.json();
          const actualCount = data.count + 4447 || 4447;
          setWaitlistCount(actualCount);

          if (actualCount !== 2500) {
            if (animationRef.current) {
              clearInterval(animationRef.current);
            }
            startCountAnimation(actualCount);
          }
        }
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      }
    };

    fetchWaitlistCount();

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  const startCountAnimation = (targetCount: number) => {
    const startingCount = Math.floor(targetCount * 0.25);
    setDisplayCount(startingCount);

    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let currentFrame = 0;
    animationRef.current = setInterval(() => {
      currentFrame++;
      const progress = easeOutQuad(currentFrame / totalFrames);
      const currentCount = Math.floor(
        startingCount - (startingCount - targetCount) * progress
      );

      setDisplayCount(currentCount);

      if (currentFrame === totalFrames) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
        setDisplayCount(targetCount);
      }
    }, frameDuration);
  };

  const easeOutQuad = (t: number) => t * (2 - t);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background rounded-b-[2rem] sm:rounded-b-[2.5rem]">
      {/* Hero container: image layer → gradient → content */}
      <div className="relative min-h-[100svh] sm:min-h-[105svh] flex items-center px-6 sm:px-8 lg:px-10 pt-24">
        {/* Layer 0: Background image — right side only so it doesn't sit behind headline */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 h-full w-[58%] sm:w-[55%] lg:w-[52%]">
            <img
              src="/lovable-uploads/794e9ab1-0b6d-4175-9187-cfbabd425cc1.png"
              alt="Athletes in action - Your game, connected"
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
          </div>

          {/* Layer 1: Aggressive white behind text, then long subtle fade (no hard edge) */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: `linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 38%, hsl(var(--background) / 0.97) 48%, hsl(var(--background) / 0.88) 58%, hsl(var(--background) / 0.65) 68%, hsl(var(--background) / 0.35) 78%, hsl(var(--background) / 0.12) 88%, transparent 100%)`,
            }}
            aria-hidden
          />
        </div>

        {/* Layer 2: Content (z-10) */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <div className="relative inline-block">
                {/* Backing layer — 3D offset */}
                <div
                  className="absolute inset-0 -z-10 rounded-full bg-gray-300 translate-y-0.5 translate-x-0.1"
                  aria-hidden
                />
                {/* Eyebrow pill — greyish pearl white for contrast */}
                <span className="relative z-0 inline-block text-sm py-2 px-4 font-medium rounded-full bg-stone-100 text-primary border border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  The Career Network For Sports Professionals
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="h-hero text-foreground tracking-tight font-[600] leading-[1.05] mb-6"
            >
              <span className="block">YOUR GAME.</span>
              <span className="block text-primary">CONNECTED</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground font-medium leading-relaxed mb-6"
              style={{ fontWeight: 500 }}
            >
              The global network for athletes, coaches, and clubs, to elevate
              sports performance and build connections anytime,
              anywhere.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-5"
            >
              <Button
                onClick={openWaitlist}
                data-youform-open="jvxfwdwr"
                data-youform-position="center"
                size="lg"
                className="rounded-xl bg-primary text-primary-foreground font-medium shadow-lg hover:opacity-90 transition px-6 py-3 text-base"
              >
                Join the Network
                {/* create an arrow inside the circle */}
                <div className="w-7 h-7 ml-2 rounded-full bg-primary-foreground flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border border-primary/50  text-foreground font-medium hover:bg-muted hover:shadow-sm  transition px-6 py-3 text-base"
                onClick={() => (window.location.href = "/#how-it-works")}
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
              Join{" "}
              <span className="font-semibold text-foreground">
                {displayCount.toLocaleString()}+
              </span>{" "}
              sports professionals already building their future.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Optional: floating stat card on the clear image area (right side) */}
      {/* <div className="absolute bottom-6 right-6 z-10 hidden sm:block bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-border/50">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-foreground font-medium">
            <span className="text-primary" aria-hidden>🌐</span>
            50+ Countries
          </div>
          <div className="flex items-center gap-2 text-foreground font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden />
            {displayCount.toLocaleString()}+ Active Users
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
