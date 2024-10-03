import { projects } from "@/constants";
import GameCard from "../Card/GameCard";

const games = projects.filter((tag) => tag.category === "game");

const GamesSection = () => {
  return (
    <section className="bg-background w-full py-6 lg:py-12 xl:py-24">
      {games.map((game) => (
        <GameCard
          key={game.id}
          imgAlt={game.title}
          imgSrc={game.images.feature}
          title={game.title}
          summary={game.summary}
          target={game.url.external}
        />
      ))}
    </section>
  );
};

export default GamesSection;
