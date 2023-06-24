import { motion } from "framer-motion";
import { AvatarProps } from "./dto";
import classNames from "@/utilities/classnames";

const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  alt,
  size,
  ...rest
}) => {
  const avatarSize = size || 40;

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{
        height: `${avatarSize}px`,
        width: `${avatarSize}px`,
      }}
      className={classNames(
        `rounded-full`,
        "transition  duration-300 focus:ring focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-offset-2",
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    />
  );
};

export default Avatar;
