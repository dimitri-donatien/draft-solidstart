import { PrismaClient } from "@prisma/client/extension";
import { prismaConnector, useWatcher } from "realtime";
import { For, onMount } from "solid-js";

export default function Home() {
  return (
    <main>
      <h1>Countries</h1>
      <For each={[]}>
        {(country) => (
          <div>
            <h1>{country.name}</h1>
          </div>
        )}
      </For>
    </main>
  );
}
