import { MotionProps } from "framer-motion";

export interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof MotionProps> {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}
