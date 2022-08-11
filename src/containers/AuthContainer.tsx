import { useCallback } from "react";
import { PostUsersCreate } from "../apis/users/PostUsersCreate";
import { PostUsersLogin } from "../apis/users/PostUsersLogin";
import Auth from "../components/Auth";
import { useTokenStore } from "../features/auth/useTokenStore";

export default function AuthContainer() {
    const { setToken } = useTokenStore();

    const onLogin = useCallback(
        (email: string, password: string) => {
            PostUsersLogin({ email, password })
                .then(({ token }) => {
                    setToken(token);
                    window.location.href = "/";
                })
                .catch(() => {
                    setToken(null);
                    alert("로그인에 실패했습니다.");
                });
        },
        [setToken]
    );

    const onSignUp = useCallback(
        (email: string, password: string) => {
            PostUsersCreate({ email, password })
                .then(({ token }) => {
                    setToken(token);
                    window.location.href = "/";
                })
                .catch(() => {
                    setToken(null);
                    alert("계정생성에 실패했습니다.");
                });
        },
        [setToken]
    );

    return <Auth onLogin={onLogin} onSignUp={onSignUp} />;
}
