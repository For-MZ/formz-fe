export type FormState = {
  //types 폴더에 넣기
  email: string;
  emailError: string;
  nickname: string;
  nicknameError: string;
  password: string;
  passwordError: string;
  showEmailInput: boolean;
  confirmPassword: string;
  confirmPasswordError: string;
  emailVerified: boolean;
  nicknameAvailable: boolean;
  verificationCode: string;
  verificationError: string;
  showPassword: boolean;
  image: string;
  showAlert: boolean;
  submitSuccess: boolean;
  submitFail: boolean;
};
