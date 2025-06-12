import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../../utils/auth"
import { type JSX } from "react";

interface Props{
    children: JSX.Element;
}


export const PublicRoute:React.FC<Props> = ({children})=>{
    return isAuthenticated() ? <Navigate to='/dashboard' replace /> : children;
}