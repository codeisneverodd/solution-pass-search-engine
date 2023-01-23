export const isGitHubImg = (str: string): str is GitHubImg => str.startsWith('https://avatars.githubusercontent.com/');
