import { PrismaClient } from "@prisma/client";
import { createMemo, createRoot, createSignal } from "solid-js";
import { createSingletonRoot } from "@solid-primitives/rootless";

const prisma = new PrismaClient();

process.on("beforeExit", () => {
  prisma.$disconnect();
});
export default createRoot(() => createSignal(0));

// export const useStore = createRoot(() => {
//   return useWatcher(prisma, ["countries"], prismaConnector)
// });
