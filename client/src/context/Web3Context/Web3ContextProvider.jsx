/* eslint-disable */
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { CONSTANTS } from "../../utils/constants";
import { Web3Context } from "./Web3Context";


function initProvider() {
    if (window.ethereum) {
        return new ethers.providers.Web3Provider(window.ethereum);
    }
    return null;
}

let initialMount = true;

const Web3ContextProvider = ({ children }) => {
    const [account, setAccount] = useState();
    const [networkId, setNetworkId] = useState();
    const [contractLiquidity, setContractLiquidity] = useState();

    const [provider, setProvider] = useState(initProvider)

    const requestAccount = async () => {
        if (!window.ethereum) { return null; }

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        console.log(accounts);
        setAccount(accounts[0]);
    }

    const getRouterContract = (providerOrSigner, networkName) => {
        if (!CONSTANTS.NETWORK_NAME[networkName]) {
            return null;
        }

        const routerContract = new ethers.Contract(
            CONSTANTS.ADDRESSES_ENUM[networkName].JOE_ROUTER,
            CONSTANTS.ABI_ENUM.JOE_ROUTER,
            providerOrSigner
        );
        return routerContract;
    }

    const getPeachTokenContract = (providerOrSigner) => {
        // TODO
    }

    const getWavaxTokenContract = (providerOrSigner, networkName) => {
        if (!CONSTANTS.NETWORK_NAME.AVALANCHE) {
            return null;
        }

        const routerContract = new ethers.Contract(
            CONSTANTS.ADDRESSES_ENUM[networkName].JOE_ROUTER,
            CONSTANTS.ABI_ENUM.JOE_ROUTER,
            providerOrSigner
        );
        return routerContract;
    }

    const getAccountBalance = async () => {
        if (!provider) { return null; }
        if (!account) { return null; }

        let balance = await provider.getBalance(account);
        return await Number(ethers.utils.formatEther(balance.toString())).toFixed(2);
    }

    const handleStartUp = async () => {
        if (typeof window.ethereum != undefined) {
            const acc = await provider.listAccounts();
            if (acc) {
                setAccount(acc[0]);
            }
            setContractTotalLiquidity();
            setNetworkId(window.ethereum.networkVersion);
            window.ethereum.on("chainChanged", function (networkId) {
                // Time to reload your interface with the new networkId
                setNetworkId(networkId);
            });
            window.ethereum.on("accountsChanged", async function (acc) {
                if (acc) {
                    // changed account
                    setAccount(acc[0]);
                } else {
                    // disconnect
                    setAccount([]);
                }
            });
        }
    };

    const switchToAaxNetwork = async () => {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: "0xa86a",
                rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                chainName: "Avalanche Network",
                nativeCurrency: {
                    name: "AVAX",
                    symbol: "AVAX",
                    decimals: 18
                },
                blockExplorerUrls: ["https://snowtrace.io/"]
            }]
        });
    }

    const accountsChangedHandler = (accounts) => {
        if (!accounts[0]) {
            setProvider(null);
            setAccount(null);
        }
        setAccount(accounts[0]);
    };

    const chainChangedHandler = (networkId) => {
        // Time to reload your interface with the new networkId
        setNetworkId(networkId);
    };

    // 1.
    const initWeb3Provider = async () => {
        let provider = null
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
        }
        setProvider(provider);
    }

    // 2.
    const connectWithWallet = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        if (!accounts[0]) {
            throw new Error("Can't get accounts");
        }
        setAccount(accounts[0]);
    }

    // 3.
    const handleInit = async () => {
        if (!window.ethereum) {
            setAccount(null);
            setProvider(null);
            console.log('should disconnect...!');
            return;
        }
        const acc = await provider.listAccounts() || null;

        setAccount(acc[0]);
        setNetworkId(window.ethereum.networkVersion);

        window.ethereum.on("chainChanged", (networkId) => chainChangedHandler(networkId));
        window.ethereum.on("accountsChanged", (accounts) => accountsChangedHandler(accounts));
    }

    const connect = async () => {
        await initWeb3Provider();
        await handleInit();
        await getAccountBalance();
    }

    useEffect(() => {
        connect();

        return () => {
            window.ethereum.removeListener("chainChanged", chainChangedHandler);
            window.ethereum.removeListener("accountsChanged", accountsChangedHandler);
        }
    }, [account])
    return (
        <Web3Context.Provider
            value={{
                requestAccount,
                provider,
                account,
                getRouterContract,
                getPeachTokenContract,
                getWavaxTokenContract,
                getAccountBalance,
                handleStartUp,
                switchToAaxNetwork,
                connect,
                connectWithWallet
            }}>
            {children}
        </Web3Context.Provider>
    )
};


const useWeb3 = () => {
    const context = useContext(Web3Context);

    if (!context) {
        throw new Error("useWeb3 must be used within a Web3ContextProvider")
    }

    return context;
}

export { Web3ContextProvider, useWeb3 };