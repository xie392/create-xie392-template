import chalk from "chalk";

class Logger {
  static log(message: string) {
    console.log(chalk.green(message));
  }

  static error(message: string) {
    console.log(chalk.red(message));
  }

  static warn(message: string) {
    console.log(chalk.yellow(message));
  }

  static info(message: string) {
    console.log(chalk.blue(message));
  }
}

export default Logger;
