import inquirer from "inquirer";
import { validatedAppName } from "~/utils/validated.js";
import Logger from "~/utils/logger.js";
import { Branch } from "~/enum.js";

export interface CommandPackages {
  value: Branch;
  name: string;
}
export interface CommandOptions {
  name: string;
  packages: CommandPackages[];
}

const defaultOptions: CommandOptions = {
  name: "new-project",
  packages: [
    { value: Branch.React, name: "React" },
    { value: Branch.ReactShadcn, name: "React + Shadcn UI" },
    { value: Branch.Vue, name: "Vue" },
    { value: Branch.VueShadcn, name: "Vue + Shadcn UI" },
  ],
};

export async function command() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        default: defaultOptions.name,
        validate: validatedAppName,
      },
      {
        type: "list",
        name: "packages",
        message: "What template do you want to use?",
        choices: defaultOptions.packages,
      },
    ]);
    return answers;
  } catch (error) {
    if (error.name === "ExitPromptError") {
      Logger.error("User exited prompt");
    }
    process.exit(1);
  }
}
