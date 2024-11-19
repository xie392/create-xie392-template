import inquirer from "inquirer";
import { validatedAppName } from "~/utils/validated.js";
import Logger from "~/utils/logger.js";

const defaultOptions = {
  name: "new-project",
  packages: [
    { value: "react", name: "React" },
    { value: "vue", name: "Vue" },
    { value: "next", name: "Next" },
    { value: "nuxt", name: "Nuxt" },
    { value: "vanilla", name: "Vanilla JS" },
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
        message: "What framework do you want to use?",
        choices: defaultOptions.packages,
        default: defaultOptions.flags.packageName,
      },
      {
        type: "list",
        name: "language",
        message: "What language do you want to use?",
        choices: defaultOptions.languages,
        default: defaultOptions.flags.languageType,
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
