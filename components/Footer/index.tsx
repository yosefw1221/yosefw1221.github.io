import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-slate-800 px-4 py-6 w-full mt-auto">
      <div className="flex flex-col items-center">
        <p className=" font-extralight text-white mb-2 text-sm">Get in Touch</p>
        <ul className="flex flex-row gap-4 text-white">
          <li>
            <a href="mailTo:yosefworku1221@gmail.com">
              <FontAwesomeIcon width="18px" icon={faGoogle} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yosef-worku/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon width="18px" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yosefw1221"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon width="18px" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://t.me/josefworku" target="_blank" rel="noreferrer">
              <FontAwesomeIcon width="18px" icon={faTelegram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
