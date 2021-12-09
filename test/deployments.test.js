const { ethers } = require("hardhat");
const { expect } = require("chai");

const basicDeploy = require("../scripts/deployments/basicDeployment");
const deployDai = require("../scripts/deployments/reserveAsset");

describe("test deployments", function () {
    it("should deploy basic ohm, sohm, treasury, staking, staking helper", async function () {
        this.timeout(100000)
        const [deployer] = await ethers.getSigners();
        console.log("Deployer: ", deployer.address);
        const dai = await deployDai(ethers, 0)
        const components = await basicDeploy(ethers, dai.address)
        expect(components.ohm.address).to.not.be.undefined;
        expect(await components.ohm.owner()).to.be.equal(deployer.address)
        expect(components.sohm.address).to.not.be.undefined;
        expect(await components.sohm.manager()).to.be.equal(deployer.address)
        expect(components.treasury.address).to.not.be.undefined;
        expect(await components.treasury.manager()).to.be.equal(deployer.address)
        expect(components.staking.address).to.not.be.undefined;
        expect(await components.staking.manager()).to.be.equal(deployer.address)
        expect(components.stakingHelper.address).to.not.be.undefined;
        expect(components.distributor.address).to.not.be.undefined;
        expect(await components.distributor.policy()).to.be.equal(deployer.address)
        expect(components.bondCalculator.address).to.not.be.undefined;
    })
    /*
        it("should stake OHM", async function () {
            const dai = await deployDai(ethers, 0);
            const components = await basicDeploy(ethers, dai.address);
        })*/
})