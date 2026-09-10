import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

export default function BentoCard({ children, className = '', colSpan = '' }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -4, 
        scale: 1.01,
        transition: { type: 'spring', stiffness: 400, damping: 25 } 
      }}
      whileTap={{ scale: 0.98 }}
      className={`${colSpan}`}
    >
      <Card className={`relative h-full overflow-hidden border-border/60 bg-card/70 p-6 backdrop-blur-xl shadow-sm hover:shadow-md transition-all ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}