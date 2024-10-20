"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imageSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSarchbar = ({
  route,
  iconPosition,
  imageSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imageSrc}
          alt="Search Icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700  border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imageSrc}
          alt="Search Icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSarchbar;
