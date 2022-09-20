import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>{newsId}</h1>;
}
