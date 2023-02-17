import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function index({ innerRef }: any) {
  return (
    <div
      ref={innerRef}
      id="experience"
      className=" max-w-screen-xl p-8 mx-auto"
    >
      <p
        style={{ lineHeight: "4rem" }}
        className="font-semibold text-center text-6xl py-4 text-white font-sans"
      >
        Professional
        <br />
        Experience
      </p>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jun 2022 - Present
          </time>
          <br />
          <a
            href="https://addissoftware.com/"
            target="_blank"
            rel="noreferrer"
            className="text-lg cursor-pointer hover:underline underline-offset-4 font-semibold text-orange-400 dark:text-white"
          >
            Addis Software{" "}
            <FontAwesomeIcon
              className="inline"
              width={12}
              icon={faExternalLink}
            />
          </a>
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            FullStack Developer
            <br />
            <ul className="selection:text-white pl-4 list-disc pt-2">
              <li>I&apos;m responsible for developing new features.</li>
              <li>Improving and maintaining existing features </li>
              <li>Debugging and troubleshooting issues</li>
            </ul>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2021 - Jun 2021
          </time>
          <br />
          <a
            href="https://www.ienetworksolutions.com/"
            target="_blank"
            rel="noreferrer"
            className="text-lg cursor-pointer hover:underline underline-offset-4 font-semibold text-blue-400 dark:text-white"
          >
            IE Network Solution{" "}
            <FontAwesomeIcon
              className="inline"
              width={12}
              icon={faExternalLink}
            />
          </a>
          <div className="text-base font-normal text-gray-500 dark:text-gray-400">
            Junior Software Developer
            <br />
            <ol className="pl-4 list-disc pt-2">
              <li>
                Being part of the team, I was responsible to setup CI/CD using
                gitlab, jenkins and Apache2 server
              </li>
              <li>
                Automate API endpoint testing using RestAssured and JUnit4
              </li>
              <li>Gather requirements for ERP systems</li>
              <li>
                Participate in development of fleet driver&apos;s mobile app
              </li>
            </ol>
          </div>
        </li>
      </ol>
    </div>
  );
}
