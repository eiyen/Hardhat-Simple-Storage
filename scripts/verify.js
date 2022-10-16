const { run, network } = require("hardhat")

async function verify(address, constructorArgsParams) {
    if (network.config.chainId === 5) {
        console.log("Verifying Goerli Contract...")
        await run("verify:verify", {
            address: address,
            constructorArguments: constructorArgsParams,
        })
    }
}

// Goerli Contract Address: 0x7A51e1BDfb387D36B220456799A4Fd6E0511bfA4
verify("0x7A51e1BDfb387D36B220456799A4Fd6E0511bfA4", [])