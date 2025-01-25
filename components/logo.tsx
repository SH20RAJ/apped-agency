"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group ml-2">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform" />
        <Play className="h-8 w-8 text-primary relative z-10" />
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