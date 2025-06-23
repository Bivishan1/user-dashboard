// components/Avatar.tsx
import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={`${className}`}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";


