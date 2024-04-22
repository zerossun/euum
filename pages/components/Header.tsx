import type {NextPage} from "next";
import React from "react";
import {useRouter} from "next/router";

export type head = {
  title: string;
};

const Header: React.FC<head> = ({title}) => {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <p>{title}</p>
    </>
  );
};

export default Header;
