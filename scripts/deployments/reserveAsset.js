module.exports = async (ethers, chainId) => {
    const DAI = await ethers.getContractFactory('DAI');
    const dai = await DAI.deploy(chainId);
    return dai;
}
