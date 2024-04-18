export type User = {
  userId: string;
  email: string;
  nickName: string;
  profileImage: string;
};

export type MyPage = {
  nickname: string;
  isNicknameAvailable: boolean;
  isSaveEnabled: boolean;
  nicknameError: string;
  image: string;
  showAlert: boolean;
  changeSuccess: boolean;
  changeFail: boolean;
};
