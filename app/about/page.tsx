/* eslint-disable react/no-unescaped-entities */
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
    role: "Co-Founder & CEO",
    image: "/team/shashwat.jpg",
    bio: "With over a decade of experience in mobile app development and publishing, Shashwat has helped launch 500+ successful apps. Previously led mobile initiatives at major tech companies.",
    linkedin: "https://linkedin.com/in/shashwat"
  },
  {
    name: "Subhayu Das",
    role: "Co-Founder & CTO",
    image: "/team/subhayu.jpg",
    bio: "Tech veteran specializing in Play Store optimization and app marketing. Has driven over 10M+ downloads for client apps through strategic optimization and marketing.",
    linkedin: "https://linkedin.com/in/subhayu"
  },
];

const achievements = [
  { number: "500+", label: "Apps Published", icon: Rocket },
  { number: "10M+", label: "Total Downloads", icon: Users },
  { number: "98%", label: "Success Rate", icon: Trophy },
  { number: "24h", label: "Avg. Response Time", icon: Target },
];

const values = [
  {
    title: "Expertise First",
    description: "Deep knowledge of Play Store policies and best practices ensures smooth app launches."
  },
  {
    title: "Developer Success",
    description: "Your success is our success. We provide end-to-end support until your app thrives."
  },
  {
    title: "Transparency",
    description: "Clear communication and honest feedback throughout the publishing process."
  },
  {
    title: "Innovation",
    description: "Constantly updating our processes to match Play Store's evolving requirements."
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
      <section className="relative isolate min-h-[80vh] flex items-center">
        <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
              Simplifying <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">App Publishing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Since 2018, we've been the trusted partner for developers worldwide, 
              transforming complex app publishing processes into seamless launches. 
              Our expertise has helped over 500 apps find their place on the Google Play Store.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Work with Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{achievement.number}</h3>
                <p className="text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every app launch and client interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your app's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="rounded-full mx-auto mb-6 border-4 border-primary/10"
                  />
                  <h3 className="font-semibold text-2xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={member.linkedin} target="_blank">
                      Connect on LinkedIn
                    </Link>
                  </Button>
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

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your App?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join hundreds of successful developers who have trusted us with their app launches. 
              Let's make your app the next success story.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 