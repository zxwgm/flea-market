import Phone from "../../public/img/phone.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center h-lvh">
        {/* 1 */}
        <div className="max-w-[1100px] w-full flex-col flex pt-60 items-start">
          <h2 className="text-7xl font-bold">STREET MARKET</h2>
          <p className="text-xl mt-5">
            플리마켓의 모든 것,
            <br /> 셀러들을 위한 플리마켓 소식부터
            <br /> CS서비스까지 도와드립니다.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="h-lvh">
        <div className="flex items-center flex-col">
          <h2 className="text-5xl text-center mb-5">
            STREET MARKET은 셀러분들을 위해
            <br /> 다양한 플리마켓 행사소식을 알려드립니다.
          </h2>
          <p className="text-xl">
            소규모부터 대규모 행사까지! 지역, 장소 상관없이 셀러분들이 참가할 수
            있는 행사를 쉽고 빠르게 전달해드립니다.
          </p>
          {/* 캐러셀 */}
        </div>
      </div>
      {/* 3 */}
      <div className="h-lvh">
        <div className="flex items-center flex-col">
          <h2 className="text-5xl text-center mb-5">
            빠르고 간편한 서비스를 제공합니다.
          </h2>
          <p className="text-xl text-center">
            셀러님의 소중한 개인정보 보호를 위해 별도의 플랫폼 가입 없이
            <br /> 필요 정보만 수집하여 참가신청을 도와드립니다.
          </p>
          {/* 이미지 */}
          <div className="mt-20">
            <img src={Phone.src} alt="" />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="h-lvh">
        <div className="flex items-center flex-col">
          <h2 className="text-5xl text-center mb-5">
            맞춤 고객서비스를 제공합니다.
          </h2>
          <p>오프라인으로 진행되는 플리마켓의 서비스 문제를 해결해 드립니다.</p>
          {/* 이미지 */}
        </div>
      </div>
      {/* 신청하기 */}
      <div className="h-lvh z-10">
        <div className="flex items-center flex-col">
          <h2 className="text-5xl text-center mb-5">CONTACT US</h2>
          <p className="mb-10">STREETMARKET과 함께 나아갈 셀러를 모집합니다.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white max-w-[1440px] w-full py-40 rounded-3xl flex justify-center items-center shadow-2xl">
            <form action="">
              <div className="flex flex-col items-center">
                <input
                  className="p-3 w-[600px] h-16 mb-4 rounded-md placeholder-black text-xl bg-gray-100"
                  type="text"
                  placeholder="이름"
                />
                <input
                  className="p-3 w-[600px] h-16 mb-5 rounded-md placeholder-black text-xl bg-gray-100"
                  type="text"
                  placeholder="연락처"
                />
                <div className="flex max-w-[600px] w-full">
                  <input id="check" type="checkbox" />
                  <label for="check">
                    <p className="pl-5 text-slate-500">
                      스트릿 마켓 알림톡 서비스에 동의하십니까?
                    </p>
                    <p className="pl-5 text-slate-500">
                      알림톡 서비스(광고포함)를 위해 이름, 연락처를 수집하며 그
                      외 용도로는 사용하지 않습니다.
                    </p>
                  </label>
                </div>
                <button
                  className="bg-gray-100 text-blue-500 w-[150px] h-[50px] rounded-md p-2"
                  type="submit"
                >
                  서비스 신청하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
