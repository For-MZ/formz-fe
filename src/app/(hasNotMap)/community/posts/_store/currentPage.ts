import { create } from 'zustand';

type currentPageState = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  initCurrentPage: () => void;
};

const useCurrentPageStore = create<currentPageState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  initCurrentPage: () => set({ currentPage: 1 }),
}));

export default useCurrentPageStore;
