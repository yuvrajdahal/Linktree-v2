import { MotionProps } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof MotionProps
> & {
  children: ReactNode;
  buttonType?: "outline";
  className?: string | string[];
};
