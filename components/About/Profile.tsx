import React from "react";
import { useLottie } from "lottie-react";
import animation from '../../public/developer.json'


export default function Profile() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View: lottie } = useLottie(defaultOptions);

  return <div className="w-96 h-96">{lottie}</div>;
}
