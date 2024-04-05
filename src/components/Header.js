import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-around h-[100px] items-center bg-gray-100">
      <h1 className="text-2xl">STREET MARKET</h1>
      <ul className="flex gap-4 text-xl">
        <li>
          <Link href="/">로그인</Link>
        </li>
        <li>
          <Link href="/">회원가입</Link>
        </li>
      </ul>
    </div>
  );
}
