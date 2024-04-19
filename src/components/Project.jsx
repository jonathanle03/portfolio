import Image from "next/image";
import IconButton from "@/components/IconButton";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Project = ({ name, image, website, github }) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center items-center">
        <Image className="rounded-t-2xl border-t border-x border-black hover:brightness-50 duration-300" src={image} alt={name} style={{ width: "320px", height: "180px" }} />
        <div className="absolute flex justify-between">
          {website.length > 0 && <IconButton icon={<BsGlobe className="w-12 h-12" />} link={website} />}
          {github.length > 0 && <IconButton icon={<FaGithub />} link={github} />}
        </div>
      </div>
      <div className="flex justify-center font-sans text-3xl bg-blue-300 text-white border border-black">{name}</div>
    </div>
  );
};

export default Project;