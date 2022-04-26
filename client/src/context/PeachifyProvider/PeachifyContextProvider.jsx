/* eslint-disable */
import { useContext, useEffect, useState } from 'react';
import { Peachify } from '../../shared/web3/Peachify';
import { PeachifyContext } from './PeachifyContext';

const PeachifyContextProvider = ({ children }) => {
    const [peachify, setPeachify] = useState(null);
    
    useEffect(() => {
        if (!peachify) {  
            const newPeachify = new Peachify();
            setPeachify(newPeachify);
        }
    }, []);

    return <PeachifyContext.Provider value={{ peachify }}>{children}</PeachifyContext.Provider>;
}

const usePeachify = () => { 
    const context = useContext(PeachifyContext);

    if(!context) { 
        throw new Error("usePeachify must be used within a PeachifyContextProvider");
    }
    
    return context;
}

export { PeachifyContextProvider, usePeachify };
