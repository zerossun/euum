import type {NextPage} from "next";
import {useRouter} from "next/router";
import Header from "../../components/Header";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import Button from "@/pages/components/Button";
const Join_2: NextPage = () => {
  const router = useRouter();

  const [phoneNumber, setphoneNumber] = useState("010");

  const phoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.value에서 숫자 외에는 나오지 않게(정규표현식, replace)
    const inputNumber = e.target.value.replace(/[^0-9]/g, "");
    setphoneNumber(inputNumber);
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/Login/components/Password");
  };

  const isNUmberAble = () => {
    return phoneNumber.length == 11;
  };

  return (
    <>
      <Header />
      <form onSubmit={HandleSubmit}>
        <p>
          신규앱은 핸드폰번호로 가입하지만
          <br />
          서비스를 이용할 땐 번호가 절대 노출되지 않습니다.
        </p>
        <label>
          <input
            type="text"
            value={phoneNumber}
            onChange={phoneNumberChange}
            maxLength={11}
          />
        </label>
        <p>휴대폰번호는 010이 포함된 11자리 입니다.</p>
        <Button
          type="submit"
          children="다음"
          state={isNUmberAble() ? "normal" : "disabled"}
          size={"large"}
          colorType={"black"}
          disabled={!isNUmberAble()}
        />
      </form>
    </>
  );
};
export default Join_2;
