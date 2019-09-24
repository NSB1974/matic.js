import Web3 from 'web3';
import { SendOptions } from '../types/Common';
export default class Web3Client {
    parentWeb3: Web3;
    web3: Web3;
    parentDefaultOptions: SendOptions;
    maticDefaultOptions: SendOptions;
    constructor(parentProvider: any, maticProvider: any, parentDefaultOptions: any, maticDefaultOptions: any);
    call(method: any, options?: SendOptions): Promise<any>;
    send(method: any, options?: any): Promise<any>;
    callOnMatic(method: any, options?: any): Promise<any>;
    sendOnMatic(method: any, options?: any): Promise<any>;
    getParentWeb3(): Web3;
    getMaticWeb3(): Web3;
    setParentDefaultOptions(options: any): void;
    setMaticDefaultOptions(options: any): void;
}
