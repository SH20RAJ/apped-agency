"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Play, Rocket, Shield, Star, Zap, Upload, Search, Settings, Check, Moon, Sun, ArrowRight, AppWindow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ThreeBackground from '@/components/ThreeBackground';
import { useTheme } from "next-themes";
import { FaGoogle, FaGooglePlay } from "react-icons/fa";

import EmailCollection from "@/components/EmailCollection";

const features = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Spot Issues Before Your Users Do",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    icon: Shield,
    title: "Security First",
    description: "Comprehensive Security Testing",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick Turnaround Time",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 4,
    icon: Star,
    title: "Expert Support",
    description: "24/7 Professional Assistance",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
];

const testimonials = [
  {
    content: "The team at Apped made our app launch process seamless and stress-free.",
    author: {
      name: "Kunal Kapoor",
      role: "CTO at Worker AI",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content: "Their expertise in Google Play Store policies saved us from potential rejections.",
    author: {
      name: "Aditya Jha",
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
        {/* <ThreeBackground /> */}

        {/* Hero Section */}
        <section className="relative isolate z-20">
          
          <motion.div 
            className="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_70%)] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.6)_70%)]" />

            {/* Meteors Container */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className={`
                    absolute h-0.5 w-0.5 rotate-[45deg]
                    animate-meteor-effect
                    before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%]
                    before:w-[50px] before:h-[1px] before:bg-gradient-to-r
                    dark:before:from-blue-500 dark:before:to-violet-500
                    before:from-primary/40 before:to-primary
                  `}
                  style={{
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 8 + 's',
                    animationDuration: Math.random() * 2 + 2 + 's',
                  }}
                />
              ))}
            </div>
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
                    <span className="font-clash-display">Test Your App</span>{" "}
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
                    <span className="font-cabinet-grotesk text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
                      Launch it
                    </span>{" "}
                    on the{" "}
                    <span className="inline-flex items-center font-general-sans">
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
                    className="text-lg leading-8 text-muted-foreground dark:text-gray-300 mb-8 font-satoshi"
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
                    <Button 
                      size="lg" 
                      className="group relative z-20 overflow-hidden transition-all duration-300 hover:scale-105" 
                      asChild
                    >
                      <Link href="/contact" className="relative">
                        <span className="relative z-10">Start Now</span>
                        <Rocket className="ml-2 h-4 w-4 inline-block relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="relative z-20 overflow-hidden transition-all duration-300 hover:scale-105 group" 
                      asChild
                    >
                      <Link href="/services" className="relative">
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="group overflow-hidden transition-all duration-300 hover:scale-105" 
                      asChild
                    >
                      <Link href="/join-as-tester" className="relative">
                        <span className="relative z-10">Become a Tester</span>
                        <ArrowRight className="ml-2 h-4 w-4 inline-block relative z-10 transition-all duration-300 group-hover:translate-x-2" />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </Parallax>

              {/* Right side illustration with parallax */}
              <Parallax translateY={[20, -20]} className="flex-1">
                <motion.div className="relative">
                  <div className="relative w-full aspect-square">
                    <div className="relative z-10 grid grid-cols-2 gap-6 p-8">
                      {features.map((feature) => (
                        <motion.div
                          key={feature.id}
                          className={`relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:text-white hover:translate-y-[-4px] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * feature.id }}
                        >
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          
                          <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground dark:text-gray-300">
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

            {/* Updated Stats Section */}
            <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Collection Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-15, 15]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get exclusive updates, tips, and special offers delivered directly to your inbox
              </p>
            </Parallax>
            
            <EmailCollection />
          </div>
        </section>

        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-15, 15]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We bring expertise, dedication, and proven success to every app launch
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className="relative p-8 h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-300 mb-6">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {item.stats}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="relative py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-20, 20]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes app publication simple and efficient
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className="relative p-6 h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg">
                        {step.id}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Testimonials */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Parallax translateY={[-15, 15]} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className="relative p-8 h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <p className="text-lg italic mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                          
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}