import React from "react";
import Link from "next/link";
import profileImg from "@public/profile-img.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-2">
        <Image
          src={profileImg}
          alt="CodeBucks"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">CodeBucks</span>
    </Link>
  );
};

export default Logo;
