import React from "react";
import Image from "next/image";
import { downIcon, missionIcon, targetIcon, visionIcon } from "@/assets";
import { stats } from "@/constants";

const accordions = [
  {
    id: 1,
    title: "Our Vision",
    icon: visionIcon,
    info: `At GENR8 Studios, we ignite boundless creativity and innovation in the gaming and animation realms. Our commitment is to craft immersive, visually stunning, and interactive experiences that captivate and inspire audiences globally. Through relentless passion and expertise, we aim to be pioneers in the industry, fostering a community where art meets technology, and stories come alive in extraordinary ways. With each endeavor, we strive to GENR8 a future where entertainment transcends boundaries, fostering joy and wonder in every heart.`,
  },
  {
    id: 2,
    title: "Our Goals",
    icon: targetIcon,
    info: (
      <ul className="flex flex-col gap-y-4">
        <li>
          &#8226; Crafting worlds that captivate and inspire global audiences,
          every time.
        </li>
        <li>
          &#8226; Striving for continuous innovation and creativity in game
          development, while pushing the boundaries of storytelling and
          gameplay.
        </li>
        <li>
          &#8226; Cultivating a collaborative environment where talent thrives,
          empowered to unleash their full potential.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Our Mission",
    icon: missionIcon,
    info: `At GENR8 Studios, our mission is to revolutionize the gaming and animation industry through the infusion of cutting-edge technology and artistic excellence. We are devoted to creating worlds that enthrall, stories that resonate, and experiences that unite audiences across the globe. Through collaboration, innovation, and a relentless pursuit of perfection, we aim to set new standards in entertainment, fostering a culture of creativity where imagination knows no bounds. Our strength lies in our team, united in passion and dedication, pushing the boundaries of what's possible, one masterpiece at a time.`,
  },
];

const yearExp = stats.filter((gap) => gap.id === 3).map((stat) => stat.total);
const yearExpLabel = stats
  .filter((gap) => gap.id === 3)
  .map((stat) => stat.entity);

const AccordionGroup = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="w-[88dvw] mx-auto flex flex-row-reverse justify-between">
        <div className="w-full lg:w-2/5 flex flex-col gap-y-8 py-8">
          {accordions.map((accordion) => (
            <details key={accordion.id} className="py-2 px-4">
              <summary className="flex cursor-pointer font-semibold text-lg px-4 py-2 justify-between">
                <span className="flex items-center gap-x-2">
                  <Image
                    alt="accordion icon"
                    src={accordion.icon}
                    width={30}
                    height={30}
                  />
                  <p>{accordion.title}</p>
                </span>
                <Image alt="down icon" src={downIcon} width={30} height={30} />
              </summary>
              <div className="text-gray-300 leading-6 text-sm p-4">
                {accordion.info}
              </div>
            </details>
          ))}
        </div>
        <div className="max-lg:hidden aspect-square bg-theme lg:w-80 lg:h-80 flex items-center justify-center">
          <div className="p-16">
            <p className="text-4xl lg:text-9xl font-bold">0{yearExp}</p>
            <p className="uppercase font-semibold">{yearExpLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionGroup;
