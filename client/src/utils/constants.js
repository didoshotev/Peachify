import joeRouterABI from './abi/joe_router_abi.json';
import joeFactoryABI from './abi/joe_factory_abi.json';
import wavaxABI from './abi/wavax_abi.json';

export const CONSTANTS = { };

CONSTANTS.NETWORK_NAME = {
    RINKEBY: 'RINKEBY',
    AVALANCHE: 'AVALANCHE',
    FUJI: 'FUJI',
};

CONSTANTS.ADDRESSES_ENUM = {
    RINKEBY: {
        JOE_ROUTER: '0x7E2528476b14507f003aE9D123334977F5Ad7B14',
    },
    AVALANCHE: {
        JOE_ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    },
};

CONSTANTS.ABI_ENUM = {
    JOE_ROUTER: joeRouterABI,
    JOE_FACTORY: joeFactoryABI,
    WAVAX_ABI: wavaxABI,
};
