import React from "react";
import { useLottie } from "lottie-react";
import animation from '../public/scroll-down-hint.json'


export default function ArrowAnim() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View: lottie } = useLottie(defaultOptions);

  return <div className="w-16 h-16 mx-auto absolute bottom-6 left-0 right-0">{lottie}</div>;
}
