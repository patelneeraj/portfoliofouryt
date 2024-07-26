import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">
          Let&apos;s Build Great Things Together!
        </h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am eager to contribute my skills to innovative projects, collaborate
          with dynamic teams, and tackle challenging problems. Feel free to
          reach out to discuss opportunities, project ideas, or how I can add
          value to your organization.
        </p>
        <a href="mailto:neeraj@patelneeraj.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/patelneeraj28"
        />
      </div>
    </div>
  );
};

export default Contact;
