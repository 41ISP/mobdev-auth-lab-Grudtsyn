import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from '../../store/useUserStore'

const AuthGuard = ({children}) => {
    const navigate = useNavigate()
    const {session} = useUserStore()
    useEffect(() => {
        if (!session?.token) navigate('/login')
    }, [])

    if(!session?.token) return <></>

    return children
}

export default AuthGuard