"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInviewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  const soundEffect = new Audio("/scroll-click.mp3");

  const playSoundEffect = () => {
    soundEffect.play();
  };

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
      playSoundEffect(); // Play the sound effect when the title changes color
    }
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature, playSoundEffect]);

  return (
    <p
      ref={ref}
      className={cn(
        "py-16 font-semibold text-5xl text-slate-700",
        isInView ? "text-white" : "text-gray-700"
      )}
    >
      {children}
    </p>
  );
};
