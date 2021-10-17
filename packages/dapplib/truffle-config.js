require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy reflect noble honey include civil army genuine'; 
let testAccounts = [
"0x4c17f59719463313c502ab25afe412f4f1dd688716620c1092a69a20b5e5b9c5",
"0x7002fb37264f4cbfd9e9ceac7c97e3d07a4bb9fd6e6283e9c67bbb46b49d0ca6",
"0xc1af0ef100abb3d4195ed56f80cde21a65c95c1582ed6336d07c1037bf52d8c8",
"0xe636abb0b11823bfc37e65c02c9e6d77f4fd552201cf30257dd29c7500746fa5",
"0x1e19f678bb42f9cb8727274270e27c4a1ca00d78858750b7e9ad8264fbb6b035",
"0x9385286455f33b1470d6611c2b6dc6b669a8c4eb9d6038a43df4ff23f8d366e9",
"0x34c5ec5a5a203eaa5dd41154fe4ede6833ba9e8e9c165d23dc4d808fcc58d2c5",
"0x5e7736712396886332777858aa0613d75f04db2a2c7422d13ad6d06a2518b7e4",
"0x205f502accde0ac0fa275b7f80cd328ec784e88befabcb10615fad49b7ee5889",
"0xb8f1b0f9d42332c3d4ac2483840e395bcd530b29844f69df27f71d28e4b507b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

