import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div
        className="
      sm:flex-row flex-center wrapper flex-between flex flex-col gap-2 p-4 text-center w-full"
      >
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>Evently - @Jinal Sojitra</p>
      </div>
    </footer>
  );
};

export default Footer;
