"use client";

import { Rocket, Stars, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group ml-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform" />
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            initial={{ y: 2 }}
            animate={{ y: -2 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Rocket className="h-8 w-8 text-primary rotate-45" />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute -bottom-1 -left-1"
            >
              <Stars className="h-3 w-3 text-primary/60" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
              }}
              className="absolute -top-1 -right-1"
            >
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
          Apped
        </span>
        <span className="text-sm font-medium text-muted-foreground">.me</span>
      </div>
    </Link>
  );
}