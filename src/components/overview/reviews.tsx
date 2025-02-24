import Image from "next/image";

const Reviews = () => {
  return (
    <div
      className="flex min-h-[832px] lg:min-h-screen lg:max-h-[832px] w-full pt-10 md:pt-[153px]"
      style={{
        background: 'url("/images/overview-bg-E.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-12">
        <h4 className="text-3xl md:text-4xl lg:text-5xl text-[#002724] text-center md:text-left">
          Our User <span className="text-[#0062A2]">Experience!</span>
        </h4>
        <div className="mt-7 flex flex-col lg:flex-row items-start lg:items-center gap-7">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Image
              src={"/images/user-profile-b.svg"}
              alt="user profile image"
              width={671}
              height={444}
              className="h-[128px] w-[135px] object-cover"
            />
            <div>
              <h5 className="text-3xl md:text-[40px] text-[#002724] text-center md:text-left">
                <span className="font-bold text-[#F17700]">Chichi</span> Ahmed
              </h5>
              <p className="max-w-[298px] font-bold text-[#002724] text-center md:text-left">
                atem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Image
              src={"/images/user-profile.svg"}
              alt="user profile image"
              width={671}
              height={444}
              className="h-[128px] w-[135px] object-cover"
            />
            <div>
              <h5 className="text-3xl md:text-[40px] text-[#002724] text-center md:text-left">
                <span className="font-bold text-[#F17700]">Bright</span> Kunle
              </h5>
              <p className="max-w-[298px] font-bold text-[#002724] text-center md:text-left">
                atem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
