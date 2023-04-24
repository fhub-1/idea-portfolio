import { motion } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Kitech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.61 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFonts">
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@KITECH SOLUTIONS</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark ">Jan - Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          As a software developer at KITECH SOLUTIONS, I had the opportunity to
          work on building and maintaining the company&#39;s website, which was
          an exciting and challenging experience. From the outset, I was tasked
          with developing a website that would be user-friendly, responsive, and
          visually appealing to the target audience.
        </li>
        <li className="flex gap-2 text-base font-titleFonts text-textDark">
          <span className="text-textGreen mt-1">
            {" "}
            <IoArrowRedoSharp className="text-textGreen" />
          </span>{" "}
          To achieve this, I had to apply my knowledge and expertise in various
          programming languages, such as HTML, CSS, and JavaScript. I worked
          closely with the design team to ensure that the website was not only
          aesthetically pleasing but also functional and easy to navigate.
        </li>
      </ul>
    </motion.div>
  );
};

export default Kitech;
