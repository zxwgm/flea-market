import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-evenly leading-10 pt-10">
        <div>
          <p className="font-bold">STREET MARKET</p>
          <p>(주)스트릿 마켓</p>
          <p>012-34-567890123</p>
          <p>서울</p>
        </div>
        <div>
          <p className="font-bold">CONTAC</p>
          <p>streetmarket@gmail.com</p>
          <p>010-1123-4567</p>
          <p>streetmarket</p>
          <p>10:00 - 18:00 주말, 공휴일 휴무</p>
        </div>
      </div>
      <p className="text-center mt-10 pb-10">
        COPYRIGHT INFORMATION GOES HERE © 2017. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}
