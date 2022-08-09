import { useRef } from "react";

export default function Auth() {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

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
                <button type="submit">제출</button>
            </div>
        </div>
    );
}
