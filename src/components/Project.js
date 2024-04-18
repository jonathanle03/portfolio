import Image from "next/image";

const Project = ({ name, image, website, github }) => {
  return (
    <div className="flex flex-col">
      <Image src={image} alt={name} />
      <div className="flex justify-center w-full">{name}</div>
    </div>
  );
};

export default Project;