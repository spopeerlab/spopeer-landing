import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  UserCircle2,
  Users,
  Trophy,
  Rocket,
  Building2,
  Search,
  DollarSign,
  GraduationCap,
  Globe,
  Target,
  MessageSquare,
  Calendar,
  Briefcase,
  ListChecks,
  Network,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Role = {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  iconImage: string;
  iconBg: string;
  textColor: string;
  steps: Step[];
};

const roles: Role[] = [
  {
    title: "ATHLETE",
    shortTitle: "Athletes",
    description:
      "Unlock your full potential with AI-driven tools for performance tracking, skill development, and networking.",
    image: "/lovable-uploads/player.jpg",
    iconImage: "/lovable-uploads/running.png",
    iconBg: "bg-orange-100",
    textColor: "text-orange-600",
    steps: [
      {
        title: "Create Profile",
        description: "Showcase your skills & achievements",
        icon: UserCircle2,
      },
      {
        title: "Promote Skills",
        description: "Get discovered by clubs & coaches",
        icon: Trophy,
      },
      {
        title: "Network",
        description: "Build relationships in your sport",
        icon: Users,
      },
      {
        title: "Get Matched",
        description: "Find opportunities that fit your profile",
        icon: Rocket,
      },
    ],
  },
  {
    title: "COACH",
    shortTitle: "Coaches",
    description:
      "Discover promising athletes, connect with clubs, and create new revenue streams with your expertise.",
    image: "/lovable-uploads/coach.jpg",
    iconImage: "/lovable-uploads/coach1.png",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
    steps: [
      {
        title: "Build Your Brand",
        description: "Establish your coaching credentials",
        icon: Building2,
      },
      {
        title: "Scout Efficiently",
        description: "Find athletes that match your needs",
        icon: Search,
      },
      {
        title: "Collaborate & Earn",
        description: "Create new revenue streams",
        icon: DollarSign,
      },
      {
        title: "Develop Career",
        description: "Connect with clubs and opportunities",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "CLUB",
    shortTitle: "Clubs",
    description:
      "Recruit exceptional talent, build an engaged fan community, and manage digital assets securely.",
    image: "/lovable-uploads/sports-club.jpg",
    iconImage: "/lovable-uploads/football-club.png",
    iconBg: "bg-green-100",
    textColor: "text-green-600",
    steps: [
      {
        title: "Launch Club",
        description: "Create a digital presence",
        icon: Globe,
      },
      {
        title: "Recruit with AI",
        description: "Find the perfect talent match",
        icon: Target,
      },
      {
        title: "Engage Community",
        description: "Build a loyal fanbase",
        icon: MessageSquare,
      },
      {
        title: "Promote Events",
        description: "Maximize attendance and reach",
        icon: Calendar,
      },
    ],
  },
  {
    title: "SUPPORTIVE PROFESSIONAL",
    shortTitle: "Supportive Profession",
    description:
      "Access global opportunities in the sports industry and expand your professional network.",
    image: "/lovable-uploads/cameraman.jpg",
    iconImage: "/lovable-uploads/suitcase.png",
    iconBg: "bg-yellow-100",
    textColor: "text-yellow-600",
    steps: [
      {
        title: "Create Profile",
        description: "Highlight your expertise",
        icon: Briefcase,
      },
      {
        title: "List Services",
        description: "Showcase what you offer",
        icon: ListChecks,
      },
      {
        title: "Connect Globally",
        description: "Reach clients worldwide",
        icon: Network,
      },
      {
        title: "Scale Business",
        description: "Grow through the sports ecosystem",
        icon: TrendingUp,
      },
    ],
  },
];

const transition = { duration: 0.25, ease: [0.32, 0.72, 0, 1] };
const cardVariants = {
  hidden: { opacity: 0, x: 5, zIndex: 1 },
  visible: { opacity: 1, x: 0, zIndex: 1, transition },
  exit: { opacity: 0, x: -5, zIndex: 0, transition },
};

const SLIDE_INTERVAL_MS = 5000;

const Roles = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const role = roles[selectedIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % roles.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="roles" className="w-full">
      <div className="flex flex-wrap justify-center mb-10 gap-3">
        {roles.map((r, index) => (
          <button
            key={r.title}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`${r.iconBg} ${r.textColor} px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105 hover:bg-opacity-80 ${
              index === selectedIndex
                ? "ring-2 ring-offset-2 ring-gray-400 shadow-md scale-105"
                : ""
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={r.iconImage}
                alt={r.shortTitle}
                className="w-4 h-4 object-contain"
              />
            </div>
            {r.shortTitle}
          </button>
        ))}
      </div>

      <div className="relative min-h-[520px]">
        <AnimatePresence initial={false}>
          <motion.article
            key={role.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-0 bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-8 items-center"
          >
          <div className="flex-1 w-full order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-4 ${role.iconBg} rounded-2xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}
              >
                <img
                  src={role.iconImage}
                  alt={role.title}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-2xl uppercase tracking-tight">
                {role.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
              {role.description}
            </p>

            <ul className="space-y-5">
              {role.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${role.iconBg}`}
                    >
                      <step.icon
                        className={`w-4 h-4 ${role.textColor}`}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 w-full md:w-80 lg:w-96 order-1 md:order-2 flex justify-center">
            <div className="aspect-[3/4] max-h-[400px] md:max-h-[480px] w-full max-w-[280px] md:max-w-none overflow-hidden rounded-3xl border border-gray-200">
              <img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Roles;
