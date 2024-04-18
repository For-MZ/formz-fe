export type Signup = {
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
  verificationCodeError: string;
  showPassword: boolean;
  image: string;
  showAlert: boolean;
  submitSuccess: boolean;
  submitFail: boolean;
};

export type Login = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  loginFail: boolean;
};
