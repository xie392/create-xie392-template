#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { APP_NAME } from "~/constants.js";
import { runCli } from "~/helpers/cli.js";
import { createProject } from "~/helpers/create-project.js";

async function main() {
  try {
    const program = new Command();
    program
      .name(APP_NAME)
      .description("A CLI for creating web applications with the template")
      .action(async () => {
        const answer = await runCli();
        await createProject(answer);
        process.exit(1);
      });
    program.parse(process.argv);
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

main();
