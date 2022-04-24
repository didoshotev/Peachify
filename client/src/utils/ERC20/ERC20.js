const { Contract } = require('ethers');
const { ABI } = require('./erc20-abi.json');

class ERC20 {
    contract;
    address;
    symbol;
    decimal;

    constructor(address, provider, symbol, decimal = 18) {
        this.contract = new Contract(address, ABI, provider);
        this.address = address;
        this.symbol = symbol;
        this.decimal = decimal;
    }

    connect(signerOrProvider) {
        this.contract = new Contract(this.address, ABI, signerOrProvider);
    }

    totalSupply() {
        return this.contract.totalSupply();
    }

    balanceOf(account) {
        return this.contract.balanceOf(account);
    }
}

export default ERC20;
