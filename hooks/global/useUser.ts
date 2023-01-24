import { atom, useRecoilState } from 'recoil';
import { dummyData } from 'pages/dummy';

const userAtom = atom({
  key: 'userAtom',
  default: dummyData.user as User,
});

export const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return { user };
};
