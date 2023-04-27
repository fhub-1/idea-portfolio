import { car, ip } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const Project = () => {
  return (
    <section id="#project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Joseph Jet's React Projects:" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project list */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-20">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              className="w-ful xl:w-1/2 h-auto relative group"
              href="https://rentcar2021.netlify.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md  hover:w-full"
                  src={car}
                  alt="car_brand"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-textGreen text-sm tracking-wide">
                working on building car hring
              </p>
              <h3 className="text-2xl font-bold uppercase">
                Rent your best car 2.0
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Upon landing on the website, the user is presented with a
                homepage that contains a banner image with a{" "}
                <span className="text-textGreen">call-to-action</span> button
                that invites the user to start the rental process. Below the
                banner, there are various sections that provide additional
                information about the car rental service, such as the available
                car models, pricing, and location.
              </p>
              <ul className="text-xs md:text-sm font-titleFonts tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Styled-Components</li>
                <li>Redux</li>
              </ul>
              <div className="flex gap-4 text-2xl">
                <Link
                  href="https://github.com/fhub-1/mycar."
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <FaGithub className="w-8 h-8" />
                </Link>
                <Link
                  href="youtube.com/@learnwithjoseph"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <FaYoutube className="w-8 h-8" />
                </Link>
                <Link
                  href="https://rentcar2021.netlify.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <VscLiveShare className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-20">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              className="w-ful xl:w-1/2 h-auto relative group"
              href="https://rentcar2021.netlify.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md  hover:w-full"
                  src={ip}
                  alt="ip_tracker"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="text-textGreen text-sm tracking-wide">ip tracker</p>
              <h3 className="text-2xl font-bold uppercase">
                IP ADDRESS TRACKER
              </h3>
              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md">
                project description to be added
              </p>
              <ul className="text-xs md:text-sm font-titleFonts tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Styled-Components</li>
                <li>Redux</li>
              </ul>
              <div className="flex gap-4 text-2xl">
                <Link
                  href="https://github.com/fhub-1/mycar."
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <FaGithub className="w-8 h-8" />
                </Link>
                <Link
                  href="youtube.com/@learnwithjoseph"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <FaYoutube className="w-8 h-8" />
                </Link>
                <Link
                  href="https://rentcar2021.netlify.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <VscLiveShare className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
