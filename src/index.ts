import { command } from "~/command.js";
import { Command } from "commander";
import { createProject } from "~/helpers/create-project.js";
import Logger from "./utils/logger.js";

async function main() {
  try {
    const program = new Command();

    program
      .name("create")
      .version("1.0.0")
      .description("A custom project scaffolding tool.")
      .action(async () => {
        const answer = await command();
        await createProject(answer);
      });

    program.parse(process.argv);
  } catch (error) {
    Logger.error(error.message);
  }
}

main();
