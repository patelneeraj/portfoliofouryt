import Title from "./Title";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import { SiReact } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import csul_logo from "../public/img/csul-logo.png";
import cl_logo from "../public/img/cubelelo.jpg";
import kgp from "../public/img/kgp.png";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Brainlytic Solutions Private Limited"
          subTitle="Freelance May 2023 - January 2024"
          icon={<Image src={cl_logo} alt="Cubelelo" />}
        />
        <ExperienceCard
          title="IIT Kharagpur - City Future Lab"
          subTitle="Freelance Flutter Developer June - November 2023"
          icon={<Image src={kgp} alt="Cubelelo" />}
        />
        <ExperienceCard
          title="Cubelelo"
          subTitle="Freelance Angular Developer June - September 2022"
          icon={<Image src={csul_logo} alt="Cubelelo" />}
        />
      </div>
    </div>
  );
};

export default Experience;
