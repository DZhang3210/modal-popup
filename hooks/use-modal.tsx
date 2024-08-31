import { create } from "zustand";

type ModalType = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const useModal = create<ModalType>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));
