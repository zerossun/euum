import type {NextPage} from "next";
import React, {useState} from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Password_com from "./Password_com";


const Password_2: NextPage = () => {
  const router = useRouter();
  
  return(
    <>
      <Header title="비밀번호 확인" />
      <div>
        <b>
          간편 비밀번호
          <br />
          6자리를 다시 입력하세요.
        </b>
        <Password_com 
          nextPage="/Login/components/NickName"
          handleNextPage={(inputNumber: NextPage, nextPage: NextPage) => {
            if (inputNumber === router.query.data) {
              router.push("/Login/components/NickName");
            } else {
              alert('error');
            }
          }}
        />
      </div>
    </>
  );
};

export default Password_2;
