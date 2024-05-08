import type {NextPage} from "next";
import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import ctl from '@netlify/classnames-template-literals';
import {Router, useRouter} from "next/router";
import Password_com from "./Password_com";

const Password: NextPage = () => {
  const router = useRouter();
 
  return (
    <>
      <Header title="비밀번호 설정" />
      <div>
        <b>
          간편 비밀번호
          <br />
          6자리를 입력하세요.
        </b>
        <Password_com
          nextPage="/Login/components/Password_2"
          handleNextPage={(inputNumber: NextPage, nextPage: NextPage) => {
            router.push({ pathname: nextPage, query: { data: inputNumber } });
          }}
        />
      </div>
    </>
  );
};

export default Password;
