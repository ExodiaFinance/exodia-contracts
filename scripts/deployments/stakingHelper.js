module.exports = async (ethers, stakingAddress, ohmAddress) => {
    const stakingHelperFactory = await ethers.getContractFactory('StakingHelper');
    const stakingHelper = await stakingHelperFactory.deploy(stakingAddress, ohmAddress);
    return stakingHelper;
}