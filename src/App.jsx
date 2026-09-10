import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Bento Card Components
import ProfileCard from './components/profileCard';
import LiveClockCard from './components/liveClockCard';
import ProjectsCarouselCard from './components/projectsCarouselCard';
import QuickContactCard from './components/quickContactCard';

// Container animation variants for staggered card load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync state with standard HTML dark class for Tailwind
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="relative min-h-screen px-4 py-12 sm:px-8 lg:px-16 selection:bg-primary selection:text-primary-foreground">
      {/* Ambient Radial Gradient Background Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <header className="text-center sm:text-left">
          <p className="text-xd font-bold tracking-widest text-primary">
            Hi There,
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Welcome To My World!
          </h2>
        </header>

        {/* Bento Grid Layout (3-Column Desktop Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3"
        >
          {/* Row 1: Profile Info (Spans 2 cols) & Real-Time Clock (Spans 1 col) */}
          <ProfileCard darkMode={darkMode} setDarkMode={setDarkMode} />
          <LiveClockCard />

          {/* Row 2: Multi-Project Carousel (Spans 2 cols) & Quick Contact Form (Spans 1 col) */}
          <ProjectsCarouselCard colSpan="md:col-span-2" />
          <QuickContactCard />
        </motion.div>

        {/* Minimal Footer */}
        <footer className="pt-8 text-center text-xs text-muted-foreground border-t border-border/40">
          © {new Date().getFullYear()} Folorunsho Ikotun.
        </footer>
      </div>
    </main>
  );
}