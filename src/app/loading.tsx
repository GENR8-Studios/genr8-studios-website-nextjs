import { Spinner } from "@/components";

export default function Loading() {
  return (
    <section className="w-full min-h-[100dvh] flex h-full justify-center items-center">
      <Spinner />
    </section>
  );
}
