import { projects } from "@/constants";
import ProjectCard from "../Card/ProjectCard";

const Projects = () => {
  return (
    <section className="bg-black min-h-[100dvh] w-full">
      <div className="bg-background flex flex-wrap justify-evenly gap-y-16 px-4 py-16">
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
