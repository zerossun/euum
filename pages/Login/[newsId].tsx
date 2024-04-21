import type {NextPage} from "next";
import {useRouter} from "next/router";

const First: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  const onPageLoadHandler = () => {
    router.push("/Login");
  };

  return (
    <>
      <h1>First Page</h1>
      <p>{newsId}</p>
      <button onClick={onPageLoadHandler}>Go To News Page</button>
    </>
  );
};

export default First;
