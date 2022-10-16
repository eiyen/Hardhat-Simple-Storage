require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require('solidity-coverage')

module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            /**
             * localhost node is like to ganache
             * it's considered be seperated from hardhat
             * even though they have the same chainId
             */
            url: "http://127.0.0.1:8545/",
            // accounts: [<auto invoked by hardhat>]
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: {
            goerli: process.env.ETHERSCAN_API_KEY,
        },
        customChains: [
            {
                network: "goerli",
                chainId: 5,
                urls: {
                    apiURL: "http://api-goerli.etherscan.io/api",
                    browserURL: "https://goerli.etherscan.io",
                },
            },
        ],
    },
    gasReporter: {
        enabled: false,
    },
}
