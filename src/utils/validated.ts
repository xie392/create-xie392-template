/**
 * 验证应用名称是否合法
 * @param appName    应用名称
 * @returns
 */
export function validatedAppName(appName: string): string | boolean {
  // 验证中文
  const isChinese = /[\u4e00-\u9fa5]/.test(appName);
  if (isChinese) {
    return "Please enter a valid English name";
  }
  return true;
}
