import Image from "next/image";

const KnowledgeSection = () => {
  return (
    <div className="overview-knowledge-bg flex min-h-[632px] md:min-h-[932px] w-full pb-0 pl-4 pr-4 md:pb-10 md:pl-0 lg:max-h-[932px] lg:min-h-screen lg:pb-0 xl:pr-[65px]">
      <div className="container flex flex-col items-start justify-start md:items-end md:justify-end lg:justify-center">
        <div className="w-fit">
          <h3 className="mt-[35px] w-[90%] text-3xl font-bold text-[#002724] md:mt-0 md:w-full md:text-[32px] md:font-black">
            Improve your Basic Knowledge
          </h3>
          <p className="mt-4 max-w-[537px] font-normal text-[#002724] md:mt-0 md:font-black">
            Embark on a comprehensive learning journey with Brain Builders. Play
            and Learn makes education exciting with games that teach and
            entertain. Brain Tutor personalises your study experience, offering
            targeted lessons and activities to boost your knowledge. Test your
            skills in Take Exams, designed to replicate real exam conditions,
            and track your progress. For an extra challenge, Challenge Yourself
            provides puzzles and quizzes that push you to think critically and
            creatively. Explore these features and enhance your educational
            journey with us!
          </p>
          <div className="mt-6 flex items-center justify-start gap-[14px] md:mt-10">
            <div className="cursor-pointer">
              <Image
                src="/images/google-play.svg"
                alt="google-play"
                width={204}
                height={192}
                className="h-[23px] w-[74px] rounded object-cover md:h-[47px] md:w-[150px] md:rounded-lg"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/images/apple-store.svg"
                alt="apple-store"
                width={150}
                height={45}
                className="h-[22px] w-[74px] rounded object-cover md:h-[45px] md:w-[150px] md:rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeSection;
