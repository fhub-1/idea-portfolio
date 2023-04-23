import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-bodyFont tracking-wide text-textGreen"
      >
        Hi 👋,{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFonts font-semibold flex flex-col"
      >
        Joseph Kitheka.{" "}
        <span className="text-textDark mt-2 lgl:mt-4 text-2xl">
          Front-end React Developer
        </span>
      </motion.h1>{" "}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Hello. My name’s Joseph maluki Kitheka and I&rsquo;m 24 years old. I was
        always curious about software development and technology, so I went to
        Coursera with a double major in front-end development and computer
        science.{" "}
        <a>
          <span className="text-textGreen inline-flex h-7 relative cursor-pointer overflow-x-hidden group">
            Learn more
          </span>
        </a>
        <span className="absolute w-full h-[1px] left-0 bottom-1 -translate-x-[110px] group-hover:translate-x-0 transition-transform duration-300"></span>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-bodyFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out Project!
      </motion.button>
    </section>
  );
};

export default Banner;
