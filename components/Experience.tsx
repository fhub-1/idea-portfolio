import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Kitech from "./works/Kitech";
import Pwani from "./works/Pwani";
import Techkidz from "./works/Techkidz";

const Experience = () => {
  const [workKitech, setWorkKitech] = useState(true);
  const [workPwani, setWorkPwani] = useState(false);
  const [workTech, setWorkTech] = useState(false);

  // making the onclick function work with useState
  const handleKitech = () => {
    setWorkKitech(true);
    setWorkTech(false);
    setWorkPwani(false);
  };
  const handleTech = () => {
    setWorkTech(true);
    setWorkKitech(false);
    setWorkPwani(false);
  };
  const handlePwani = () => {
    setWorkTech(false);
    setWorkKitech(false);
    setWorkPwani(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where i have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleKitech}
            className={`${
              workKitech ? "border-l-textGreen" : "border-l-textDark"
            } border-l-2  bg-transparent hover:bg-hoverColor py-3 text-sm border-l-textGreen text-textDark cursor-pointer duration-300 px-8 font-medium`}
          >
            Kitech solutions
          </li>
          <li
            onClick={handlePwani}
            className={`${
              workPwani ? "border-l-textGreen" : "border-l-textDark"
            } border-l-2  bg-transparent hover:bg-hoverColor py-3 text-sm border-l-textGreen text-textDark cursor-pointer duration-300 px-8 font-medium`}
          >
            Pwani Teknowgalz
          </li>
          <li
            onClick={handleTech}
            className={`${
              workTech ? "border-l-textGreen" : "border-l-textDark"
            } border-l-2  bg-transparent hover:bg-hoverColor py-3 text-sm border-l-textGreen text-textDark cursor-pointer duration-300 px-8 font-medium`}
          >
            Tech kidz
          </li>
        </ul>
        {workKitech && <Kitech />}
        {workPwani && <Pwani />}
        {workTech && <Techkidz />}
      </div>
    </section>
  );
};

export default Experience;
