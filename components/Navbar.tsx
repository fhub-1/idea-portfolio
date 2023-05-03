import { logo } from "@/public/assets";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <>
      <Head>
        <title>Navbar</title>
      </Head>
      <div className="w-full shadow-md h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container h-full mx-auto py-1 font-titleFonts flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image className="w-40" src={logo} alt="logo" />
            </Link>
          </motion.div>
          <div className="hidden mdl:inline-flex items-center gap-7 font-bodyFont">
            <ul className="flex text-[13px] gap-7 font-bodyFont">
              <Link
                href="#home"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.11 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link
                href="#about"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.12 }}
                >
                  <span className="text-textGreen">01.</span>About
                </motion.li>
              </Link>
              <Link
                href="#experience"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.21 }}
                >
                  <span className="text-textGreen">02.</span>Experience
                </motion.li>
              </Link>
              <Link
                href="#work"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.31 }}
                >
                  <span className="text-textGreen">03.</span>work
                </motion.li>
              </Link>
              <Link
                href="#blog"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.41 }}
                >
                  <span className="text-textGreen">04.</span>Blog
                </motion.li>
              </Link>
              <Link
                href="#contact"
                onClick={handleScroll}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.51 }}
                >
                  <span className="text-textGreen">05.</span>Contact
                </motion.li>
              </Link>
            </ul>
            <Link href="/assets/resume.pdf" target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.61 }}
                className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300"
              >
                Resume
              </motion.button>
            </Link>
          </div>
          {/* menu icons */}

          <div className="w-6 -h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <HiMenuAlt3
              onClick={() => setShowMenu(true)}
              className="cursor-pointer"
            />
          </div>
          {showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="w-80 h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
              >
                <RiCloseFill
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                />
                {/* small links */}
                <div className="flex flex-col items-center gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    <Link
                      href="#home"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.11,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                      >
                        Home
                      </motion.li>
                    </Link>
                    <Link
                      href="#about"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.2,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textGreen">01.</span>About
                      </motion.li>
                    </Link>
                    <Link
                      href="#experience"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.3,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textGreen">02.</span>Experience
                      </motion.li>
                    </Link>
                    <Link
                      href="#work"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.4,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textGreen">03.</span>work
                      </motion.li>
                    </Link>
                    <Link
                      href="#blog"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.5,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textGreen">04.</span>Blog
                      </motion.li>
                    </Link>
                    <Link
                      href="#contact"
                      onClick={handleScroll}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 0.5,
                          ease: "easeIn",
                        }}
                      >
                        <span className="text-textGreen">05.</span>Contact
                      </motion.li>
                    </Link>
                  </ul>
                  <Link href="/assets/resume.pdf" target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.61, ease: "easeIn" }}
                      className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300"
                    >
                      Resume
                    </motion.button>
                  </Link>
                  {/* footer */}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
