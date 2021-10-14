/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');

require('dotenv').config()

const pkey = process.env.PRIVATE_KEY || "your private key"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.6.12",
  namedAccounts: {
    deployer: {
      default: 0,
      97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      56: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      96: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
        97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
        56: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
        96: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
    },
  },

  networks: {
    bsc: {
      url: process.env.BSC_RPC,
      chainId: 56,
      accounts: [`0x${pkey}`], 
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_RPC,
      chainId: 97,
      accounts: [`0x${pkey}`], 
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  },
};
