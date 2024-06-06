import Link from "next/link";
import React from "react";
import "../app/styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">홈페이지</Link>
        </li>
        <li>
          <Link href="/posts">목록</Link>
        </li>
        <li>
          <Link href="/create">생성</Link>
        </li>
      </ul>
    </>
  );
}
