import { create } from 'zustand';

type currentMenu = {
  currentMenu: '공공 공고' | '공공 단지';
  setCurrentMenu: (menu: currentMenu['currentMenu']) => void;
};

const useCurrentMenu = create<currentMenu>((set) => ({
  currentMenu: '공공 공고',
  setCurrentMenu: (menu) => set({ currentMenu: menu }),
}));

export default useCurrentMenu;
