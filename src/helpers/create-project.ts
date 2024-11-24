import { Branch } from "~/enum.js";
import Logger from "~/utils/logger.js";
import { simpleGit } from "simple-git";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { REPO_AddRESS } from "~/constants.js";

export interface ICreateProjectOptions {
  name: string;
  branch: Branch;
}

/**
 * 创建项目
 * @param answers
 */
export async function createProject(answers: ICreateProjectOptions) {
  // 结构项目名和分支名
  const { name, branch } = answers;

  const git = simpleGit();

  // 解析目标目录的绝对路径
  const targetDir = path.resolve(process.cwd(), name);

  // 进度条
  const spinner = ora("Cloning repository...").start();

  try {
    await git.clone(REPO_AddRESS, targetDir, [
      "--branch",
      branch,
      "--single-branch",
    ]);

    Logger.log(`\nCreating project in ${chalk.green(targetDir)}...`);
    // 显示进度条
    spinner.succeed("Repository cloned successfully!");
    console.log(chalk.green(`\nProject created successfully!`));
    console.log(chalk.yellow(`\nNext steps:`));
    console.log(chalk.cyan(`  cd ${name}`));
    console.log(chalk.cyan(`  npm install`));
    console.log(chalk.cyan(`  npm run dev`));
  } catch (error) {
    spinner.fail("Error cloning repository.");
    Logger.error(`Error creating project: ${error.message}`);
  }
}
