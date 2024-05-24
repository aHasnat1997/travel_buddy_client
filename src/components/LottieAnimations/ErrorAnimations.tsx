'use client';
import assets from "@/assets";
import Lottie from "lottie-react";

function ErrorAnimations() {
  return (
    <Lottie
      animationData={assets.animations.error}
      className="w-44"
      loop={true}
    />
  );
}

export default ErrorAnimations;