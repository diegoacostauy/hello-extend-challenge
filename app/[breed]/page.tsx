import Results from "../components/Results";

type Props = {
  params: {
    breed: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <section>
      <h3>{params.breed}</h3>
      {/* @ts-expect-error Server Component */}
      <Results query={params.breed} />
    </section>
  );
}
