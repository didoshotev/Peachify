/* eslint-disable */
import { BigNumber } from 'ethers';

export const shortenAddress = (str) => `${str.substring(0, 6)}...${str.substring(str.length - 4)}`;

export const getBalance = (balance, decimals = 18) => Number(balance.div(BigNumber.from(10).pow(decimals)));
