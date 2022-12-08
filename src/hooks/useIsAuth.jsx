import { useIsAuthenticated } from "react-auth-kit"

export const useIsAuth = () => {
    const isAuth = useIsAuthenticated();
    return isAuth;
}