import { type VariantProps, cva } from "class-variance-authority";

export const fadeIn = cva(
  "animate-in fade-in duration-500 fill-mode-forwards",
  {
    variants: {
      direction: {
        up: "slide-in-from-bottom-4",
        down: "slide-in-from-top-4",
        left: "slide-in-from-right-4",
        right: "slide-in-from-left-4",
      },
      delay: {
        none: "",
        100: "delay-100",
        200: "delay-200",
        300: "delay-300",
        400: "delay-400",
        500: "delay-500",
      },
    },
    defaultVariants: {
      direction: "up",
      delay: "none",
    },
  }
);

export type FadeInProps = VariantProps<typeof fadeIn>;