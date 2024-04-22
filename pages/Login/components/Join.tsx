import type {NextPage} from "next";
import Header from "../../components/Header";
import Link from "next/link";
const Join: NextPage = () => {
  return (
    <>
      <Header title="회원가입" />
      <ul>
        <li>
          <Link href={"/Login/components/private/AgeLimit"}>
            신규앱은 만 14세 이상부터 회원가입이 가능합니다.
          </Link>
          <Link href={"/Login/components/private/Agree"}>
            본인이 만 14세 이상이며, 신규앱 서비스 필수 동의 항목인 이용약관 및
            개인정보처리방침에 동의하시면 계속 진행해주세요.
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Join;
