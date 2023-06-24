import { motion } from "framer-motion";
import classNames from "@/utilities/classnames";
import { ButtonProps } from "./dto";
import { useThemeStore, useThemeToggle } from "@/appstate/darkmode";

function Button({
  children,
  buttonType = "outline",
  className,
  ...props
}: ButtonProps) {
  const baseClassName = () => {
    switch (buttonType) {
      case "outline":
        return classNames(
          "border bg-light shadow dark:border-dark dark:bg-zinc-800 rounded dark:text-light text-dark "
        );
      default:
        "";
    }
  };
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
      className={classNames(
        "transition duration-300 ",
        "text-sm md:text-lg",
        baseClassName(),
        className
      )}
    >
      {children}
    </motion.button>
  );
}

export default Button;
