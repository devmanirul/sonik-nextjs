import Image from "next/image";

// export default function Home {
//   return (
//     <div className="flex flex-col w-full h-full">
//
//       <div className="bg-banner-img h-[860px] w-[1349px] ">
//         <Image src="/public/varcode.png" alt="varcode" height={50} width={50} />
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="">
      <main className="max-w-[1440px] mx-auto">
        <section className="bg-entertainment-bg bg-[#1A1A1A]">
          {/* hero section start*/}
          <section className="bg-banner-img text-white h-[861px] w-full flex flex-col justify-between">
            {/* sonik text image */}
            <div className="pt-[137px] flex flex-row justify-center">
              <Image alt="sonik" src={"/sonik.png"} width={265} height={75} />
            </div>
            {/* download sonik button */}
            <button className="flex flex-row items-center justify-start gap-8 pl-[117px] pb-[117px]">
              <h4 className="uppercase text-[40px] font-semibold">
                Download sonik
              </h4>
              <Image
                alt="arrow"
                src={"/forward-arrow.png"}
                width={58}
                height={58}
              />
            </button>
          </section>
          {/* hero section end*/}
          {/* <!-- entertainment place --> */}
          <div className="flex flex-row justify-between gap-[82px] pt-[300px] pl-[100px] pr-[139px] pb-[150px]">
            {/* <!-- left card --> */}

            <div className="w-full relative bg-black rounded-3xl z-10">
              {/* love icon */}
              <div className="absolute -top-[180px] -left-9 z-30">
                <Image
                  alt="heart icon"
                  src={"/Vector1.png"}
                  width={230}
                  height={150}
                />
              </div>
              {/* star icon */}
              <div className="absolute -left-9 -bottom-9">
                <Image
                  alt="heart icon"
                  src={"/Vector2.png"}
                  width={109}
                  height={133}
                />
              </div>
              {/* mobile image */}
              <div className="w-full relative mt-[40px] ml-[47px] mr-[130px] mb-[90px] ">
                {/* image 1 */}
                <Image
                  alt="mobile image"
                  src={"/mobile1.png"}
                  width={294}
                  height={580}
                />
                {/* image 2 */}
                <div className="absolute left-[88px] top-[63px]">
                  <Image
                    alt="mobile image"
                    src={"/mobile2.png"}
                    width={351}
                    height={554}
                  />
                </div>
              </div>
            </div>

            {/* <!-- right card --> */}
            <div className="w-full relative">
              <div className=" flex flex-col justify-center ">
                <h2 className="uppercase text-white text-[45px] font-semibold font-phudu leading-tight mt-20">
                  your city's entertainment all <br />
                  in one place
                </h2>
                <p className="font-medium text-xl text-white flex flex-col justify-center mt-5 mb-36">
                  Discover your favorite events with ease
                </p>
                {/* button container */}
                <div className="flex flex-row gap-8 mt-2">
                  {/* apple button */}
                  <button className="bg-[#383535] flex flex-row items-center justify-center gap-2 px-6 py-2 rounded-full">
                    <Image
                      alt="logo-apple"
                      src={"/logo-apple.png"}
                      width={29}
                      height={29}
                    />
                    <p className="text-2xl text-white">iOS</p>
                  </button>
                  {/* android button */}
                  <button className="bg-[#383535] flex flex-row justify-center items-center gap-2 px-6 py-2 rounded-full">
                    <Image
                      alt="logo-android"
                      src={"/logo-android.png"}
                      width={29}
                      height={29}
                    />
                    <p className="text-2xl text-white">ANDROID</p>
                  </button>
                </div>
              </div>
              {/* heart icon */}
              <div className="absolute -top-48 -right-8 z-30">
                <Image
                  alt="Vector3 icon"
                  src={"/Vector3.png"}
                  width={230}
                  height={150}
                />
              </div>
              {/* star icon */}
              <div className="absolute right-36 bottom-0">
                <Image
                  alt="music icon"
                  src={"/Vector4.png"}
                  width={109}
                  height={133}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
