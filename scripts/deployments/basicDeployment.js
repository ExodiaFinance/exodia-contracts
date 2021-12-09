const deployOHM = require("./ohm");
const deploySOHM = require("./sohm");
const deployTreasury = require("./treasury");
const deployStaking = require("./staking");
const deployCalculator = require("./bondCalculator");

const zeroAddress = '0x0000000000000000000000000000000000000000';

module.exports = async (ethers, daiAddress, rr = "3000") => {
    const [deployer] = await ethers.getSigners();
    const ohm = await deployOHM(ethers);
    const sohm = await deploySOHM(ethers);
    await sohm.setIndex(1);
    const treasury = await deployTreasury(ethers, ohm.address, daiAddress);
    await ohm.setVault(deployer.address);

    const stakingDeployment = await deployStaking(ethers, treasury.address, ohm.address, sohm.address, 28800, rr);

    await sohm.initialize(stakingDeployment.staking.address);
    await treasury.queue("0", daiAddress);
    /*await treasury.toggle("0", daiAddress, zeroAddress);
    await treasury.queue('8', stakingDeployment.distributor.address);
    await treasury.toggle('8', stakingDeployment.distributor.address, zeroAddress);
    await treasury.queue('0', deployer.address);
    await treasury.toggle('0', deployer.address, zeroAddress);
    await treasury.queue('4', deployer.address,);
    await treasury.toggle('4', deployer.address, zeroAddress);*/
    const bondCalculator = await deployCalculator(ethers, ohm.address);
    return {
        ohm,
        sohm,
        treasury,
        bondCalculator,
        ...stakingDeployment
    }

}