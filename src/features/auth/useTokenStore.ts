import create from "zustand";
import { devtools, subscribeWithSelector, persist } from "zustand/middleware";
import { isValidatedToken } from "./validate/isValidatedToken";

type TokenType = string | null;

interface TokenState {
    token: TokenType;
    setToken: (token: TokenType) => void;
    isValidToken: () => boolean;
}

export const useTokenStore = create<TokenState>()(
    devtools(
        subscribeWithSelector(
            persist(
                (set, get) => ({
                    token: null,
                    setToken: (token) => set({ token }),
                    isValidToken: () => {
                        return isValidatedToken(get().token);
                    },
                }),
                {
                    name: "token-storage",
                    getStorage: () => localStorage,
                }
            )
        )
    )
);
