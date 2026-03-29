"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MetabolismPinnedValue = {
  showPinnedGoal: boolean;
  setShowPinnedGoal: (value: boolean) => void;
};

const MetabolismPinnedContext = createContext<MetabolismPinnedValue | null>(
  null,
);

export function MetabolismPinnedProvider({ children }: { children: ReactNode }) {
  const [showPinnedGoal, setShowPinnedGoal] = useState(false);
  const value = useMemo(
    () => ({ showPinnedGoal, setShowPinnedGoal }),
    [showPinnedGoal],
  );
  return (
    <MetabolismPinnedContext.Provider value={value}>
      {children}
    </MetabolismPinnedContext.Provider>
  );
}

export function useMetabolismPinned() {
  const ctx = useContext(MetabolismPinnedContext);
  if (!ctx) {
    throw new Error(
      "useMetabolismPinned must be used within MetabolismPinnedProvider",
    );
  }
  return ctx;
}
