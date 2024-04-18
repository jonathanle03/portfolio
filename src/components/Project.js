import Image from "next/image";

const Project = ({ name, image }) => {
  return (
    <div>
      <Image src={image} />
      <div>{name}</div>
    </div>
  );
};

export default Project;