import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="aspect-square"
      height="80"
      src="/logo.jpeg"
      width="80"
    />
  );
};

export default Logo;
