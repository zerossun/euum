import type {NextPage} from "next";
import {useRouter} from "next/router";
import Dropdown from "./components/Dropdown";

const Start: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <button className="block">문의하기</button>
      <Dropdown />
      <h2>도대체 왜 그럴까?</h2>
      <h1>LOGO</h1>
      <h3>
        정말 다양한 사람들에게
        <br /> 당신의 생각을 공유해주세요!
      </h3>
      <button
        className="block"
        onClick={() => router.push("/Login/components/Join")}
      >
        회원가입
      </button>
      <button
        className="block"
        onClick={() => router.push("/Login/components/FirstLogin")}
      >
        로그인
      </button>
    </>
  );
};

export default Start;
