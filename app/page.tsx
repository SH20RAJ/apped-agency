"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Play, Rocket, Shield, Star, Zap, Upload, Search, Settings, Check, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ThreeBackground from '@/components/ThreeBackground';
import { useTheme } from "next-themes";
import { FaGoogle, FaGooglePlay } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Spot Issues Before Your Users Do",
  },
  {
    id: 2,
    icon: Shield,
    title: "Security First",
    description: "Comprehensive Security Testing",
  },
  {
    id: 3,
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick Turnaround Time",
  },
  {
    id: 4,
    icon: Star,
    title: "Expert Support",
    description: "24/7 Professional Assistance",
  },
];

const testimonials = [
  {
    content: "The team at AppLaunch Pro made our app launch process seamless and stress-free.",
    author: {
      name: "Sarah Chen",
      role: "CTO at TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content: "Their expertise in Google Play Store policies saved us from potential rejections.",
    author: {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const stats = [
  { number: "500+", label: "Apps Launched" },
  { number: "99%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
  { number: "100%", label: "Satisfaction" },
];

const processSteps = [
  {
    id: 1,
    icon: Upload,
    title: "Submit Your App",
    description: "Upload your app and provide basic information through our simple submission form."
  },
  {
    id: 2,
    icon: Search,
    title: "Quality Check",
    description: "Our experts thoroughly test your app against Play Store guidelines."
  },
  {
    id: 3,
    icon: Settings,
    title: "Optimization",
    description: "We optimize your store listing and technical requirements for better visibility."
  },
  {
    id: 4,
    icon: Check,
    title: "Publication",
    description: "We handle the submission process and ensure successful publication."
  }
];

const whyChooseUs = [
  {
    title: "Industry Expertise",
    description: "With years of experience in app publishing, we understand the Play Store ecosystem inside and out.",
    icon: Star,
    stats: "10+ Experience"
  },
  {
    title: "Dedicated Support",
    description: "Our team of experts is always available to help you navigate the publication process.",
    icon: Shield,
    stats: "24/7 Support"
  },
  {
    title: "Proven Track Record",
    description: "Successfully launched hundreds of apps with a near-perfect approval rate.",
    icon: CheckCircle,
    stats: "99% Success Rate"
  },
];

export default function Home() {
  const { theme } = useTheme();

  return (
    <ParallaxProvider>
      <div className="flex flex-col dark:bg-gray-950/90 relative z-20">
        <ThreeBackground />

        {/* Hero Section */}
        <section className="relative isolate z-20">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Grid */}
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.3)_2px,transparent_2px),linear-gradient(to_right,rgba(50,50,50,0.3)_2px,transparent_2px)] dark:bg-[linear-gradient(rgba(255,255,255,0.15)_2px,transparent_2px),linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-100"
              initial={{ opacity: 1 }}
              animate={{ 
                backgroundPosition: ["0px 0px", "-100px -100px"],
                scale: [1, 1.05]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at center, rgba(50,50,50,0.3) 0%, transparent 60%)`,
                }}
              />
            </motion.div>

            {/* Floating circles */}
            <motion.div
              className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-primary/3 blur-3xl"
              animate={{
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left side content with parallax */}
              <Parallax translateY={[-20, 20]} className="flex-1 relative z-20">
                <motion.div className="text-center lg:text-left">
                  <motion.h1 
                    className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Launch Your App{" "}
                    <motion.span
                      initial={{ y: 0 }}
                      animate={{ 
                        y: [-2, -8, -2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-block relative"
                    >
                      <Rocket className="w-16 h-16 ml-2 rotate-[270deg]" strokeWidth={1.5} />
                      <motion.div
                        initial={{ opacity: 0.5, scale: 0.5 }}
                        animate={{ 
                          opacity: [0.5, 0.8, 0],
                          scale: [0.5, 1, 0.5],
                          y: [0, 10, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-sm"
                      />
                    </motion.span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
                      Hassle-Free
                    </span>{" "}
                    on the{" "}
                    <span className="inline-flex items-center">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </span>{" "}
                    Pl<FaGooglePlay className="inline-block w-7 h-7 sm:w-10 sm:h-10 mx-0.6 dark:text-[#00FF00] text-[#01875f]" />y Store
                  </motion.h1>
                  <motion.p 
                    className="text-lg leading-8 text-muted-foreground dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    We test, optimize, and help you publish your app with ease. Let our experts handle 
                    the complexities while you focus on building great features.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button size="lg" className="group relative z-20" asChild>
                      <Link href="/contact">
                        Start Now
                        <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="relative z-20" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </Parallax>

              {/* Right side illustration with parallax */}
              <Parallax translateY={[20, -20]} className="flex-1">
                <motion.div className="relative">
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
                    <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                      {features.map((feature) => (
                        <motion.div
                          key={feature.id}
                          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 shadow-lg dark:text-white perspective-500 transform-preserve-3d transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:translate-z-10 relative group overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 * feature.id }}
                          whileHover={{ y: -5 }}
                          onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                          }}
                        >
                          {/* Add the glow effect div */}
                          <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 glow-effect" />
                          </div>
                          
                          <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform-preserve-3d hover:translate-z-20 transition-transform duration-500">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2 transform-preserve-3d hover:translate-z-20 transition-transform duration-500 text-shadow-dark">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground transform-preserve-3d hover:translate-z-20 transition-transform duration-500">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Parallax>
            </div>

            {/* Stats Section */}
            <motion.div 
              className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Animation for Why Choose Us */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(45deg,rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(135deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"
              animate={{ 
                backgroundPosition: ["0px 0px", "50px 50px"],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/5 to-secondary/10" />
          </motion.div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-15, 15]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We bring expertise, dedication, and proven success to every app launch
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <Parallax
                  key={index}
                  translateY={[0, 30]}
                  scale={[0.8, 1.1]}
                  easing="easeInQuad"
                  className="relative group"
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-t-4 border-primary/0 group-hover:border-primary overflow-hidden">
                    <div className="flex flex-col h-full relative">
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                      
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="mt-auto">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary/20 text-sm font-medium">
                          {item.stats}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Parallax>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Animation for How It Works */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute inset-0"
              animate={{ 
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(50,50,50,0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(50,50,50,0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(50,50,50,0.05) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="absolute inset-0 bg-secondary/10 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-20, 20]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes app publication simple and efficient
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Parallax
                  key={step.id}
                  translateY={[0, 30]}
                  scale={[0.9, 1.1]}
                  easing="easeInQuad"
                  className="relative"
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {step.id}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                </Parallax>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Animation for Testimonials */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(0deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"
              animate={{ 
                backgroundPosition: ["0px 0px", "0px -50px"],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 50% 0%, rgba(50,50,50,0.05) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 100%, rgba(50,50,50,0.05) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 0%, rgba(50,50,50,0.05) 0%, transparent 70%)"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-15, 15]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Parallax
                  key={index}
                  translateY={[0, 20]}
                  scale={[0.95, 1.05]}
                  easing="easeInQuad"
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <p className="text-lg mb-6">"{testimonial.content}"</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.author.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Parallax>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}