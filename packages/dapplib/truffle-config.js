require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remain hole hope enroll bottom tonight'; 
let testAccounts = [
"0x809afb98ea624244abd3cda25e6252ffe3da3faf296eb0e71f14fa6bb3f0418c",
"0x3c55f5413de5f83ad4214be99d0d3292b77192e6bacacfd01774c41eb45becac",
"0x3be66c763cf8713e6f2f09c34373c5d108454032520c2d10873bb873af78e4b6",
"0x22c9953a2af3ecd49982d2cac9660fdb8117b042b803772259b1eb91aa1289ec",
"0x7aa8575d4a2fe177d8d5a577e7c2b2a260a3810a9e9a5a651b68f3127833c6dc",
"0xb666dd74012f914c1aefb508e5a86109b475b53e86b6d530ed305041d207c06d",
"0xf2ca8aaa08d78f5898c0e7ff67aae7fd4c9542753fe25856d94584c7a7e08ecd",
"0xc4595ab46047ae422bf77ba76517eef9faf7219617c8dda82201f1dd41c1c1a4",
"0x45fed3d7c09184f12a62c67831dbb697ed6112e8bdb4b451589aaa6e2ec7ed53",
"0xb488e6e8ad05ee619279a418b0a757ffe2d110ad38375ee771efeac761826159"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

