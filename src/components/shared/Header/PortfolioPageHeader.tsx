import { headers } from "@/constants";

const PortfolioPageHeader = () => {
  return (
    <header className="min-h-[30dvh] lg:min-h-[60dvh] w-full flex items-center bg-black">
      <div className="flex w-full justify-center">
        <h1 className="text-4xl xl:text-6xl font-bold text-white tracking-wide max-lg:text-theme">
          {headers.portfolio}
        </h1>
      </div>
    </header>
  );
};

export default PortfolioPageHeader;
