import { motion } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Pwani = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.61 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFonts">
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@Pwani Teknowgalz</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark ">Jan - Present/Part time</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          As a front-end React developer and web development mentor at Pwani
          Teknowgalz, I had the privilege of working with a team of talented
          individuals who were passionate about empowering girls with tech
          skills. My role involved developing and maintaining the company&#39;s
          website, as well as mentoring young girls on web development.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          One of the highlights of my experience at Pwani Teknowgalz was the
          opportunity to work with the girls and inspire them to pursue careers
          in technology. I mentored them on web development basics, such as
          HTML, CSS, and JavaScript, and guided them in building their own
          websites from scratch.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          Through this process, I learned the importance of patience, effective
          communication, and adaptability. As a mentor, I had to be patient and
          understanding, as the girls came from diverse backgrounds and had
          varying levels of experience with technology. I also had to
          communicate effectively, breaking down complex concepts into simple
          terms that they could understand.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          Aside from mentoring, I was responsible for developing and maintaining
          the company&#39;s website. I utilized my skills in React, JavaScript,
          and other front-end technologies to create a website that was not only
          visually appealing but also functional and user-friendly. I worked
          closely with the design team to ensure that the website&#39;s layout
          and user interface were optimized for a seamless user experience.
        </li>
      </ul>
    </motion.div>
  );
};

export default Pwani;
