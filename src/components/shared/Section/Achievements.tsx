import { aboutInfo, stats } from "@/constants";

const Achievements = () => {
  return (
    <div className="bg-black">
      <div className="py-14 lg:py-28">
        <div className="w-[84%] mx-auto py-8">
          {/* HEADING SUBSECTION */}
          <div className="flex flex-col gap-y-1 justify-center">
            <h3 className="uppercase font-bold max-lg:text-theme text-4xl xl:text-6xl max-lg:text-center">
              {aboutInfo.achieveHeading}
            </h3>
            <span className="flex items-center max-lg:hidden">
              <div className="bg-white w-2 h-2 rounded-full"></div>
              <div className="bg-white rounded-full w-8 h-[1px] border"></div>
              <p className="uppercase text-gray-400 tracking-wide pl-2">
                {aboutInfo.achieveSubheading}
              </p>
            </span>
          </div>
          {/* CONTENT SUBSECTION */}
          <div className="flex max-lg:flex-col lg:justify-end lg:gap-x-4 mt-8 gap-y-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="border-theme flex lg:flex-col lg:gap-y-2 capitalize border w-full lg:w-48 px-8 py-6 lg:py-16 max-lg:items-center gap-x-2"
              >
                <p className="text-2xl lg:text-5xl font-bold">
                  {stat.total}
                  {stat.annex}
                </p>
                <div className="lg:w-8 border border-theme max-lg:hidden"></div>
                <p className="text-xl lg:text-lg text-balance leading-tight">
                  {stat.entity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
