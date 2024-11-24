import { REPO_AddRESS } from "~/constants.js";
import { simpleGit } from "simple-git";

export async function getBranchList() {
  const git = simpleGit();
  const remoteBranches = await git.listRemote(["--heads", REPO_AddRESS]);
  const branches = remoteBranches
    .split("\n")
    .filter((line) => line.includes("refs/heads/"))
    .map((line) => {
      const branchName = line.replace(/.*refs\/heads\//, "").trim();
      return {
        name: branchName,
        value: branchName,
      };
    });

  return branches.filter((v) => v.name !== "master");
}
