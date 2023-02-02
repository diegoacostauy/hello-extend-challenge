import Results from "./components/Results";

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component  */}
      <Results />
      <hr className="my-9 border-t-[1px] border-t-gray-100" />
    </>
  );
}
