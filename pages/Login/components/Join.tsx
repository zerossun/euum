import type {NextPage} from "next";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import Checkbox from "@/pages/components/Checkbox";

import Link from "next/link";
import {useEffect, useState} from "react";
import Button from "@/pages/components/Button";
const Join: NextPage = () => {
  const router = useRouter();
  const [ischecked, setIschecked] = useState(false);

  const [ageAgreement, setAgeAgreement] = useState(false);

  const [termsAgreement, setTermsAgreement] = useState(false);

  const handleChange = (ageAgreement: boolean) => {
    setAgeAgreement(ageAgreement);
  };

  const handleChange2 = (termsAgreement: boolean) => {
    setTermsAgreement(termsAgreement);
  };

  const handleChange3 = (ischecked: boolean) => {
    setIschecked(ischecked);
  };

  const isbuttonEnable = () => {
    return ageAgreement && termsAgreement;
  };

  console.log(ageAgreement, termsAgreement);

  return (
    <>
      <Header title="회원가입" />
      <ul>
        <li>
          {/*
           */}
          <div>
            <Checkbox checked={ageAgreement} onchange={handleChange}></Checkbox>
            <Link href={"/Login/components/private/AgeLimit"}>
              신규앱은 만 14세 이상부터 회원가입이 가능합니다.
            </Link>
          </div>
          <div>
            <Checkbox
              checked={termsAgreement}
              onchange={handleChange2}
            ></Checkbox>
            <Link href={"/Login/components/private/Agree"}>
              본인이 만 14세 이상이며, 신규앱 서비스 필수 동의 항목인 이용약관
              및 개인정보처리방침에 동의하시면 계속 진행해주세요.
            </Link>
          </div>
        </li>
      </ul>
      <div>
        <div className="flex items-center mb-4">
          <Checkbox
            text={"(선택) 이벤트 및 혜택 알림 수신"}
            checked={ischecked}
            onchange={handleChange3}
          ></Checkbox>
        </div>
      </div>
      {/* <button
        disabled={!isbuttonEnable()}
        onClick={() => router.push("/Login/components/Join_2")}
      >
        (필수) 동의하고 계속 진행
      </button> */}
      <Button
        size="large"
        state={isbuttonEnable() ? "normal" : "disabled"}
        colorType="black"
        children="(필수) 동의하고 계속 진행"
        disabled={!isbuttonEnable()}
        onClick={() => router.push("/Login/components/Join_2")}
      ></Button>
    </>
  );
};
export default Join;
