import Link from "next/link";

const IconButton = (icon, link) => {
  return (
    <>
      {typeof link == "string" &&
        <Link className="" href={link}>
          {icon}
        </Link>
      }
    </>
  );
};

export default IconButton;