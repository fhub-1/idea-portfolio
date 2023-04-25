import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Head from "next/head";
import { me } from "@/public/assets";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      >
        {" "}
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-titleFonts1 text-1xl font-medium flex flex-col gap-4">
            <p>
              As an experienced software developer with a strong track record of
              success, I possess a diverse and promising skill-set that makes me
              an ideal candidate for your organization. With 3 years of
              expertise, I am proficient in various platforms, languages, and
              embedded systems, and experienced with cutting-edge development
              tools and procedures. I excel both as a self-manager during
              independent projects and as a collaborative team member, bringing
              a strong sense of professionalism and a dedication to excellence
              to all of my work. Additionally, my experience in content creation
              on YouTube demonstrates my ability to think creatively and
              communicate effectively, making me an asset to any team. I look
              forward to the opportunity to bring my skills and experience to
              your organization and help drive success.
            </p>
            {/* <p>add more</p> */}
            <ul className="max-w-[450px] text-sm font-titleFonts grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Javascript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                React js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Next js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Nuxt
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Prisma
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Node js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Typscript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Tailwindcss
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Chakra-UI
              </li>
            </ul>
          </div>
          <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="rounded-lg absolute w-full -left-6 h-80 -top-6">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                  src={me}
                  className="rounded-lg h-full object-cover"
                  width={550}
                  height={100 / 2}
                  alt="project_image"
                />
                <div className="hidden lgl:inline-block absolute w-full h-80  rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
