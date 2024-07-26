import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a Full-Stack Developer with a strong background in web and mobile
          development, specializing in JavaScript, Python, Angular, React, Vue,
          and Flutter. I have delivered multiple freelancing projects, building
          responsive web applications and maintaining single-page applications
          with REST API integrations.
        </p>
        <p>
          Proficient in both front-end and back-end technologies, I also have
          experience with AWS, GCP, Azure, Oracle Cloud, Docker, and CI/CD
          pipelines using GitHub Actions. My technical blogs on the Binspry Blog
          Platform showcase my commitment to continuous learning and sharing
          knowledge.
        </p>
        <p>
          As a strong communicator and team player, I excel in cross-functional
          teams and am always eager to take on new challenges and learn new
          technologies. I am passionate about growing as a developer and
          contributing to impactful projects.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
