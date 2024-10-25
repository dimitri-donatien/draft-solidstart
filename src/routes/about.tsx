import { Title } from "@solidjs/meta";
import { createEffect, For } from "solid-js";
import storeSignal from "../lib/db";
//import { useStore } from "../lib/db";

export default function Home() {
  const [count, setCount] = storeSignal;
  // createEffect(() => {
  //   console.log("TEST STORE", test);
  // });

  // setInterval(() => console.log("CALLING?", test), 3000);
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <p>This is the about page.</p>

      <button onClick={() => setCount((x) => x + 1)}>{count()}</button>

      {/* <For each={test.store.countries}>
        {(country: any) => (
          <h3>
            {country.name} : {country.gdp}
          </h3>
        )}
      </For> */}
    </main>
  );
}
