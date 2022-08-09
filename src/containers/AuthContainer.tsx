import { useCallback } from "react";
import Auth from "../components/Auth";

export default function AuthContainer() {
    const login = useCallback((reqData: any) => {}, []);

    return <Auth login={login} />;
}
