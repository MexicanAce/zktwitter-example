import create from "zustand";
import { Contract } from "./types";

type Store = {
  selectedContract: Contract | null;
  setSelectedContract: (contract: Contract) => void;
};

export const useStore = create<Store>((set) => ({
  selectedContract: null,
  setSelectedContract: (contract) => set({ selectedContract: contract }),
}));
