import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <Link href="https://github.com/fhub-1" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaGithub />
        </span>
      </Link>
      <Link href="https://youtube.com/@learnwithjoseph" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaYoutube />
        </span>
      </Link>
      <Link href="https://twitter.com/@josehub121" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaTwitter />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/joseph-kitheka-4827a01a7/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaLinkedinIn />
        </span>
      </Link>
    </div>
  );
}

export default Footer;
