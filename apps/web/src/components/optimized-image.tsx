"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends ImageProps {
  containerClassName?: string;
}

export function OptimizedImage({
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        {...props}
        className={cn("image-fade-in", isLoaded && "loaded", className)}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) {
            // @ts-ignore
            props.onLoad(e);
          }
        }}
      />
    </div>
  );
}
