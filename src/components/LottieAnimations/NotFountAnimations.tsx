'use client';
import assets from "@/assets";
import Lottie from "lottie-react";

function NotFountAnimations() {
  return (
    <Lottie
      animationData={assets.animations.notFound}
      className="w-[30rem]"
      loop={true}
    />
  );
}

export default NotFountAnimations;