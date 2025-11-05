import create from 'zustand';

export const useShopStore = create(() => ({
  coins: 0,
  inventory: [] as string[],
}));
