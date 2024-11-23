import inquirer from "inquirer";
import { validatedAppName } from "~/utils/validated.js";
import Logger from "~/utils/logger.js";

const defaultOptions = {
  name: "new-project",
  packages: [
    { value: "react", name: "React" },
    { value: "react-shadcn", name: "React + Shadcn UI" },
    { value: "vue", name: "Vue" },
    { value: "vue-shadcnt", name: "Vue + Shadcn UI" },
  ],
  languages: [
    { value: "typescript", name: "TypeScript" },
    { value: "javascript", name: "JavaScript" },
  ],
  flags: {
    packageName: "react",
    languageType: "typescript",
  },
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
        default: defaultOptions.flags.packageName,
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
