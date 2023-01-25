/**
 * - prob: 문제
 * - sol: 정답
 * - write: 제출
 */
type SearchType = 'prob' | 'sol' | 'write';
type GitHubImg = `https://avatars.githubusercontent.com/${string}`;

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
