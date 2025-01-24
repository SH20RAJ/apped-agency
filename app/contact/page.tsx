"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Launch Your App!
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get in touch with us to discuss your app launch needs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="app-details">App Details</Label>
                <Input id="app-details" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>applaunchpro@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 **********</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>BIT Mesra, Jharkhand, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Office Hours</h3>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Anytime you feel free to contact us.</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}