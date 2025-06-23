import { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

interface Props{
    children:JSX.Element;
}


const PrivateRoute:React.FC<Props>=({children})=>{
    return isAuthenticated() ? children:<Navigate to='/ingresar' replace />;
}

export default PrivateRoute;