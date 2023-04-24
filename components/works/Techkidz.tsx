import { motion } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Techkidz = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.61 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFonts">
        Software Developer
        <span className="text-textGreen tracking-wide">@Tech Kidz Africa</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark ">
        Jully 2017 - Aug 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            <IoArrowRedoSharp className="text-textGreen" />
          </span>
          As a front-end developer and mobile developer at Tech Kidz Africa, I
          had the opportunity to work with a team of passionate individuals who
          were dedicated to empowering young kids with tech skills. My role
          involved developing and maintaining the company&#39;s website, as well
          as teaching kids aged between 7 to 18 years on web and mobile app
          development.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            <IoArrowRedoSharp className="text-textGreen" />
          </span>
          One of the highlights of my experience at Pwani Teknowgalz was the
          opportunity to work with the girls and inspire them to pursue careers
          in technology. I mentored them on web development basics, such as
          HTML, CSS, and JavaScript, and guided them in building their own
          websites from scratch.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            <IoArrowRedoSharp className="text-textGreen" />
          </span>
          Overall, my experience at Tech Kidz Africa was enriching, and I gained
          valuable skills in web and mobile development, mentoring, and
          teamwork. I was proud to be part of an organization that was making a
          difference in the lives of young kids, and I look forward to applying
          the skills I gained in future project
        </li>
      </ul>
    </motion.div>
  );
};

export default Techkidz;
