import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import FirebaseIcon from "../../public/firebase.svg";
import MongoDB from "../../public/mongodb-icon.svg";
import Kotlin from "../../public/kotlin-logo.svg";
import Image from "next/image";

export default function Index({ innerRef }: any) {
  return (
    <section
      ref={innerRef}
      id="service"
      style={{ background: "#4444", width: "100vw", paddingBottom: "3rem" }}
    >
      <div className=" max-w-screen-xl p-4 mx-auto">
        <p
          style={{ fontSize: "4rem" }}
          className="font-semibold py-4 text-white font-sans"
        >
          My Expertise
        </p>
        <div className="grid lg:grid-cols-2 gap-6 flex-wrap">
          <Skill icon={faDesktop} title="Full Stack" color="#5533e4">
            <>
              <p>
                Experience in developing real world web applications from
                scratch to production using MERN stack
              </p>
              <div className="flex flex-wrap items-baseline text-xs gap-6 mt-4">
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={30} icon={faNodeJs} title="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={30} icon={faJs} />
                  <span>JavaScript</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={30} icon={faReact} />
                  <span>React</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={35} icon={faDocker} />
                  <span>Docker</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={30} icon={faGit} />
                  <span>Git</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <Image width={30} height={40} src={MongoDB} alt="firebase" />
                  <span>MongoDB</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={25} icon={faDatabase} />
                  <span>MySql</span>
                </div>
              </div>
            </>
          </Skill>
          <Skill icon={faAndroid} title="Android" color="#ffaa44">
            <>
              <p>
                Skilled in developing android native apps and library using
                Kotlin and Java
              </p>
              <div className="flex flex-wrap items-baseline text-xs gap-6 mt-4">
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={30} icon={faJava} />
                  <span>Java</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <Image width={50} src={Kotlin} alt="firebase" />
                  <span>Kotlin</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <FontAwesomeIcon width={25} icon={faDatabase} />
                  <span>Sqlite</span>
                </div>
                <div className="flex gap-1 text-gray-200 items-center flex-col">
                  <Image width={25} src={FirebaseIcon} alt="firebase" />
                  <span>Firebase</span>
                </div>
              </div>
            </>
          </Skill>
        </div>
      </div>
    </section>
  );
}

interface SkillPropType {
  icon: IconProp;
  title: string;
  color: string;
  children: ReactElement;
}

function Skill({ icon, title, color, children }: SkillPropType) {
  return (
    <div className="border text-white p-6">
      <div className="flex gap-6">
        <FontAwesomeIcon width={42} height={42} icon={icon} />
        <div>
          <p
            style={{ textDecorationColor: color }}
            className="font-semibold text-4xl underline decoration-8 "
          >
            {title}
          </p>
          <p className=" text-4xl font-semibold mt-2 mb-4">Development</p>
          {children}
        </div>
      </div>
    </div>
  );
}
