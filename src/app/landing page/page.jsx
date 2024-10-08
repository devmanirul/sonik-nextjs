import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="">
      {/* hero section start*/}
      <section className="bg-banner-img bg-cover text-white  md:h-[861px] w-full flex flex-col gap-20 justify-between">
        {/* sonik text image */}
        <div className="hidden md:pt-[137px] pt-10 md:flex flex-row justify-center">
          <Image alt="sonik" src={"/sonik.png"} width={265} height={75} />
        </div>
        {/* sonik text image mobile*/}
        <div className="md:hidden md:pt-[137px] pt-8 flex flex-row justify-center">
          <Image alt="sonik" src={"/sonik.png"} width={120} height={40} />
        </div>
        {/* download sonik button */}
        <button className="flex flex-row items-center justify-start gap-1 md:gap-8 pl-4 md:pl-[117px] pb-4 md:pb-[117px]">
          <h4 className="uppercase font-phudu text-xl md:text-[40px] font-semibold">
            Download sonik
          </h4>
          <div className="hidden md:block">
            <Image
              alt="arrow"
              src={"/forward-arrow.png"}
              width={58}
              height={58}
            />
          </div>
          {/* mobile responsive arrow */}
          <div className="block md:hidden">
            <Image
              alt="arrow"
              src={"/forward-arrow.png"}
              width={40}
              height={40}
            />
          </div>
        </button>
      </section>
      {/* hero section end*/}
      {/* main start */}
      <main className="bg-entertainment-bg bg-[#1A1A1A] md:pt-[260px] pb-16 md:pb-[123px] px-4 md:px-0">
        <section className="">
          {/* <!-- entertainment place --> */}
          <div className="flex md:flex-row flex-col-reverse justify-between gap-[140px] md:gap-[82px] md:pt-[74px] md:pl-[170px] md:pr-[139px] md:pb-[90px] py-20 md:py-0">
            {/* <!-- left card --> */}

            <div className="w-full relative bg-black rounded-3xl z-10 ">
              {/* love icon */}
              <div className="hidden md:block absolute -top-48 -left-8 z-30">
                <Image
                  alt="heart icon"
                  src={"/Vector1.png"}
                  width={249}
                  height={176}
                />
              </div>
              {/* star icon */}
              <div className="hidden md:block absolute -left-10 -bottom-10">
                <Image
                  alt="heart icon"
                  src={"/Vector2.png"}
                  width={109}
                  height={133}
                />
              </div>
              {/* icon for mobile start*/}
              {/* heart icon */}
              <div className="md:hidden absolute -top-14 right-3 z-30 ">
                <Image
                  alt="heart icon"
                  src={"/Vector1.png"}
                  width={90}
                  height={70}
                />
              </div>
              {/* star icon */}
              <div className="md:hidden absolute left-4 -bottom-12">
                <Image
                  alt="heart icon"
                  src={"/Vector2.png"}
                  width={85}
                  height={70}
                />
              </div>
              {/* icon for mobile end here */}
              {/* mobile image */}
              <div className="hidden md:block w-full relative mt-[40px] ml-[50px] mr-3 mb-[90px] ">
                {/* image 1 */}
                <Image
                  alt="mobile image"
                  src={"/mobile1.png"}
                  width={294}
                  height={580}
                />
                {/* image 2 */}
                <div className="absolute left-[80px] top-[63px]">
                  <Image
                    alt="mobile image"
                    src={"/mobile2.png"}
                    width={345}
                    height={550}
                  />
                </div>
              </div>
              {/* mobile image for mobile responsive */}
              <div className="w-full md:hidden relative px-5 py-14">
                {/* image 1 */}
                <Image
                  alt="mobile image"
                  src={"/mobile1.png"}
                  width={218}
                  height={400}
                />
                {/* image 2 */}
                <div className="absolute left-14 top-32">
                  <Image
                    alt="mobile image"
                    src={"/mobile2.png"}
                    width={259}
                    height={450}
                  />
                </div>
              </div>
            </div>

            {/* <!-- right card --> */}
            <div className="w-full relative flex flex-col justify-center ">
              <div className="">
                <h2 className="uppercase text-white text-[30px] md:text-[54px] font-semibold font-phudu mb-3 md:mb-6">
                  {`your city's entertainment all
                  in one place`}
                </h2>
                <p className="font-medium text-sm md:text-xl text-white flex flex-col justify-center mt-5 mb-10 font-inter">
                  Discover your favorite events with ease
                </p>
                {/* button container */}
                <div className="flex flex-row gap-8 mt-2">
                  {/* apple button */}
                  <button className="bg-[#383535] flex flex-row items-center justify-center gap-2 px-6 py-2 rounded-full">
                    <Image
                      alt="logo-apple"
                      src={"/logo-apple.png"}
                      width={52}
                      height={52}
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
              {/* earth icon */}
              <div className="hidden md:block absolute  md:-top-48 -right-0 z-30 ">
                <Image
                  alt="earth icon"
                  src={"/Vector3.png"}
                  width={184}
                  height={192}
                />
              </div>
              {/* responsive earth icon */}
              <div className="md:hidden block absolute  -top-9 right-12 z-30 ">
                <Image
                  alt="earth icon"
                  src={"/Vector3.png"}
                  width={70}
                  height={50}
                />
              </div>
              {/* music icon */}
              <div className="hidden md:block absolute right-36 bottom-0">
                <Image
                  alt="music icon"
                  src={"/Vector4.png"}
                  width={109}
                  height={133}
                />
              </div>
              {/* responsive music icon */}
              <div className="md:hidden block absolute right-48 -bottom-32">
                <Image
                  alt="music icon"
                  src={"/Vector4.png"}
                  width={70}
                  height={50}
                />
              </div>
            </div>
          </div>
        </section>
        {/* discover section start */}
        <section className="pb-24">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center py-12 bg-[#0D0D0D] mt-9 md:mx-[160px]  md:px-16 px-4">
            {/* left */}
            {/*  */}
            <div className="hidden md:block w-3/12">
              <Image
                alt="discoverleft"
                src={"/discoverleft.png"}
                width={204}
                height={204}
              />
            </div>
            {/* for mobile */}
            <div className="md:hidden w-full flex flex-row justify-center">
              <Image
                alt="discoverleft"
                src={"/discoverleft.png"}
                width={127}
                height={127}
              />
            </div>
            {/* middle */}
            <div className="md:w-6/12 w-full">
              <h2 className="uppercase text-3xl font-semibold text-white">
                Discover more with the app
              </h2>
              <div className="mt-7">
                {/* 1 */}
                <div className="flex flex-row items-center gap-4 pl-2 text-[#b39999]">
                  <Image
                    alt=""
                    src={"/search-outline.png"}
                    width={14}
                    height={14}
                  />
                  <p>Find events in your city</p>
                </div>
                {/* 2 */}
                <div className="flex flex-row items-center gap-4 pl-2 text-[#b39999]">
                  <Image
                    alt=""
                    src={"/trending-up-outline.png"}
                    width={14}
                    height={14}
                  />
                  <p>Stay up to date, save and share events</p>
                </div>
                {/* 3 */}
                <div className="flex flex-row items-center gap-4 pl-2 text-[#b39999]">
                  <Image
                    alt=""
                    src={"/ticket-outline.png"}
                    width={14}
                    height={14}
                  />
                  <p>Purchase, send and access all in one place</p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="md:w-3/12 flex flex-col items-end">
              <Image
                alt="qr code"
                src={"/varcode.png"}
                width={155}
                height={155}
              />
              {/*text & icon container */}
              <div className="flex flex-row items-center gap-1 mt-5">
                <p className="text-[15px] text-[#b39999]">Available at:</p>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    alt="logo-apple"
                    src={"/logo-apple.png"}
                    width={26}
                    height={26}
                  />
                  <Image
                    alt="playstore-icon"
                    src={"/playstore.png"}
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* main end here */}
      {/* footer start */}
      <footer className=" bg-[#121212] py-[61px]">
        {/* top */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center px-[88px] md:px-0">
          {/* left */}
          <div className="w-full md:pl-[89px]">
            <Image alt="sonik" src={"/sonik.png"} width={97} height={28} />
          </div>
          {/* middle */}
          <div className="w-full flex flex-col gap-3 md:items-start md:pl-40">
            <h5 className="font-bold text-base text-white">Site Menu</h5>
            <a href="#" className="underline text-[#898989]">
              Home
            </a>
          </div>
          {/* right */}
          <div className="w-full flex flex-col gap-3 right-0">
            <h5 className="font-bold text-base text-white">Social Icons</h5>
            <Image
              alt="instagram"
              src={"/instagram.png"}
              width={15}
              height={15}
            />
          </div>
        </div>
        {/* copyright */}
        <div className="text-center text-[#585858] pt-10 text-base">
          <a href="#" className="underline">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
