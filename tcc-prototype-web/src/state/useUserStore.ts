import create from 'zustand';

type UserState = {
  id: string;
  name?: string;
  setGuest: (id: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
  id: Math.random().toString(36).slice(2, 9),
  setGuest: (id) => set({ id }),
}));
