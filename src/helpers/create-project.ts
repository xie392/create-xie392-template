import { Branch } from "~/enum.js";
import Logger from "~/utils/logger.js";
import degit from "degit";
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

  // 使用 degit 工具从指定的 Git 仓库拉取项目模板
  const emitter = degit(`${REPO_AddRESS}#${branch}`, {
    cache: false,
    force: true,
  });

  // 解析目标目录的绝对路径
  const targetDir = path.resolve(process.cwd(), name);

  Logger.log(`\nCreating project in ${chalk.green(targetDir)}...`);

  // 显示进度条
  const spinner = ora("Cloning repository...").start();

  try {
    // 克隆仓库到本地
    await emitter.clone(targetDir);
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
