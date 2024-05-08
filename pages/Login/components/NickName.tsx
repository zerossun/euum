import type { NextPage } from "next";
import React, {useState} from 'react';
import Header from "../../components/Header";

const NickName: NextPage = () => {

    const [name, setName] = useState('');
    const nameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
}
    return (
        <>
            <Header />
            <form onSubmit={nameSubmit}>
                <p>신규앱에서 사용할 닉네임은 뭘로 하실래요?</p>
                <input
                    placeholder="닉네임 입력"
                    value={name}
                />
                <p>
                    부적절한 닉네임의 경우 발견 즉시 사용 중지되며<br />
                    최대 법적 처벌을 받을 수 있습니다.
                </p>
            <button>다음</button>
            </form>
        </>
    );
}

export default NickName;