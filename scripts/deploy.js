/* Import Packages */
const { ethers, run, network } = require("hardhat")

/* Scripts */
async function main() {
    /* 1. Deploy Contract */
    console.log("Deploying...")
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed Contract Address: ${simpleStorage.address}`)

    /* 2. Verify Contract */
    // if (network.config.chainId === 5) {
    //     console.log("Verifying Goerli Contract...")
    //     await simpleStorage.deployTransaction.wait(6)
    //     await verify(simpleStorage.address, [])
    // }

    /* 3. Interact with contract */
    console.log(await simpleStorage.retrieve())
    let transactionRespond = await simpleStorage.store(7)
    await transactionRespond.wait()
    console.log(await simpleStorage.retrieve())

    transactionRespond = await simpleStorage.addPerson("Lily", 6)
    await transactionRespond.wait()
    const peopleArray = simpleStorage.people(0)
    console.log(peopleArray)
    console.log(typeof peopleArray)
    console.log(await peopleArray[0])
}

async function verify(address, constructorArgsParams) {
    try {
        await run("verify:verify", {
            address: address,
            constructorArguments: constructorArgsParams,
        })
    } catch (e) {
        console.log(e)
    }
}

/* Run Scripts */
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
