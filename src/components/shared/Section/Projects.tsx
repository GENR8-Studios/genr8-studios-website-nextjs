import { projects } from "@/constants";
import ProjectCard from "../Card/ProjectCard";

const Projects = () => {
  return (
    <section className="bg-black min-h-[100dvh] w-full pb-32 lg:pb-16">
      <div className="bg-background flex max-lg:flex-col lg:flex-wrap lg:justify-evenly max-lg:gap-y-36 lg:gap-y-16 px-4">
        {projects.map((card) => (
          <ProjectCard
            key={card.id}
            cardTitle={card.title}
            imgSrc={card.images.feature}
            target={card.url.internal}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
