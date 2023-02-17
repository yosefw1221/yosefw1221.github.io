import Image from "next/image";
import React from "react";
import Profile from "./Profile";

export default function Index({innerRef}:any) {
  return (
    <section ref={innerRef} id="about">
      <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto my-10 text-white min-h-screen place-items-center gap-6">
        <div className="flex px-8 flex-col order-2 md:order-1">
          <p className="text-white hidden mb-4 md:block text-6xl font-semibold">About</p>
          <p>
            👋 I&apos;m a self-oriented android and fullstack (backend heavy)
            developer and i enjoy creating things that live on the internet. My
            interest in programming started back in high school when i started
            to learn java for android app development.
          </p>
          <br />
          <p>
            I&apos;m a quick learner and loves a challenging problem and
            <br />
            believes code is a story that needs to be told and
            <br />
            try&apos;s to tell stories in a clean and readable way through code
            as much as i can.
          </p>
          <br />
          Here are a few technologies I’ve been working with recently:
          <div className="flex gap-16 ml-8 mt-2">
            <ol className="list-disc">
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Socket.io</li>
            </ol>
            <ol className="list-disc">
              <li>Progressive WebApp (PWA)</li>
              <li>React</li>
              <li>Java</li>
              <li>Kotlin</li>
            </ol>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Profile/>
        </div>
        
      </div>
    </section>
  );
}
