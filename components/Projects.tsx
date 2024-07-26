import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          description="Binspry Blogs is a dynamic blog and forum platform designed to facilitate user engagement and content sharing. Built with Django, it offers a seamless user experience with features like real-time commenting, user authentication, and a responsive design. Uses Postgresql for database."
          title="Binspry Blogs"
          link="https://binspry.com/"
        />
        <ProjectCard
          description="wca-scramble-to-matrix is a JavaScript library that provides utility functions for generating matrix representations of various Rubik's Cubes. It supports cubes ranging from 2x2 to 7x7. Each cube-specific function takes a scramble as input and returns a matrix representing the current state of the cube."
          title="WCA Scramble to Matrix"
          link="https://npmjs.com/package/wca-scramble-to-matrix"
        />
      </div>
    </div>
  );
};

export default Projects;
