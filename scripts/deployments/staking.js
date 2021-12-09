const deployStakingHelper = require("./stakingHelper");
const deployDistributor = require("./stakingDistributor");
module.exports = async (ethers, treasuryAddress, ohmAddress, sOhmAddress, epochLength, initialRewardRate) => {
    const currentBlock = await ethers.provider.getBlockNumber()
    const stakingFactory = await ethers.getContractFactory("OlympusStaking");
    const staking = await stakingFactory.deploy(ohmAddress, sOhmAddress, epochLength, currentBlock, currentBlock)
    const stakingHelper = await deployStakingHelper(ethers, staking.address, ohmAddress);
    const distributor = await deployDistributor(ethers, treasuryAddress, ohmAddress, epochLength, currentBlock + epochLength);
    await distributor.addRecipient(staking.address, initialRewardRate);
    await staking.setContract(0, distributor.address);
    return { staking, stakingHelper, distributor };
}