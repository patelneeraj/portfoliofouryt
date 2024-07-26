import Image from "next/image";
interface Props {
  title: string;
  link: string;
  description: string;
}

const ProjectCard = ({ title, link, description }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
        <p className="w-80 text-justify p-5 font-bold">{description}</p>
        <p className="absolute inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
