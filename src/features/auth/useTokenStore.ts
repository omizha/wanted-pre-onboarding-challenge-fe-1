import create from "zustand";
import { devtools, subscribeWithSelector, persist } from "zustand/middleware";
import { isValidatedToken } from "./validate/isValidatedToken";

interface TokenState {
    token: string | null;
    isValidToken: () => boolean;
}

export const useTokenStore = create<TokenState>()(
    devtools(
        subscribeWithSelector(
            persist(
                (set, get) => ({
                    token: null,
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

export const setToken = (token: string | null) => (set: any) => {
    set(() => ({ token }));
};
