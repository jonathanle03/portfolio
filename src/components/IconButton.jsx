import Link from "next/link";

const IconButton = (icon, link) => {
  return (
    <Link className="" href={link}>
      {icon}
    </Link>
  );
};

export default IconButton;