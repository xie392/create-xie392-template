import { command } from "~/command.js";

async function main() {
  const answer = await command();
  console.log("answer:", answer);
}

main();
