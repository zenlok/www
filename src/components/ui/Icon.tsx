import {
  Icon as Iconify,
  type IconProps as IconifyProps,
} from "@iconify/react";

type IconProps = Optional<IconifyProps, "icon"> & {
  size?: string | number;
};

export default function Icon({
  className,
  name,
  icon,
  fill,
  size = 24,
  ...props
}: IconProps) {
  if (!name && !icon) {
    return null;
  }

  return (
    <Iconify
      className={`inline-flex ${className || ""}`}
      icon={name || icon!}
      width={size}
      height={size}
      {...props}
    />
  );
}
