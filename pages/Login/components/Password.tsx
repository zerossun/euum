import type {NextPage} from "next";
import React, {useRef, useState} from "react";
import Header from "../../components/Header";
import ctl from '@netlify/classnames-template-literals';
import {useRouter} from "next/router";
import {Yellowtail} from "next/font/google";
import Button from "@/pages/components/Button";

const Password: NextPage = () => {
  // Array(6) : [비어있음 x 6]
  // [...Array(6)] : [undefined, undefined, undefined, undefined, undefined, undefined];
  //랜더링 발생시키지 않기 위해 useRef 사용
  
  const Button = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6'];
  // 실제 input text를 받을 input 태그
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [password, setPassword] = useState(''); // 현재 입력된 숫자
  const [active, setActive] = useState(0) // 현재 입력된 숫자(인덱스)
  
  const passwordNumber = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const inputNumber = e.target.value.replace(/[^0-9]/g, "");
    setPassword(inputNumber);
  };


  // const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputNumber = e.target.value.replace(/[^0-9]/g, "");

    

  // const router = useRouter();
  
  // const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const input = e.target.value.replace(/[^0-9]/g, "");

  //   if (input.length <= 6) {
  //     setPassword(input);
  //   }
  //   if (input.length === 6) {
  //     router.push("/Login/components/Password_2");
  //   }
  // };
  
  

  return (
    <>
      <Header title="비밀번호 설정" />
      <div className={wrapper}>
        <b>
          간편 비밀번호
          <br />
          6자리를 입력하세요.
        </b>
        <button className={button}
          onClick={() => {
            // inputRef.current?.focus();
            // 클릭 시 현재 input에 포커스 해줘라
            inputRef.current?.focus();
            
            setActive(password.length);
            console.log(`onclick :  ${password.length}`);
        }}
        >
          {Button.map((id, index) => (
            <div
              id={id}
              key={index}
              className={
                index === active ? 
                inputActive : inputDisabled
              }
            >
              <div className={password[index] && inputActive}></div>
            </div>
        ))}  
        </button>
        <input 
          className={input}
          type="text"
          //ref={inputRef}
          // ref로 연결해주어야지 button 클릭 했을 시 input에 텍스트 쓸 수 있음
          ref={inputRef}
          value={password}
          maxLength={6}
          onChange={(e) => {
            passwordNumber(e);
            // password : ${password.length} = password 배열 순서 알려줌(0부터 시작)
            // target : ${e.target.value.length - 1} = input 순서 알려줌(1부터 시작)
            // target과 password 동일하게 만들어야 함.(그래야 입력 씨 focus 잘 들어옴) => -1 해주기
            setActive(e.target.value.length - 1);
            console.log(`target : ${e.target.value.length - 1}`);
            console.log(`password : ${password.length}` );
          }}
        />
      </div>
    </>
  );
};

const wrapper = ctl(`w-full `);
const button = ctl(`flex flex-row justify-between w-56`);
const input = ctl(`text-blue-700 bg-blueblack absolute -left-[5000px]`);
const inputDisabled = ctl(`
  text-[1.875rem]
  font-[400]
  flex
  flex-col
  justify-center
  items-center
  w-[3.2rem] 
  h-[3.2rem] 
  rounded-[1rem] 
  bg-gray
  border-[1px]
  border-whitegray
`);
const inputActive = ctl(`
  text-[1.875rem]
  font-[400]
  flex
  flex-col
  justify-center
  items-center
  w-[3.2rem] 
  h-[3.2rem] 
  rounded-[1rem] 
  bg-black
  border-[1px]
  border-white
`);

export default Password;
