import type {NextPage} from "next";
import React, {useState} from "react";
import Header from "../../components/Header";
import {useRouter} from "next/router";
import {Yellowtail} from "next/font/google";

const Password: NextPage = () => {
  const [Password, setPassword] = useState<string>("");
  const router = useRouter();
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, "");

    if (input.length <= 6) {
      setPassword(input);
    }
    if (input.length === 6) {
      router.push("/Login/components/Password_2");
    }
  };

  return (
    <>
      <Header title="비밀번호 설정" />
      <b>
        간편 비밀번호
        <br />
        6자리를 입력하세요.
      </b>
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={Password[index] || ""}
          onChange={inputChange}
          style={{
            background: "#e6e6e6",
            width: "25px",
            height: "auto",
            borderRadius: "50%",
            textAlign: "center",
          }}
        />
      ))}
    </>
  );
};

export default Password;
