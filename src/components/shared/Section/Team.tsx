import { aboutInfo, teamMembers } from "@/constants";

const Team = () => {
  return (
    <div className="bg-black max-lg:min-h-[80dvh] lg:min-h-[100dvh]">
      <div className="w-[84%] mx-auto py-12 lg:py-20">
        <div className="flex flex-col gap-y-1 mb-10">
          <h3 className="uppercase font-bold max-lg:text-theme text-4xl xl:text-6xl max-lg:text-center">
            {aboutInfo.teamHeading}
          </h3>
          <span className="flex items-center max-lg:hidden">
            <div className="bg-white w-2 h-2 rounded-full"></div>
            <div className="bg-white rounded-full w-8 h-[1px] border"></div>
            <p className="uppercase text-gray-400 tracking-wide pl-2">
              {aboutInfo.teamSubheading}
            </p>
          </span>
        </div>
        <div className="w-full flex justify-center">
          <ul className="w-full flex max-lg:flex-col justify-between max-lg:gap-y-8">
            {teamMembers.map((team) => (
              <li
                key={team.id}
                className="group custom-bg bg-team-member lg:w-[30%] lg:h-[74dvh]"
              >
                <div className="bg-transparent w-full h-full flex items-end p-4 duration-200 transition-all group-hover:bg-black/40">
                  <div className="bg-black w-full h-auto">
                    <div className="flex flex-col p-4 gap-y-[2px] lg:gap-y-1 xl:gap-y-4">
                      <span className="flex items-center">
                        <div className="p-2 aspect-square">
                          <div className="bg-theme aspect-square w-2 p-1"></div>
                        </div>
                        <p className="uppercase font-bold text-gray-400 text-sm xl:text-xl">
                          {team.role}
                        </p>
                      </span>
                      <p className="uppercase font-bold text-2xl lg:text-[1.5rem] xl:text-[2.625rem] w-full pl-2 xl:pl-1">
                        {team.name}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
