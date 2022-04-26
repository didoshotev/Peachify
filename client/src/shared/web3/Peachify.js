import { Contract, ethers } from "ethers";
import RINKEBY_DEPLOYMENTS from "../../utils/deployments/deployments.rinkeby.json";
// console.log(RINKEBY_DEPLOYMENTS);

export class Peachify { 
    currentAccount;
    provider;
    jsonRpcProvider;
    signer;
    config;
    contracts = { };

    AVAX;
    PeachToken;
    USDT;
    PeachAvaxPair;

    constructor() {
        const provider = ethers.getDefaultProvider(); 

        // load deployed contracts from rinkeby
        for(const [name, deployment] of Object.entries(RINKEBY_DEPLOYMENTS)) { 
            this.contracts[name] = new Contract(deployment.address, deployment.abi, provider);
        }
    }

    getJoeRouter02() { 
        return this.contracts["JoeRouter02"];
    }
}