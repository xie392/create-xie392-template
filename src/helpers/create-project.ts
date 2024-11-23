import { Branch } from "~/enum.js";
import Logger from "~/utils/logger.js";
import degit from "degit";
import path from "path";
import { CommandOptions } from "~/command.js";
import chalk from "chalk";

const REPO = "gitee:xie392/template-cli";

export async function createProject(
  commandOptions: Omit<CommandOptions, "packages"> & {
    packages: Branch;
  }
) {
  const emitter = degit(`${REPO}#${commandOptions.packages}`, {
    cache: false,
    force: true,
  });
  const targetDir = path.resolve(process.cwd(), commandOptions.name);

  Logger.info(`\nCreating project in ${chalk.green(targetDir)}...`);

  console.log("url；", emitter, targetDir);

  //   try {
  //     await emitter.clone(targetDir);
  //     console.log(chalk.green(`\nProject created successfully!`));
  //     console.log(chalk.yellow(`\nNext steps:`));
  //     console.log(chalk.cyan(`  cd ${commandOptions.name}`));
  //     console.log(chalk.cyan(`  npm install`));
  //     console.log(chalk.cyan(`  npm run dev`));
  //   } catch (error) {
  //     console.error(chalk.red("Error creating project:"), error.message);
  //   }
}
