import Link from "next/link";

const BannerCTA = (props: any) => {
  const { caption = "View More Projects", target } = props;
  return (
    <div className="w-full">
      <Link
        href={target}
        className="bg-theme hover:bg-white text-black hover:text-theme outline-none uppercase text-2xl lg:text-4xl font-bold flex justify-center w-full mb-8 py-8 lg:py-20 focus:bg-white focus:text-theme focus-visible:ring-8 focus-visible:ring-theme focus-visible:ring-offset-8 active:text-black"
      >
        {caption}
      </Link>
    </div>
  );
};

export default BannerCTA;
