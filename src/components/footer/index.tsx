import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <a
        href="https://github.com/pankod"
        target="_blank"
        className="d-block mb-3"
      >
        <Image
          src="/icons/logo-icon.svg"
          alt="pankod"
          width="140"
          height="68"
        />
      </a>

      <p>Copyright Dadscord 2021</p>
    </div>
  );
};
