import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => onOpenChange(false)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SheetContent: React.FC<SheetContentProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className={`fixed top-0 right-0 h-full w-64 bg-surface dark:bg-card border-l border-black/5 dark:border-white/5 p-4 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
};

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children }) => {
  return <>{children}</>;
};
