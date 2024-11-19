export function validatedAppName(appName: string): string | boolean {
  // 验证中文
  const isChinese = /[\u4e00-\u9fa5]/.test(appName);
  if (isChinese) {
    return "Please enter a valid English name";
  }
  // 验证特殊字符
  //   const specialChar = /[~`!#$%^&*()_+-=|{}':";'<>?,./\\]/;
  //   if (specialChar.test(appName) && appName.trim() !== "") {
  //     return "Please enter a valid name without special characters";
  //   }
  return true;
}
