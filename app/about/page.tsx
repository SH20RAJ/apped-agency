"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Target, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Shashwat Raj",
    role: "Founder & CEO",
    image: "",
    bio: "10+ years of experience in app development and publishing",
  },
  {
    name: "Subhayu Das",
    role: "Head of Operations",
    image: "",
    bio: "Expert in Play Store optimization and app marketing",
  },
  {
    name: "Batman",
    role: "Technical Lead",
    image: "",
    bio: "Specialized in app security and performance optimization",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to simplify app publishing",
  },
  {
    year: "2020",
    title: "100th App Launch",
    description: "Reached our first major milestone",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Extended services to developers worldwide",
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as a top app publishing partner",
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">AppLaunch Pro</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're a team of passionate experts dedicated to helping developers successfully launch 
              their apps on the Google Play Store. Our mission is to simplify the app publishing 
              process and ensure your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experts behind your successful app launches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize app publishing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 relative">
                  <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-lg mt-4 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your App?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of successful developers who trusted us with their app launches
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 