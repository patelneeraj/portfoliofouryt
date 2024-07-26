import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Python" />
        <SkillsInput title="Flask" />
        <SkillsInput title="Django" />
        <SkillsInput title="C#" />
        <SkillsInput title="ASP.NET" />
        <SkillsInput title="Angular" />
        <SkillsInput title="Javascript" />
        <SkillsInput title="Reactjs" />
        <SkillsInput title="Nextjs" />
        <SkillsInput title="Nodejs" />
        <SkillsInput title="Typescript" />
        <SkillsInput title="Expressjs" />

        <SkillsInput title="Docker" />
        <SkillsInput title="CI/CD" />

        <SkillsInput title="MongoDB" />
        <SkillsInput title="Google Firebase" />
        <SkillsInput title="MySQL" />

        <SkillsInput title="Tailwindcss" />

        <SkillsInput title="HTML5" />
        <SkillsInput title="CSS3" />

        <SkillsInput title="Git" />
        <SkillsInput title="Github" />

        <SkillsInput title="AWS" />
        <SkillsInput title="GCP" />
        <SkillsInput title="Azure" />
        <SkillsInput title="Oracle Cloud" />

        <SkillsInput title="Linux" />
        <SkillsInput title="Mongoose" />

        <SkillsInput title="Nginx" />
        <SkillsInput title="Apache" />
      </div>
    </div>
  );
};

export default Skills;
