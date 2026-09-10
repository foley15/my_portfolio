import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from './bentoCard';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, GitFork } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Tesla Landing Page Clone",
    category: "Frontend / UI",
    description: "Responsive web application built with React, Tailwind CSS, Vite, and Vercel featuring smooth navigation scrolling.",
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    liveUrl: "https://tesla-landing-page-eta.vercel.app/",
    githubUrl: "https://github.com/foley15/tesla-landing-page",
  },
  {
    id: 2,
    title: "Product Catalog Single-Page Application",
    category: "Accessible User Interfaces",
    description: "A responsive, high-performance web dashboard for managing and exploring modern e-commerce products. Built with React, Tailwind CSS, and Vite, this application provides dynamic search, category filtering, price and real-time item counter updates for product inventories",
    tags: ["React", "Shadcn", "Tailwind CSS", "Node.js"],
    liveUrl: "https://exam2-two-phi.vercel.app/",
    githubUrl: "https://github.com/foley15/exam2",
  },
  {
    id: 3,
    title: "REST API & Auth Service",
    category: "Frontend / UI",
    description: "Scalable backend authentication service with JWT middleware and MongoDB schema validation.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://foley15.github.io/exam_project/",
    githubUrl: "https://github.com/foley15/exam_project",
  },
  {
    id: 4,
    title: "Web3 Community Hub",
    category: "Web3 / Social",
    description: "Community engagement platform for tracking decentralized protocol metrics and onboarding flows.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsCarouselCard({ colSpan = "md:col-span-2" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const current = PROJECTS[currentIndex];

  return (
    <BentoCard colSpan={colSpan} className="flex flex-col justify-between space-y-4">
      {/* Header & Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Featured Works
          </span>
          <Badge variant="outline" className="text-[10px]">
            {currentIndex + 1} / {PROJECTS.length}
          </Badge>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={prevProject}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={nextProject}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Animated Project Content */}
      <div className="min-h-[140px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <span className="text-xs font-medium text-muted-foreground">{current.category}</span>
            <h3 className="text-xl font-bold text-foreground">{current.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tech Badges & Links */}
      <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-border/40">
        <div className="flex flex-wrap gap-1.5">
          {current.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-full">
            <a href={current.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitFork className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button size="sm" asChild className="h-8 gap-1.5 text-xs">
            <a className='flex gap-1.5' href={current.liveUrl} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span> <span><ExternalLink className="h-3 w-3" /></span>
            </a>
          </Button>
        </div>
      </div>
    </BentoCard>
  );
}