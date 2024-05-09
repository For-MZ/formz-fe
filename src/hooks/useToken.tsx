import { create } from 'zustand';

type TokenState = {
  token: string | null;
  refreshToken: string | null;
  setToken: (token: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
};

const useToken = create<TokenState>((set) => {
  if (typeof window !== 'undefined') {
    return {
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken'),
      setToken: (token) => {
        set({ token });
        if (token) {
          localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('token');
        }
      },
      setRefreshToken: (refreshToken) => {
        set({ refreshToken });
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken);
        } else {
          localStorage.removeItem('refreshToken');
        }
      },
    };
  } else {
    // 서버 측에서는 localStorage를 사용할 수 없으므로 빈 상태를 반환하거나 다른 처리를 수행할 수 있습니다.
    return {
      token: null,
      refreshToken: null,
      setToken: () => {},
      setRefreshToken: () => {},
    };
  }
});

export default useToken;
