import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function EmailCollection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Animated background elements */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-lg opacity-30"
          style={{
            background: `linear-gradient(${120 * index}deg, var(--primary) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating sparkles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        >
          <Sparkles className="w-4 h-4 text-primary/50" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
      >
        <h3 className="text-lg font-semibold mb-2 text-center">
          Stay Updated
        </h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Subscribe to our newsletter for the latest updates and exclusive offers
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/50 dark:bg-gray-900/50"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="relative group"
          >
            {isLoading ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
} 