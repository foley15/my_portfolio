import BentoCard from './bentoCard';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon } from "lucide-react";

export default function ProfileCard({ darkMode, setDarkMode }) {
  return (
    <BentoCard colSpan="md:col-span-2 lg:col-span-2" className="flex flex-col justify-between space-y-6">
      {/* Top Bar: Availability & Theme Switcher */}
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="gap-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium py-1 px-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for Hire
        </Badge>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
          className="rounded-full"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Main Bio Section */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Folorunsho Ikotun
        </h1>
        <p className="mt-1 text-lg font-medium text-primary">
          Creative Frontend Engineer
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Crafting responsive, high-performance web applications using JavaScript, React, and modern CSS. Passionate about micro-interactions, clean architecture, and intuitive user experiences.
        </p>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {['React', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </BentoCard>
  );
}