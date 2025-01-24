"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { Play } from "lucide-react";

export default function SignIn() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully signed in!");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8 p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center space-x-2">
            <Play className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">AppLaunch Pro</span>
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-primary hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
}