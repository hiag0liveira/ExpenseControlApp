import { useAppSelector } from "../store/hooks"

export const useAuth = (): boolean => {
    const isAuth = useAppSelector((state) => state.user.isAuth)

    return isAuth
}