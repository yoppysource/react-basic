import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/random-message">Hello NestJs!</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
