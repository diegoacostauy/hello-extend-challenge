import React from "react";

import { AnimalResponse } from "@/types";

import Animal from "./Animal";
import Grid from "./Grid";

export default async function Results({ query }: { query?: string }) {
  const apiUrl = query
    ? `https://dog.ceo/api/breed/${query}/images`
    : `https://dog.ceo/api/breeds/image/random/12`;
  const res: Response = await fetch(apiUrl);
  const { message: animals }: AnimalResponse = await res.json();

  return (
    <section>
      <Grid>
        {animals.map((animal, idx) => (
          <Animal key={idx} animal={animal} />
        ))}
      </Grid>
    </section>
  );
}
