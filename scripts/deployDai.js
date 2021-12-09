const deployDai = require("./deployments/reserveAsset");
const { ethers } = require("hardhat");

async function main() {
    const dai = await deployDai(ethers, 4002);
    console.log("DAI:", dai.address)
}

main()