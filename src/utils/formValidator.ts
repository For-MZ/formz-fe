const formValidator = {
  emailRegEx: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
  nicknameRegEx: /^[a-zA-Z0-9가-힣]{2,10}$/,
  passwordRegEx: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  verificationCodeRegEx: /^[0-9]*$/,

  validateEmail: (email: string): string => {
    if (email.length < 1) {
      return '이메일을 입력해주세요.';
    } else if (!formValidator.emailRegEx.test(email)) {
      return '올바른 이메일 형식으로 입력해주세요.';
    }
    return '';
  },

  validatePassword: (password: string): string => {
    if (password.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!formValidator.passwordRegEx.test(password)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    }
    return '';
  },

  validateNewPassword: (newPassword: string): string => {
    if (newPassword.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!formValidator.passwordRegEx.test(newPassword)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    }
    return '';
  },

  validateNickname: (nickname: string): string => {
    if (nickname.length < 1) {
      return '닉네임을 입력해주세요.';
    } else if (!formValidator.nicknameRegEx.test(nickname)) {
      return '올바른 닉네임 형식으로 입력해주세요.';
    }
    return '';
  },

  validateConfirmPassword: (password: string, confirmPassword: string): string => {
    if (confirmPassword.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!formValidator.passwordRegEx.test(confirmPassword)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    } else if (password !== confirmPassword) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  },
  validateConfirmNewPassword: (newPassword: string, confirmPassword: string): string => {
    if (confirmPassword.length < 1) {
      return '비밀번호를 입력해주세요.';
    } else if (!formValidator.passwordRegEx.test(confirmPassword)) {
      return '영문 대소문자, 숫자, 특수 문자 포함 8자 이상 입력해주세요.';
    } else if (newPassword !== confirmPassword) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  },
  validateVerificationCode: (verificationCode: string): string => {
    if (verificationCode.length < 1) {
      return '인증번호를 입력해주세요.';
    } else if (!formValidator.verificationCodeRegEx.test(verificationCode)) {
      return '숫자로 이루어진 인증번호를 입력해주세요.';
    }
    return '';
  },
};

const formValidatorUtils = {
  ...formValidator,
};

export default formValidatorUtils;
