import { useCallback, useRef } from "react";

interface LoginReqType {
    email: string;
    password: string;
}

interface AuthProps {
    login: (reqData: LoginReqType) => void;
}

const Auth: React.FC<AuthProps> = ({ login }) => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    const onClick = useCallback(() => {
        const email: string = emailRef.current!.state.value;
        const password: string = passwordRef.current!.state.value;

        // 예외 처리
        switch (true) {
            // 이메일 조건
            case !email.includes("@"):
            case !email.includes("."):
            case !(email.length > 0):
            // 비밀번호 조건 (@eslint-disable-next-line no-fallthrough)
            case !(password.length >= 8):
                return;
        }

        login({ email, password });
    }, []);

    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="이메일"
                    ref={emailRef}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="email"
                    id="password"
                    placeholder="이메일"
                    ref={passwordRef}
                />
            </div>
            <div>
                <button type="submit" onClick={onClick}>
                    제출
                </button>
            </div>
        </div>
    );
};

export default Auth;
