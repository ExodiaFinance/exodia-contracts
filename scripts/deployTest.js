const { ethers } = require("hardhat");
const deployOHM = require("./deployments/ohm");
const deployTreasury = require("./deployments/treasury");

async function main(chainId) {
    const [deployer] = await ethers.getSigners();


    console.log("Treasury: ", treasury.address)
}

main()