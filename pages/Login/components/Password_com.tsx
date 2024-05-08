import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import ctl from '@netlify/classnames-template-literals';
import { useRouter } from "next/router";

interface PasswordcomProps {
    nextPage: NextPage | string | number | undefined;
    handleNextPage: (inputNumber: NextPage , nextPage: NextPage) => void;
}


const Password_com: React.FC<PasswordcomProps> = ({nextPage, handleNextPage}) => {
    const router = useRouter();
    // Array(6) : [비어있음 x 6]
    // [...Array(6)] : [undefined, undefined, undefined, undefined, undefined, undefined];
    //랜더링 발생시키지 않기 위해 useRef 사용
    
    const Button = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6'];
    // 실제 input text를 받을 input 태그
    const inputRef = useRef<HTMLInputElement>(null);
    
    const [password, setPassword] = useState(''); // 현재 입력된 숫자
    const [active, setActive] = useState(0) // 현재 입력된 숫자(인덱스)
    
    const passwordNumber = (e: React.ChangeEvent<HTMLInputElement>) => { 
      const inputNumber = e.target.value.replace(/[^0-9]/g, "").trim();
      
      if (inputNumber.length <= 6) {
        setPassword(inputNumber);  
      }
      if (inputNumber.length === 6) {
          // router.push({ pathname: nextPage, query: { data: inputNumber } });
          handleNextPage(inputNumber, nextPage);
      }
    };

    return (
    <div className={wrapper}>
            <button className={button}
               onClick={() => {
                // inputRef.current?.focus();
                // 클릭 시 현재 input에 포커스 해줘라
                inputRef.current?.focus();
                setActive(password.length - 1);
                console.log(`onclick :  ${password.length}`);
            }}>
                {Button.map((id, index) => (
                <div
                    id={id}
                    key={index}
                    className={
                        index === active ? inputActive : inputDisabled
                    }
                >
                    <div className={password[index] ? focus : undefined}></div>
                </div>
            ))}
        </button>
            <input className={input}
                autoFocus
                type="text"
                ref={inputRef}
                value={password}
                maxLength={6}
                onChange={(e) => {
                    passwordNumber(e);
                    setActive(e.target.value.length + 1);
                }}
            /> 
    </div>
    );

}
const wrapper = ctl(`w-full`);
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
  border-[2px]
  border-black
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
  bg-gray
  border-[2px]
  border-red-900
`);
const focus = ctl(`
text-[1.875rem]
  font-[400]
  flex
  flex-col
  justify-center
  items-center
  w-[3.2rem] 
  h-[3.2rem] 
  rounded-[1rem] 
  bg-gray-300
  border-[1px]
  border-white
`);

export default Password_com;