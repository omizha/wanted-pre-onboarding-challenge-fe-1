import { useCallback, useRef } from "react";
import { isValidatedEmail } from "../features/auth/validate/isValidatedEmail";
import { isValidatedPassword } from "../features/auth/validate/isValidatedPassword";

interface AuthProps {
    onLogin: (email: string, password: string) => void;
    onSignUp: (email: string, password: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, onSignUp }) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const onLoginClick = useCallback(() => {
        const email: string = emailRef.current!.value;
        const password: string = passwordRef.current!.value;

        switch (true) {
            case !isValidatedEmail(email):
            case !isValidatedPassword(password):
                return;
        }

        onLogin(email, password);
    }, [onLogin]);

    const onSingUpClick = useCallback(() => {
        const email: string = emailRef.current!.value;
        const password: string = passwordRef.current!.value;

        switch (true) {
            case !isValidatedEmail(email):
            case !isValidatedPassword(password):
                return;
        }

        onSignUp(email, password);
    }, [onSignUp]);

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
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    ref={passwordRef}
                />
            </div>
            <div>
                <button type="submit" onClick={onLoginClick}>
                    로그인
                </button>
            </div>
            <div>
                <button type="submit" onClick={onSingUpClick}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Auth;
