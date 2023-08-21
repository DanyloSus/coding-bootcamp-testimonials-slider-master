import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IdStoreProps {
  activeId: number;
  maxId: number;
  nextId: () => void;
  pastId: () => void;
}

const useIdStore = create<IdStoreProps>()(
  devtools((set, get) => ({
    activeId: 0,
    maxId: 1,
    nextId: () => {
      if (get().activeId < get().maxId) {
        set((s) => ({ activeId: s.activeId + 1 }));
      } else {
        set(() => ({ activeId: 0 }));
      }
    },
    pastId: () => {
      if (get().activeId > 0) {
        set((s) => ({ activeId: s.activeId - 1 }));
      } else {
        set((s) => ({ activeId: s.maxId }));
      }
    },
  }))
);

export default useIdStore;
