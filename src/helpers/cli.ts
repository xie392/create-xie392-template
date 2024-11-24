import { Branch } from "~/enum.js";
import Logger from "~/utils/logger.js";
import { validatedAppName } from "~/utils/validated.js";
import inquirer from "inquirer";
import { getBranchList } from "~/helpers/branch.js";

const defaultOptions = {
  name: "new-project",
  packages: Object.entries(Branch).map(([value, name]) => ({ value, name })),
};

export async function runCli() {
  try {
    const branches = (await getBranchList()) ?? defaultOptions.packages;

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
        name: "branch",
        message: "What template do you want to use?",
        choices: branches,
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
