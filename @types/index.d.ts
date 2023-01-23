/**
 * - prob: 문제
 * - sol: 정답
 * - write: 제출
 */
type SearchResult = 'prob' | 'sol' | 'write';
type GitHubImg = `https://avatars.githubusercontent.com/${string}`;

export const isGitHubImg = (str: string): str is GitHubImg => str.startsWith('https://avatars.githubusercontent.com');

//Fetched Data
type Prob = {
  id: string;
  title: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
};

interface Sol {
  id: string;
  probId: string;
  code: string;
}

interface User {
  id: string;
  username: string;
  profileImg: GitHubImg | null;
}
