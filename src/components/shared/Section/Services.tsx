import { aboutInfo, services } from "@/constants";

const Services = () => {
  return (
    <div className="bg-black min-h-[100dvh]">
      <div className="py-14 lg:py-28">
        <div className="w-[84%] mx-auto py-8">
          {/* HEADING SUBSECTION */}
          <div className="flex flex-col gap-y-1 mb-10">
            <h3 className="uppercase font-bold max-lg:text-theme text-4xl xl:text-6xl max-lg:text-center">
              {aboutInfo.heading}
            </h3>
            <span className="flex items-center max-lg:hidden">
              <div className="bg-white w-2 h-2 rounded-full"></div>
              <div className="bg-white rounded-full w-8 h-[1px] border"></div>
              <p className="uppercase text-gray-400 tracking-wide pl-2">
                {aboutInfo.subheading}
              </p>
            </span>
          </div>
          {/* CONTENT SUBSECTION */}
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((card: any) => (
              <div
                key={card.id}
                className="bg-background border-2 border-gray-800/10 rounded-sm p-8"
              >
                <div className="flex flex-col gap-y-2">
                  <div>
                    <p className="text-theme font-thin tracking-widest">
                      0{card.id}
                    </p>
                    <p className="uppercase font-bold tracking-wide text-lg xl:text-2xl">
                      {card.name}
                    </p>
                  </div>
                  <p className="text-gray-400">{card.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
