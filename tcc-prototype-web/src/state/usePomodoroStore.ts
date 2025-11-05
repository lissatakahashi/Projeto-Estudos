import create from 'zustand';

type PomodoroState = {
  running: boolean;
  seconds: number;
  start: () => void;
  stop: () => void;
};

export const usePomodoroStore = create<PomodoroState>((set) => ({
  running: false,
  seconds: 0,
  start: () => set({ running: true }),
  stop: () => set({ running: false }),
}));
