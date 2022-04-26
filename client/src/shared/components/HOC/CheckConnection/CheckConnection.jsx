/* eslint-disable */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useWeb3 } from "../../../../context/Web3Context/Web3ContextProvider";

export const CheckConnection = ({ children }) => {
    const { account } = useWeb3();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!account) {
            navigate("/");
        }
    }, [account])

    return (
        <>
            {children}
        </>
    )
}