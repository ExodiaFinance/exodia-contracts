require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  solidity: "0.7.5",
  defaultNetwork: "ftm_testnet",
  networks: {
    hardhat: {
      /*
      forking: {
        url: `https://rpc.ftm.tools`
      },*/
    },
    ftm_testnet: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002,
      accounts: [process.env.DEPLOYER_SECRET_KEY],
      tags: ['TESTNET'],
    },
    ftm_mainnet: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [process.env.DEPLOYER_SECRET_KEY],
      tags: ['MAINNET'],
    }
  },
  etherscan: {
    apiKey: process.env.FTMSCAN_API_KEY
  },
};
