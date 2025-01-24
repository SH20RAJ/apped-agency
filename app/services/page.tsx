import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "App Testing",
    description: "Comprehensive testing across multiple devices and OS versions",
    features: [
      "Manual and automated testing",
      "Performance optimization",
      "Bug detection and reporting",
      "UI/UX testing",
      "Compatibility testing",
    ],
  },
  {
    name: "Compliance Review",
    description: "Ensure your app meets all Google Play Store requirements",
    features: [
      "Policy compliance check",
      "Privacy policy review",
      "Content rating assessment",
      "Security verification",
      "Data handling audit",
    ],
  },
  {
    name: "Launch Support",
    description: "End-to-end assistance for successful app launch",
    features: [
      "Google Play Console setup",
      "Store listing optimization",
      "Submission process management",
      "Launch strategy planning",
      "Post-launch monitoring",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From Testing to Launch Success
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the service that best fits your needs. All packages include
            dedicated support from our expert team.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              className="flex flex-col justify-between p-8"
            >
              <div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-6 w-6 flex-none text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8" size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer tailored packages to meet your specific requirements.
          </p>
          <Button className="mt-8" variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}