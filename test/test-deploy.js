const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", () => {
    let SimpleStorageFactory, simpleStorage

    beforeEach(async () => {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Test retrieve()", async () => {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = 0
        assert.equal(currentValue, expectedValue)
    })

    it("Test store()", async () => {
        const expectedValue = 7
        const transactionResponse = await simpleStorage.store(7)
        transactionResponse.wait()
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue, expectedValue.toString())
    })

    it("Test addPerson()", async () => {
        const expectedName = "Lily"
        const expectedValue = 16
        await simpleStorage.addPerson(expectedName, expectedValue)

        const personArray = await simpleStorage.people(0)
        const currentName = personArray[0]
        const currentValue = personArray[1]

        assert.equal(currentName, expectedName)
        assert.equal(currentValue, expectedValue)
    })
})
