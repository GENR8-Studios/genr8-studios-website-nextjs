import { currentYear } from "./shared";

const yearsExperience = currentYear - 2016;

export const teamMembers = [
  {
    id: 1,
    name: "Kobé Watson",
    role: "Game Designer",
  },
  {
    id: 2,
    name: "Marcus Cowan",
    role: "3D Designer",
  },
  {
    id: 3,
    name: "Kevaughn Lee",
    role: "Graphic Designer",
  },
];

export const aboutInfo = {
  title: "About Us",
  contentOne: `At GENR8 Studios, we ignite boundless creativity and innovation
                in the gaming and animation realms. Our commitment is to craft
                immersive, visually stunning, and interactive experiences that
                captivate and inspire audiences globally.`,
  contentTwo: `Through relentless passion and expertise, we aim to be pioneers
                in the industry, fostering a community where art meets
                technology, and stories come alive in extraordinary ways. With
                each endeavor, we strive to GENR8 a future where entertainment
                transcends boundaries, fostering joy and wonder in every heart.`,
  heading: "Our Services",
  subheading: "What We Provide",
  teamHeading: "Our Team",
  teamSubheading: "Who Does The Work",
  achieveHeading: "Our Achievements",
  achieveSubheading: "What we have accomplished",
};

export const stats = [
  {
    id: 1,
    total: 120,
    entity: "completed projects",
  },
  {
    id: 2,
    total: 400,
    entity: "satisfied clients",
    annex: "+",
  },
  {
    id: 3,
    total: yearsExperience,
    entity: "years of experience",
  },
];
