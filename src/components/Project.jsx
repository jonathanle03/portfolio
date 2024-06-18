import Image from "next/image";

const Project = ({ name, image, website, github }) => {
  return (
    <div className="flex-none flex-col">
      <div className="flex justify-center items-center">
        <Image
          className="rounded-t-2xl border-t border-x border-black"
          src={image}
          alt={name}
          style={{ width: "320px", height: "180px" }}
        />
      </div>
      <div className="flex justify-center font-sans text-3xl bg-blue-300 text-white border border-black rounded-b-xl">
        {name}
      </div>
    </div>
  );
};

export default Project;
