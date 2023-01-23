import { nanoid } from 'nanoid';

export type DummyData = {
  probs: Prob[];
  sols: Sol[];
  user: User;
};
const probs: Prob[] = [
  { id: nanoid(), title: '징검다리', level: 3 },
  { id: nanoid(), title: '방의 개수', level: 2 },
  { id: nanoid(), title: '시험장 나누기', level: 1 },
] as Prob[];

const getSol = (probId: Prob['id']) => {
  return {
    id: nanoid(),
    probId,
    code: '',
  };
};
const sols: Sol[] = probs.map((p) => getSol(p.id));

const user: User = {
  id: nanoid(),
  username: 'codeisneverodd',
  profileImg: 'https://avatars.githubusercontent.com/u/54318460?v=4',
};

export const dummyData: DummyData = {
  probs,
  sols,
  user,
};
